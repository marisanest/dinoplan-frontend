'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

const createSchema = z.object({
    childName: z.string({
        invalid_type_error: 'Name deines Kindes muss angegeben werden.',
    }).trim().min(1,  { message: "Name deines Kindes muss angegeben werden." }),
})

export type CreateCustomerState = {
    status?: number;
    errors?: {childName?: string[]};
}

export async function createCustomer(_: any, formData: FormData): Promise<CreateCustomerState> {
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

        return {status: 200}
    } else {
        return {status: 500}
    }
}
