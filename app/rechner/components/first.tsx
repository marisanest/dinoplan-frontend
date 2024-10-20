"use client"
import Title from "@/components/title";
import Button from "@/components/buttons";
import {createCustomer} from "@/lib/sanity/models/customer";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import FormButton from "@/components/buttons/formButton";
import cn from "clsx";
import RichText from "@/components/text";

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
                <RichText className="mb-y-xs mt-[0.5rem]"
                          size="sm"
                          trustedHtml="Mache eine Beispielrechnung, um zu sehen, wie viel dein<br/>individuelles Paket monatlich ungefähr kosten würde."/>
                <div className="grid grid-cols-[160px_3fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <Button className="!cursor-default" size="sm" colors="orange">Starte hier</Button>
                    <input type="text"
                           id="childName"
                           name="childName"
                           placeholder="Name deines Kindes"
                           className={cn(
                               'w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100',
                           )}/>
                    {state?.errors?.childName && (
                        <>
                            <div/>
                            <RichText className="text-red-500"
                                      size="sm"
                                      align="left"
                                      trustedHtml={state?.errors?.childName?.join('<br/>')} />
                        </>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <FormButton type="submit" disabled={pending} className="w-fit" colors="blue">Weiter</FormButton>
                    <div className="text-blue-600 mt-[1rem]">
                        <a href="/">Zurück</a>
                    </div>
                </div>
            </form>
        </div>
    );
}
