"use client"

import Title from "@/components/title";
import Button from "@/components/buttons";
import {createCustomer} from "@/lib/sanity/models/customer";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import Text from "@/components/text/text";
import {useRouter} from "next/navigation";
import CalculatorStageSharedButtons from "@/rechner/components/stages/shared/buttons";

const initialState = {
    message: '',
}

export default function CalculatorStartForm() {
    const { pending } = useFormStatus()
    const router = useRouter()
    const [state, formAction] = useFormState(createCustomer, initialState)

    if (state?.status === 200) {
        router.push('/rechner/info')
    }

    return (
        <div className="w-sm max-w-sm min-h-[calc(100dvh-var(--height-footer-image)-var(--height-banner)-var(--height-banner)-var(--spacing-y-m)+var(--spacing-footer-image-currection))] flex items-center justify-center px-x-sm py-y-sm bg-orange-200 rounded-bl-[50px] rounded-tr-[50px]">
            <form className="w-full" action={formAction}>
                <Title>Jetzt Beitrag berechnen</Title>
                <Text className="pt-[0.5rem]" size="sm">
                    Mache eine Beispielrechnung, um zu sehen, wie viel dein
                </Text>
                <Text className="pb-y-xs" size="sm">
                    individuelles Paket monatlich ungefähr kosten würde.
                </Text>

                <div className="grid grid-cols-[160px_3fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs min-w-full w-full">
                    <Button className="!cursor-default hover:!bg-orange hover:!border-orange" size="sm" colors="orange">
                        <Text color="yellow">Starte hier</Text>
                    </Button>

                    <input type="text"
                           id="childName"
                           name="childName"
                           placeholder="Name deines Kindes"
                           className="w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100" />
                    {state?.errors?.childName && (
                        <>
                            <div/>
                            {
                                state?.errors?.childName?.map((error) => (
                                    <Text key={error} className="text-red-500" align="left" size="sm">
                                        {error}
                                    </Text>
                                ))
                            }
                        </>
                    )}
                </div>

                <CalculatorStageSharedButtons pending={pending} prevLink={{type: 'internal', url: '/'}} />
            </form>
        </div>
    );
}
