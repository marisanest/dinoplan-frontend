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
                <Title className="mb-y-xs" size="xs">Zu deinem Kind und dir</Title>
                <div className="flex flex-col gap-[1rem]">
                    <div>
                        <div className="grid grid-cols-[150px_3fr] gap-[2rem]">
                            <RichText align="left" trustedHtml="Geburtsdatum*"/>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateField label="Geburtsdatum des Kindes"/>
                            </LocalizationProvider>
                        </div>
                        <div className="grid grid-cols-[150px_3fr] gap-[2rem] mt-[0.5rem]">
                            <div/>
                            <Title align="left" className="mb-y-xs text-red-500"
                                   size="xs">{state?.errors?.childDateOfBirth?.join('. ')}</Title>
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_3fr] gap-[2rem] mt-[0.5rem]">
                        <RichText align="left" trustedHtml="Vorerkrankungen*"/>
                        <div className="w-full">
                            <RadioGroup className="!flex-row" defaultValue="yes" name="hasChildPreExistingConditions">
                                <Radio value="true" label="Ja" variant="outlined"/>
                                <Radio value="false" label="Nein" variant="outlined"/>
                            </RadioGroup>
                            <Title align="left" className="mb-y-xs text-red-500"
                                   size="xs">{state?.errors?.hasChildPreExistingConditions?.join('. ')}</Title>
                        </div>
                    </div>
                </div>

                <hr className="mt-[4rem] mb-[2rem] border-b-none border-t-[1px] border-blue-faded"/>

                <div className="grid grid-cols-[150px_3fr] gap-[2rem] h-[50px] mb-[4rem]">
                    <RichText align="left" trustedHtml="E-Mail-Addresse"/>
                    <input type="text"
                           id="email"
                           name="email"
                           placeholder="E-Mail-Adresse"
                           className={cn('w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue',)}
                    />
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <FormButton type="submit" disabled={pending} className="w-fit" colors="blue">Weiter</FormButton>
                    <div className="text-blue-600 mt-[0.5rem]">
                        <div className="cursor-pointer" onClick={() => setStage(1)}>Zurück</div>
                    </div>
                </div>
            </form>
        </div>
    );
}
