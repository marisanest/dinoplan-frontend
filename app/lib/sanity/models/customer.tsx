'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

const createSchema = z.object({
    childName: z.string({
        invalid_type_error: 'Invalid Name',
    }).trim().min(1),
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

const updateSchema = z.object({
    childDateOfBirth: z.coerce.date(),
    hasChildPreExistingConditions: z.boolean(),
    email: z.string(),
})

export async function updateCustomer(_: any, formData: FormData) {
    const customerId = cookies().get('customerId')?.value

    console.log(formData.get('hasChildPreExistingConditions'))

    const validatedFields = updateSchema.safeParse({
        childDateOfBirth: '01 Jan 1970 00:00:00 GMT', //formData.get('childDateOfBirth'),
        hasChildPreExistingConditions: formData.get('hasChildPreExistingConditions') === 'true',
        email: formData.get('email'),
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
                        "childDateOfBirth": "2024-10-12", //validatedFields.data.childDateOfBirth,
                        "hasChildPreExistingConditions": validatedFields.data.hasChildPreExistingConditions,
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

    console.log(result)

    return {status: 200}
}