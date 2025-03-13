'use server'

import { cookies } from 'next/headers'
import {CreateCustomerSchema} from "@/rechner/start/components/form";
import {revalidatePath} from "next/cache";

export type CreateCustomerState = {
    status?: number;
    error?: string;
}

export async function createCustomer(customer: any, data: CreateCustomerSchema): Promise<CreateCustomerState> {
    if (customer) {
        const setFields: {
            childName?: string,
            childAge?: number,
        } = {}

        if (data.childName !== customer.childName) {
            setFields.childName = data.childName
        }

        if (data.childAge !== customer.childAge) {
            setFields.childAge = data.childAge
        }

        if (Object.keys(setFields).length > 0) {
            const response = await fetch(
                `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
                {
                    body: JSON.stringify(updateStatement({id: customer._id, setFields})),
                    headers: {
                        Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                },
            ).then(res => res.json())

            revalidatePath('/rechner/start')
            revalidatePath('/rechner/berechnung')

            if (response.error) {
                console.error(response.error)
                return {error: "Etwas scheint schiefgelaufen zu sein. Bitte versuche es erneut!", status: 500}
            }
        }

        return {status: 200}

    } else {
        const response = await fetch(
            `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}?returnIds=true`,
            {
                body: JSON.stringify( {
                    "mutations": [
                        {
                            "create": {
                                "_type": "customer",
                                "childName": data.childName,
                                "childAge": data.childAge,
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
            return {error: "Etwas scheint schiefgelaufen zu sein. Bitte versuche es erneut!", status: 500}
        }
    }
}

function updateStatement({id, setFields}: any) {
    return {
        "mutations": [
            {
                "patch": {
                    "id": id,
                    "set": setFields,
                },
            },
        ]
    }
}