'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

const createSchema = z.object({
    childName: z.string({
        invalid_type_error: 'Name deines Kindes muss angegeben werden.',
    }).trim().min(1,  { message: "Name deines Kindes muss angegeben werden." }),
})

export async function createCustomer(_: any, formData: FormData) {
    const validatedFields = createSchema.safeParse({
        childName: formData.get('childName'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await fetch(
        `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}?returnIds=true`,
        {
            body: JSON.stringify( {
                "mutations": [
                    {
                        "create": {
                            "_type": "customer",
                            "childName": validatedFields.data.childName,
                        },
                    },
                ]
            }),
            headers: {
                Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        },
    ).then((response)=> {
        return response.json();
    })

    if (response && typeof response === 'object' && response.results && Array.isArray(response.results) && response.results.length > 0 && response.results[0].id) {
        const customerId = response.results[0].id;
        cookies().set('customerId', customerId)

        return {status: 200, data: {customerId}}
    } else {
        return {status: 500, errors: []}
    }
}

const updateSchema = z.object({
    childDateOfBirth: z.date({errorMap:  () => ({ message: "Das Geburtsdatum des Kindes muss angegeben werden." })}),
    email: z.union([
        z.literal(''),
        z.string().email({ message: "Es muss eine korrekte E-Mail-Adresse angegeben werden." }),
    ]),
    privacy: z.coerce.boolean(),
})

export async function updateCustomer(_: any, formData: FormData) {
    const customerId = cookies().get('customerId')?.value

    const formChildDateOfBirth = formData.get('childDateOfBirth')
    let childDateOfBirth = null;

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