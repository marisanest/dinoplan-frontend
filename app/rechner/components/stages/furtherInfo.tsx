"use client"
import Title from "@/components/title";
import {updateCustomer} from "@/lib/sanity/models/customer";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import RichText from "@/components/text";
import CalculatorStageSharedNextButtons from "@/rechner/components/stages/shared/buttons";

const initialState = {
    message: '',
}

export default function CalculatorStageFurtherInfo({stage, setStageKey}) {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(updateCustomer, initialState)

    if (state?.status === 200) {
        setStageKey(stage.nextKey)
    }

    return (
        <div className="bg-orange-200 rounded-bl-[50px] rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm ">
            <form action={formAction}>
                <Title>Weitere Informationen</Title>
                <Text className="mb-y-xs mt-[0.5rem]" size="sm">
                    Zu deinem Kind und dir
                </Text>
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

                <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <RichText align="left" trustedHtml="E-Mail-Adresse"/>
                    <input type="text"
                           id="email"
                           name="email"
                           placeholder="E-Mail-Adresse"
                           className="h-[55px] w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100"
                    />

                    {state?.errors?.childDateOfBirth && (
                        <>
                            <div/>
                            <RichText className="text-red-500"
                                      size="sm"
                                      align="left"
                                      trustedHtml={state?.errors?.email?.join('<br/>')}/>
                        </>
                    )}
                    <div/>
                    <RichText align="left"
                              size="xs"
                              trustedHtml="Optional. Wenn du möchtest, dass wir deine Angaben bei einem Beratungsgespräch mit dir verbinden können, gebe bitte deine E-Mail Adresse an."/>

                </div>

                <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <div/>
                    <div className="flex gap-[1rem]">
                        <input type="checkbox"
                               id="privacy"
                               name="privacy"
                        />
                        <RichText align="left"
                                  size="xs"
                                  trustedHtml="Hiermit bestätigst du, dass wir deine angegebenen personenbezogenen Daten bei einem Beratungsgespräch nutzen dürfen. Mehr dazu hier."/>

                    </div>
                </div>

                <CalculatorStageSharedNextButtons pending={pending} onBackButtonClick={() => setStageKey(stage.prevKey)} />
            </form>
        </div>
    );
}
