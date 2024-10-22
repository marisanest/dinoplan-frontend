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

    const data = {
        "mutations": [
            {
                "create": {
                    "_type": "customer",
                    "childName": validatedFields.data.childName,
                },
            },
        ]
    }

   const customerId = await fetch(
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
   }).then(function(data) {
       return data.results.map((result) => result.id); // this will be a string
   });

    cookies().set('customerId', customerId)

    return {status: 200, data: {customerId}}
}
const convertDateToUTC = ( date: Date ) => new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds(), // should also include
)

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

export async function updateCustomer(_: any, formData: FormData) {
    const customerId = cookies().get('customerId')?.value
    const formChildDateOfBirth = formData.get('childDateOfBirth')
    let childDateOfBirth = null;

    try {
        if (typeof formChildDateOfBirth === 'string') {
            const [month, day, year] = formChildDateOfBirth.split('/')
            childDateOfBirth = new Date(Date.parse(`${year}-${day}-${month}T00:00:00+0000`))
        }
    } catch (error) {}

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
                        "childDateOfBirth": `${validatedFields.data.childDateOfBirth.getUTCFullYear()}-${validatedFields.data.childDateOfBirth.getUTCMonth()}-${validatedFields.data.childDateOfBirth.getUTCDate()}`,
                        ...setEmail,
                    },
                },
            },
        ]
    }

    await fetch(
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

    return {status: 200}
}