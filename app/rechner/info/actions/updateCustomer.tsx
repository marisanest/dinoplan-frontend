'use server'

import { z } from 'zod'

const updateSchema = z.object({
    childDateOfBirth: z.date({errorMap:  () => ({ message: "Das Geburtsdatum des Kindes muss angegeben werden." })}),
    email: z.union([
        z.literal(''),
        z.string().email({ message: "Es muss eine korrekte E-Mail-Adresse angegeben werden." }),
    ]),
    consentsToThePrivacyPolicy: z.coerce.boolean(),
})


function extractChildDateOfBirth(formData: any) {
    try {
        const childDateOfBirth = formData.get('childDateOfBirth')

        if (typeof childDateOfBirth === 'string') {
            const [month, day, year] = childDateOfBirth.split('/')
            return new Date(Date.parse(`${year}-${day}-${month} 00:00:00 GMT`))
        }
    } catch (error) {
        console.error(error)
    }

    return null;
}

function extractChildDateOfBirthSanityString(formData: any) {
    const childDateOfBirth = formData.get('childDateOfBirth')

    if (typeof childDateOfBirth === 'string') {
        const [month, day, year] = childDateOfBirth.split('/')
        return `${year}-${month}-${day}`
    }

    return null;
}

export async function updateCustomer(customArg: {customer: any}, _: any, formData: FormData) {
    const customer = customArg.customer

    const validatedFields = updateSchema.safeParse({
        childDateOfBirth: extractChildDateOfBirth(formData),
        email: formData.get('email'),
        consentsToThePrivacyPolicy: formData.get('consentsToThePrivacyPolicy'),
    })

    if (!validatedFields.success) {
        return {
            status: 500,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const setFields: {
        childDateOfBirth?: string,
        email?: string,
        consentsToThePrivacyPolicy?: boolean
    } = {}

    const childDateOfBirthSanityString = extractChildDateOfBirthSanityString(formData)

    if (childDateOfBirthSanityString && childDateOfBirthSanityString !== customer.childDateOfBirth) {
        setFields.childDateOfBirth = childDateOfBirthSanityString
    }

    if (validatedFields.data.email && validatedFields.data.email !== customer.email) {
        setFields.email = validatedFields.data.email;
    }

    if (validatedFields.data.consentsToThePrivacyPolicy && validatedFields.data.consentsToThePrivacyPolicy !== customer.consentsToThePrivacyPolicy) {
        setFields.consentsToThePrivacyPolicy = validatedFields.data.consentsToThePrivacyPolicy;
    }

    if (Object.keys(setFields).length > 0) {
        console.log("fetch")
        await fetch(
            `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
            {
                body: JSON.stringify(updateStatement({id: customer._id, setFields,})),
                headers: {
                    Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            },
        )
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
