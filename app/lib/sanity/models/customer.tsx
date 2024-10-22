'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

const createSchema = z.object({
    childName: z.string({
        invalid_type_error: 'Name deines Kindes muss angegeben werden.',
    }).trim().min(1,  { message: "Name deines Kindes muss angegeben werden." }),
})

export async function createCustomer(customArg: {customerId: string | undefined}, prevState: any, formData: FormData) {
    const validatedFields = createSchema.safeParse({
        childName: formData.get('childName'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const customerId = customArg.customerId
    let data = {}

    if (customerId) {
        data = {
            "mutations": [
                {
                    "patch": {
                        "id": customerId,
                        "set": {
                            "childName": validatedFields.data.childName,
                        },
                    },
                },
            ]
        }
    } else {
        data = {
            "mutations": [
                {
                    "create": {
                        "_type": "customer",
                        "childName": validatedFields.data.childName,
                    },
                },
            ]
        }
    }

    const result = await fetch(
        `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}?returnIds=true`,
        {
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        },
    ) .then(function(response) {
       return response.json();
   })

    return {status: 200, data: {customerId: customerId ?? result.results.map((result) => result.id)[0], childName: validatedFields.data.childName}}
}

const updateSchema = z.object({
    childDateOfBirth: z.date({errorMap:  () => ({ message: "Das Geburtsdatum des Kindes muss angegeben werden." })}),
    email: z.union([
        z.literal(''),
        z.string().email({ message: "Es muss eine korrekte E-Mail-Adresse angegeben werden." }),
    ]),
    privacy: z.coerce.boolean(),
    // privacy: z.coerce.boolean().refine(bool => bool, {
    //     message: 'Du musst unsere Datenschutzerklärung akzeptieren.'
    // })
})

export async function updateCustomer(customArg: {customerId: string | undefined}, prevState: any, formData: FormData) {
    const formChildDateOfBirth = formData.get('childDateOfBirth')
    let childDateOfBirth = null;

    const customerId = customArg.customerId
    let month
    let day
    let year

    try {
        if (typeof formChildDateOfBirth === 'string') {
            [month, day, year] = formChildDateOfBirth.split('/')
            childDateOfBirth = new Date(Date.parse(`${year}-${day}-${month} 00:00:00 GMT`))
        }
    } catch (error) {
        console.error(error)
    }

    const validatedFields = updateSchema.safeParse({
        childDateOfBirth: childDateOfBirth,
        email: formData.get('email'),
        privacy: formData.get('privacy'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const setEmail = {}
    if (validatedFields.data.email) setEmail["email"] = validatedFields.data.email;

    const data = {
        "mutations": [
            {
                "patch": {
                    "id": customerId,
                    "set": {
                        "childDateOfBirth": `${year}-${month}-${day}`,
                        ...setEmail,
                    },
                },
            },
        ]
    }

    const result = await fetch(
        `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
        {
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        },
    ).then((response) => response.json())

    return {status: 200, data: {childDateOfBirth: formChildDateOfBirth, email: validatedFields.data.email}}
}