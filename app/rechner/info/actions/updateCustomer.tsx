'use server'

import {revalidatePath} from "next/cache";
import {dateToString} from "@/lib/utils";
import {UpdateCustomerSchema} from "@/rechner/info/components/form";

export type UpdateCustomerState = {
    status?: number;
    error?: string;
}

export async function updateCustomer(customer: any, data: UpdateCustomerSchema): Promise<UpdateCustomerState> {
    const setFields: {
        childDateOfBirth?: string,
        email?: string | null,
        consentsToThePrivacyPolicy?: boolean | null,
    } = {}

    const childDateOfBirth = dateToString(data.childDateOfBirth)

    if (childDateOfBirth !== customer.childDateOfBirth) {
        setFields.childDateOfBirth = childDateOfBirth
    }

    if (data.email !== customer.email) {
        setFields.email = data.email;
    }

    if (data.consentsToThePrivacyPolicy !== customer.consentsToThePrivacyPolicy) {
        setFields.consentsToThePrivacyPolicy = data.consentsToThePrivacyPolicy;
    }

    if (Object.keys(setFields).length > 0) {
        const response = await fetch(
            `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
            {
                body: JSON.stringify(updateStatement({id: customer._id, setFields,})),
                headers: {
                    Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            },
        ).then(res => res.json())

        revalidatePath('/rechner/info')

        if (response.error) {
            console.error(response.error)
            return {error: "Etwas scheint schiefgelaufen zu sein. Bitte versuche es erneut!", status: 500}
        }
    }

    return {status: 200}
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
