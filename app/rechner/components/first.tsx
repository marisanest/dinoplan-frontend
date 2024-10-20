"use client"
import Title from "@/components/title";
import Button from "@/components/buttons";
import {createCustomer} from "@/lib/sanity/models/customer";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import FormButton from "@/components/buttons/formButton";
import cn from "clsx";

const initialState = {
    message: '',
}

export default function CalculatorFirst({setStage}) {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(createCustomer, initialState)

    if (state?.status === 200) {
        setStage(2)
    }

    return (
        <div className="bg-orange-200 rounded-bl-[50px] rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm ">
            <form action={formAction}>
                <Title>Jetzt Beitrag berechnen</Title>
                <Title className="mb-y-xs" size="xs">Lorem ipsum</Title>
                <div className="grid grid-cols-[150px_3fr] gap-[2rem]">
                    <Button size="sm" colors="orange">Starte hier</Button>
                    <input type="text"
                           id="childName"
                           name="childName"
                           placeholder="Name des Kindes"
                           className={cn(
                               'w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue',
                               // isValid ? 'text-black' : 'text-error',
                           )}
                    />
                </div>
                <div className="grid grid-cols-[150px_3fr] gap-[2rem] mt-[0.5rem]">
                    <div/>
                    <div className="w-full">
                        <Title align="left" className="mb-y-xs text-red-500"
                               size="xs">{state?.errors?.childName?.join('. ')}</Title>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <FormButton type="submit" disabled={pending} className="w-fit" colors="blue">Weiter</FormButton>
                    <div className="text-blue-600 mt-[0.5rem]">
                        <a href="/">Zurück</a>
                    </div>
                </div>
            </form>
        </div>
    );
}
