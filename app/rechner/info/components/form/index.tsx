"use client"

import CalculatorInfoFormChildDateOfBirthInput from "@/rechner/info/components/form/inputs/childDateOfBirth";
import CalculatorInfoFormEmailInput from "@/rechner/info/components/form/inputs/email";
import CalculatorInfoFormConsentsToThePrivacyPolicyInput from "@/rechner/info/components/form/inputs/consentsToThePrivacyPolicy";
import {useRouter} from "next/navigation";
import {useFormState, useFormStatus} from "react-dom";
import {updateCustomer} from "@/rechner/info/actions/updateCustomer";
import CalculatorButtons from "@/rechner/components/buttons";

export default function CalculatorInfoForm({customer}: any) {
    const router = useRouter()
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(
        updateCustomer.bind(null, {customer}),
        {message: ''},
    )

    if (state.status === 200) {
        router.push('/rechner/berechnung')
    }

    return (
        <form action={formAction}>
            <CalculatorInfoFormChildDateOfBirthInput customer={customer} state={state} />
            <hr className="mt-[2rem] mb-[1rem] ss:mt-[4rem] ss:mb-[2rem] border-b-none border-t-[1px] border-blue-faded"/>
            <CalculatorInfoFormEmailInput customer={customer} state={state} />
            <CalculatorInfoFormConsentsToThePrivacyPolicyInput customer={customer} />
            <CalculatorButtons pending={pending} prevLink={{type: 'internal', url: '/rechner/start'}}/>
        </form>
    );
}
