import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        const data = {
            "mutations": [
                {
                    "create": {
                        "_type": "customer",
                        "email": email,
                    },
                },
            ]
        }

        const response = await fetch(
            `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
            {
                body: JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            },
        );

    // curl 'https://<project-id>.api.sanity.io/v2021-06-07/data/mutate/<dataset-name>' \
    // -H 'Authorization: Bearer <token>' \
    // -H 'Content-Type: application/json' \
    // --data-binary '{"mutations":[<transactions>]}'

        return NextResponse.json(response);
    } catch (error) {
        console.log('[CUSTOMERS_POST]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};