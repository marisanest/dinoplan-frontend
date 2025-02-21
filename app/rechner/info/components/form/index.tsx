"use client"

import CalculatorInfoFormChildDateOfBirthInput from "@/rechner/info/components/form/inputs/childDateOfBirth";
import CalculatorInfoFormEmailInput from "@/rechner/info/components/form/inputs/email";
import CalculatorInfoFormConsentsToThePrivacyPolicyInput from "@/rechner/info/components/form/inputs/consentsToThePrivacyPolicy";
import {useRouter} from "next/navigation";
import CalculatorButtons from "@/rechner/components/buttons";
import {z} from "zod";
import React, {useState, useTransition} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {updateCustomer, UpdateCustomerState} from "@/rechner/info/actions/updateCustomer";
import {stringDateToDate} from "@/lib/utils";
import Text from "@/components/text/text";

const schema = z.object({
    childDateOfBirth: z.date({errorMap:  () => ({ message: "Das Geburtsdatum des Kindes muss angegeben werden." })}),
    email: z.union([
        z.literal(''),
        z.string().email({ message: "Es muss eine korrekte E-Mail-Adresse angegeben werden." }),
    ]).optional(),
    consentsToThePrivacyPolicy: z.coerce.boolean(),
})

export type UpdateCustomerSchema = z.infer<typeof schema>

const resolver = async (data) => {
    const validatedFields = schema.safeParse({
        childDateOfBirth: typeof data.childDateOfBirth === 'string' ? stringDateToDate(data.childDateOfBirth) : null,
        email: data.email,
        consentsToThePrivacyPolicy: data.consentsToThePrivacyPolicy,
    })

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

export default function CalculatorInfoForm({customer}: any) {
    const [serverResponse, setServerResponse] = useState<UpdateCustomerState>({})
    const router = useRouter()
    const [pending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateCustomerSchema>({
        resolver: resolver,
    })

    const onSubmit: SubmitHandler<UpdateCustomerSchema> = async (data) => {
        startTransition(async () => {
            const response = await updateCustomer(customer, data);

            if (response.status === 200) {
                router.push('/rechner/berechnung')
            }

            setServerResponse(response)
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-y-paragraph">
                <CalculatorInfoFormChildDateOfBirthInput customer={customer}
                                                         register={register}
                                                         errors={errors}
                                                         pending={pending}/>

                <hr className="my-[1rem] ss:my-[2rem] border-b-none border-t-[1px] border-blue"/>

                <CalculatorInfoFormEmailInput customer={customer}
                                              register={register}
                                              errors={errors}
                                              pending={pending} />

                <CalculatorInfoFormConsentsToThePrivacyPolicyInput customer={customer}
                                                                   register={register}
                                                                   errors={errors}
                                                                   pending={pending} />

                {serverResponse.error && (
                    <>
                        <div className="pt-[8px] ss:pt-[0.4rem]"/>
                        <Text className="text-red-500" align="center" size="sm">
                            {serverResponse.error}
                        </Text>
                    </>
                )}
            </div>

            <CalculatorButtons key="buttons"
                               pending={pending}
                               prevLink={{type: 'internal', url: '/rechner/start'}} />
        </form>
    );
}
