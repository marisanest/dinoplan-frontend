"use client"

import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import {useRouter} from "next/navigation";
import {createCustomer} from "@/rechner/start/actions/createCustomer";
import CalculatorStartFormChildNameInput from "@/rechner/start/components/form/inputs/childName";
import {ReactNodeProps} from "@/lib/types/core";
import CalculatorButtons from "@/rechner/components/buttons";

export default function CalculatorStartForm() {
    const router = useRouter()
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(createCustomer, {})

    if (state?.status === 200) {
        router.push('/rechner/info')
    }

    return (
        <CalculatorStartFormContainer formAction={formAction}>
            <CalculatorStartFormChildNameInput key="child-name-input" state={state} />
            <CalculatorButtons key="buttons" pending={pending} prevLink={{type: 'internal', url: '/'}}/>
        </CalculatorStartFormContainer>
    );
}

function CalculatorStartFormContainer({children, formAction}: ReactNodeProps & {formAction: (payload: FormData) => void}) {
    return (
        <form className="w-full" action={formAction}>
            {children}
        </form>
    );
}
