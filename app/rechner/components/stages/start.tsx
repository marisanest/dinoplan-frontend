"use client"
import Title from "@/components/title";
import Button from "@/components/buttons";
import {createCustomer} from "@/lib/sanity/models/customer";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import cn from "clsx";
import RichText from "@/components/text";
import Text from "@/components/text/text";
import CalculatorStageSharedNextButtons from "@/rechner/components/stages/shared/buttons";

const initialState = {
    message: '',
}

export default function CalculatorStageStart({stage, setStageKey}) {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(createCustomer, initialState)

    if (state?.status === 200) {
        setStageKey(stage.nextKey)
    }

    return (
        <div className="bg-orange-200 rounded-bl-[50px] rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm">
            <form action={formAction}>
                <Title>Jetzt Beitrag berechnen</Title>
                <Text className="mt-[0.5rem]" size="sm">
                    Mache eine Beispielrechnung, um zu sehen, wie viel dein
                </Text>
                <Text className="mb-y-xs" size="sm">
                    individuelles Paket monatlich ungefähr kosten würde.
                </Text>

                <div className="grid grid-cols-[160px_3fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <Button className="!cursor-default hover:!bg-orange hover:!border-orange" size="sm" colors="orange">
                        <Text color="yellow">Starte hier</Text>
                    </Button>
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

                <CalculatorStageSharedNextButtons pending={pending} link={{type: 'internal', url: '/'}} />
            </form>
        </div>
    );
}