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

    const customerId = 1;

   // const customerId = await fetch(
   //      `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}?returnIds=true`,
   //      {
   //          body: JSON.stringify(data),
   //          headers: {
   //              Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
   //              'Content-Type': 'application/json',
   //          },
   //          method: 'POST',
   //      },
   //  ) .then(function(response) {
   //     return response.json();
   // }).then(function(data) {
   //     return data.results.map((result) => result.id); // this will be a string
   // });

    cookies().set('customerId', customerId)

    return {status: 200, data: {customerId}}
}

const updateSchema = z.object({
    childDateOfBirth: z.string().pipe( z.coerce.date({
        errorMap: () => ({ message: "Das Geburtsdatum des Kindes muss angegeben werden." }),
    }) ),
        // z.coerce.date({
        // message: 'Geburtsdatum deines Kindes muss angegeben werden.',
        // invalid_type_error: 'Name deines Kindes muss angegeben werden.',}),
    email: z.string(),
    // legal: z.literal(true, {
    //     errorMap: () => ({ message: "You must accept the terms & conditions" }),
    // }),
    // legal: z.coerce.boolean().refine(bool => bool == true, {
    //     message: 'You must agree to our terms and conditions'
    // })
})

export async function updateCustomer(_: any, formData: FormData) {
    const customerId = cookies().get('customerId')?.value
    const childDateOfBirth = formData.get('childDateOfBirth')
    console.log(childDateOfBirth)
    console.log(typeof childDateOfBirth)

    const validatedFields = updateSchema.safeParse({
        childDateOfBirth: childDateOfBirth,
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
                        ...setEmail,
                    },
                },
            },
        ]
    }

    // const result = await fetch(
    //     `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
    //     {
    //         body: JSON.stringify(data),
    //         headers: {
    //             Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'POST',
    //     },
    // ).then((response) => response.json())

    return {status: 300}
}