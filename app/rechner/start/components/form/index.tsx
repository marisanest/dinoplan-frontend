"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import {createCustomer, CreateCustomerState} from "@/rechner/start/actions/createCustomer";
import CalculatorStartFormChildNameInput from "@/rechner/start/components/form/inputs/childName";
import CalculatorButtons from "@/rechner/components/buttons";
import {z} from "zod";
import React, {useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import Text from "@/components/text/text";
import CalculatorStartFormChildAgeInput from "@/rechner/start/components/form/inputs/childAge";
import Button from "@/components/buttons";
import {CustomerQueryResult} from "@/rechner/start/components/start";

const schema = z.object({
    childName: z.string({
        invalid_type_error: 'Der Name deines Kindes muss angegeben werden.',
    }).trim().min(1,  { message: "Der Name deines Kindes muss angegeben werden." }),
    childAge: z.number().transform((value, ctx): number => {
        if (value === null || value === undefined) {
            ctx.addIssue({
                code: "invalid_type",
                expected: "number",
                received: "null",
                message: "Das Alter deines Kindes muss angegeben werden."
            });
            return z.NEVER;
        }

        return value;
    })
})

export type CreateCustomerSchema = z.infer<typeof schema>

const resolver = async (data) => {
    const validatedFields = schema.safeParse(data)

    return {
        values: validatedFields.data ? validatedFields.data : {},
        errors: validatedFields.success ? {} : Object.fromEntries(
            Object.entries(
                validatedFields
                    .error
                    .flatten()
                    .fieldErrors
            ).map(([field, errors]) => [field, {message: errors.join(' ')}])
        ),
    }
}

type CalculatorStartFormProps = {
    customer: CustomerQueryResult
}

export default function CalculatorStartForm({customer}: CalculatorStartFormProps) {
    const [serverResponse, setServerResponse] = useState<CreateCustomerState>({})
    const router = useRouter()
    const [pending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<CreateCustomerSchema>({
        resolver: resolver,
        defaultValues: {
            childName: customer?.childName,
            childAge: customer?.childAge,
        }
    })

    const onSubmit: SubmitHandler<CreateCustomerSchema> = async (data) => {
        startTransition(async () => {
            const response = await createCustomer(customer, data);

            if (response.status === 200) {
                router.push('/rechner/berechnung')
            }

            setServerResponse(response)
        });
    };

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="s:grid ss:grid-cols-[140px_1fr] ss:gap-x-[1.5rem] ss:gap-y-[0.4rem]">
                <div className="w-full h-full flex items-center justify-center">
                    <Button className="hidden ss:inline-block !cursor-default hover:!bg-orange hover:!border-orange"
                            size="sm"
                            colors="orange">

                        <Text color="yellow">Starte hier</Text>
                    </Button>
                </div>

                <div className="flex flex-col gap-y-[0.8rem]">
                    <CalculatorStartFormChildNameInput key="child-name-input"
                                                       register={register}
                                                       pending={pending}
                                                       customer={customer} />

                    <CalculatorStartFormChildAgeInput key="child-age-input"
                                                      control={control}
                                                      pending={pending}
                                                      customer={customer} />
                </div>
            </div>
            <div className="s:grid ss:grid-cols-[140px_1fr] ss:gap-x-[1.5rem] ss:gap-y-[0.4rem] pb-y-paragraph">
                <div/>
                <div>
                    {
                        (serverResponse.error || errors?.childAge || errors?.childName) && (
                            <div className="pt-[8px] ss:pt-[0.4rem]"/>
                        )
                    }
                    {
                        serverResponse.error && (
                            <Text className="text-red-500" align="center" size="sm">
                                {serverResponse.error}
                            </Text>
                        )
                    }
                    {
                        errors?.childName && (
                            <Text className="text-red-500" align="left" size="sm">
                                {errors?.childName.message}
                            </Text>
                        )
                    }
                    {
                        errors?.childAge && (
                            <Text className="text-red-500" align="left" size="sm">
                                {errors?.childAge.message}
                            </Text>
                        )
                    }
                </div>
            </div>

            <CalculatorButtons key="buttons"
                               pending={pending}
                               prevLink={{type: 'internal', url: '/'}} />
        </form>
    );
}