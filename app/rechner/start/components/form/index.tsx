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

const schema = z.object({
    childName: z.string({
        invalid_type_error: 'Der Name deines Kindes muss angegeben werden.',
    }).trim().min(1,  { message: "Der Name deines Kindes muss angegeben werden." }),
    childAge: z.string().transform((value, ctx): number => {
        console.log(value)
        if (value === null || value === '' || value === undefined) {
            ctx.addIssue({
                code: "invalid_type",
                expected: "number",
                received: "null",
                message: "Das Alter deines Kindes muss angegeben werden."
            });
            return z.NEVER;
        }

        const parsedValue = parseInt(value)

        if (isNaN(parsedValue)) {
            ctx.addIssue({
                code: "invalid_type",
                expected: "number",
                received: "null",
                message: "Ein gültiges Alter muss angegeben werden."
            });
            return z.NEVER;
        }

        if (parsedValue < 0) {
            ctx.addIssue({
                code: "invalid_type",
                expected: "number",
                received: "null",
                message: "Dein Kind muss mindestens 0 Jahre alt sein."
            });
            return z.NEVER;
        }

        return parsedValue;
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

export default function CalculatorStartForm({customer}: {customer: any}) {
    const [serverResponse, setServerResponse] = useState<CreateCustomerState>({})
    const router = useRouter()
    const [pending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateCustomerSchema>({
        resolver: resolver,
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
        <form className="w-full"
              onSubmit={handleSubmit(onSubmit)}>

            <div className="s:grid ss:grid-cols-[140px_1fr] ss:gap-x-[1.5rem] ss:gap-y-[0.4rem] pb-y-paragraph">
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
                                                       error={errors.childName}
                                                       pending={pending}
                                                       customer={customer} />

                    <CalculatorStartFormChildAgeInput key="child-age-input"
                                                      register={register}
                                                      error={errors.childAge}
                                                      pending={pending}
                                                      customer={customer} />

                    {serverResponse.error && (
                        <>
                            <div className="pt-[8px] ss:pt-[0.4rem]"/>
                            <Text className="text-red-500" align="center" size="sm">
                                {serverResponse.error}
                            </Text>
                        </>
                    )}
                </div>
            </div>

            <CalculatorButtons key="buttons"
                               pending={pending}
                               prevLink={{type: 'internal', url: '/'}} />
        </form>
    );
}