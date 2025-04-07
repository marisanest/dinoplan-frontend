'use server'

import {CostCalculation, Customer, ServiceModule} from "@/lib/types/sanity-types";
import {calculatePricePerMonth} from "@/lib/calculation";
import hash from "object-hash";

export async function updateServiceModules(
    customer: Customer | undefined,
    serviceModule: ServiceModule,
    costCalculation: CostCalculation,
    isSelected: boolean,
): Promise<{
    status: number;
    customer: Customer | undefined;
}> {
    if (!customer) {
        return {
            status: 500,
            customer,
        };
    }

    const currentServiceModules: Customer['serviceModules'] = customer?.serviceModules  ? [...customer?.serviceModules] : []
    let updatedServiceModules: Customer['serviceModules'] = []

    if (isSelected) {
        if (currentServiceModules.map((m) => m.name).includes(serviceModule.name ?? '')) {
            return {
                status: 200,
                customer: {
                    ...customer,
                    serviceModules: currentServiceModules,
                },
            };
        } else {
            const costPerMonth = calculatePricePerMonth(serviceModule, costCalculation, customer)
            const newServiceModule = {_key: "", name: serviceModule.name ?? '', costPerMonth}
            newServiceModule["_key"] = hash(newServiceModule)

            updatedServiceModules = currentServiceModules ? [...currentServiceModules, newServiceModule] : [newServiceModule];
        }
    } else {
        if (currentServiceModules.map((m) => m.name).includes(serviceModule.name ?? '')) {
            updatedServiceModules = currentServiceModules.filter(m => m.name !== serviceModule.name)
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

    return {
        status: 200,
        customer: {
            ...customer,
            serviceModules: updatedServiceModules,
        },
    };
}

function updateStatement({id, updatedServiceModules}: {id: string; updatedServiceModules: Customer['serviceModules']}) {
    return {
        "mutations": [
            {
                "patch": {
                    "id": id,
                    "set": {serviceModules: updatedServiceModules},
                },
            },
        ]
    }
}
