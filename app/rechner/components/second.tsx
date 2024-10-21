"use client"
import Title from "@/components/title";
import {updateCustomer} from "@/lib/sanity/models/customer";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import FormButton from "@/components/buttons/formButton";
import cn from "clsx";
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import RichText from "@/components/text";
import Radio from '@mui/joy/Radio';
import {RadioGroup} from "@mui/joy";

const initialState = {
    message: '',
}

export default function CalculatorSecond({setStage}) {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(updateCustomer, initialState)

    if (state?.status === 200) {
        setStage(3)
    }

    return (
        <div className="bg-orange-200 rounded-bl-[50px] rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm ">
            <form action={formAction}>
                <Title>Weitere Informationen</Title>
                <RichText className="mb-y-xs mt-[0.5rem]"
                          size="sm"
                          trustedHtml="Zu deinem Kind und dir"/>

                <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-[2rem]">
                    <RichText align="left" trustedHtml="Geburtsdatum*"/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateField name="childDateOfBirth" label="Geburtsdatum des Kindes"/>
                    </LocalizationProvider>

                    {state?.errors?.childDateOfBirth && (
                        <>
                            <div/>
                            <RichText className="text-red-500"
                                      size="sm"
                                      align="left"
                                      trustedHtml={state?.errors?.childDateOfBirth?.join('<br/>')} />
                        </>
                    )}
                </div>


                <hr className="mt-[2rem] mb-[2rem] border-b-none border-t-[1px] border-blue-faded"/>

                {/*<div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-[2rem]">*/}
                {/*    <div/>*/}
                {/*    <RichText align="left"*/}
                {/*              size="xs"*/}
                {/*              trustedHtml="Optional. Wenn du möchtest, dass wir deine Angaben bei einem Beratungsgespräch mit dir verbinden können, gebe bitte deine E-Mail Adresse an." />*/}
                {/*</div>*/}

                <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <RichText align="left" trustedHtml="E-Mail-Adresse"/>
                    <input type="text"
                           id="email"
                           name="email"
                           placeholder="E-Mail-Adresse"
                           className="h-[55px] w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100"
                    />
                    <div/>
                    {/*<RichText align="left"*/}
                    {/*          size="xs"*/}
                    {/*          trustedHtml="Optional. Wenn du möchtest, dass wir deine Angaben bei einem Beratungsgespräch mit dir verbinden können, gebe bitte deine E-Mail Adresse an." />*/}
                </div>

                <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <RichText align="left" trustedHtml=""/>
                    <div className="flex gap-[1rem]">
                        <input type="checkbox"
                               id="consent"
                               name="consent"
                        />
                        <RichText align="left"
                                  size="xs"
                                  trustedHtml="Hiermit bestätigst du, dass wir deine angegebenen personen bezogenen Daten bei einem Beratungs gespräch nutzen dürfen. Mehr dazu hier." />

                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <FormButton type="submit" disabled={pending} className="w-fit" colors="blue">Weiter</FormButton>
                    <div className="text-blue-600 mt-[1rem]">
                        <div className="cursor-pointer" onClick={() => setStage(1)}>Zurück</div>
                    </div>
                </div>
            </form>
        </div>
    );
}
