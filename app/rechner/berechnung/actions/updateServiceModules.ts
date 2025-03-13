'use server'

import {Customer, ServiceModule} from "@/lib/types/sanity-types";

export async function updateServiceModules(customer: Customer, serviceModule: ServiceModule, isSelected: boolean): Promise<{
    status: number;
    customer: Customer;
}> {
    const currentServiceModules = customer?.serviceModules  ? [...customer?.serviceModules] : []
    let updatedServiceModules: string[] = []

    if (isSelected) {
        if (serviceModule.name && currentServiceModules.includes(serviceModule.name)) {
            return {
                status: 200,
                customer: {
                    ...customer,
                    serviceModules: currentServiceModules,
                },
            };
        } else {
            updatedServiceModules = serviceModule.name ? [...currentServiceModules, serviceModule.name] : currentServiceModules;
        }
    } else {
        if (serviceModule.name && currentServiceModules.includes(serviceModule.name)) {
            updatedServiceModules = currentServiceModules.filter(m => m !== serviceModule.name)
        } else {
            return {
                status: 200,
                customer: {
                    ...customer,
                    serviceModules: currentServiceModules,
                },
            };
        }
    }

    const res = await fetch(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        {
            body: JSON.stringify(updateStatement({id: customer._id, updatedServiceModules})),
            headers: {
                Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        },
    )

    console.log(res)

    return {
        status: 200,
        customer: {
            ...customer,
            serviceModules: updatedServiceModules,
        },
    };
}

function updateStatement({id, updatedServiceModules}: {id: string; updatedServiceModules: string[]}) {
    return {
        "mutations": [
            {
                "patch": {
                    "id": id,
                    "set": {serviceModules: updatedServiceModules},
                },
            },
            // {
            //     "patch": {
            //         "id": id,
            //         "insert": {
            //             "after": "serviceModules[-1]",
            //             "items": [
            //                 serviceModule.name
            //             ]
            //         }
            //     }
            // }
        ]
    }
}

