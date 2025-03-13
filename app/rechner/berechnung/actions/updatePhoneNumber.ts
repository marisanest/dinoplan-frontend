'use server'

import { z } from 'zod'

const updateSchema = z.object({
    phoneNumber: z.string(),
})

export async function updatePhoneNumber(customer: any, phoneNumber: string) {
    const validatedFields = updateSchema.safeParse({
        phoneNumber
    })

    if (!validatedFields.success) {
        return {
            status: 500,
            message: "Es muss eine valide Telefonnummer angegeben werden.",
        }
    }

    await fetch(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        {
            body: JSON.stringify(updateStatement({id: customer._id, setFields: {phoneNumber}})),
            headers: {
                Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        },
    )

    return {status: 200, message: 'Danke für deine Anfrage! Du wirst in kürze von uns kontaktiert.'};
}

function updateStatement({id, setFields}: {id: string; setFields: {[key: string]: any}}) {
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
