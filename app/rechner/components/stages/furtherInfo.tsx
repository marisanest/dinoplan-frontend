"use client"
import Title from "@/components/title";
import {updateCustomer} from "@/lib/sanity/models/customer";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import CalculatorStageSharedNextButtons from "@/rechner/components/stages/shared/buttons";
import Text from "@/components/text/text";
import InternalLink from "@/components/link/internal";
import useCustomerStore from "@/lib/stores/useCustomerStore";
import {useShallow} from "zustand/react/shallow";

const initialState = {
    message: '',
}

export default function CalculatorStageFurtherInfo({stage, setStageKey}) {
    const { updateCustomerStore, customerId, childDateOfBirth, email } = useCustomerStore(
        useShallow((state) => ({
            updateCustomerStore: state.update,
            customerId: state.id,
            childDateOfBirth: state.childDateOfBirth,
            email: state.email,
        })),
    );

    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(updateCustomer.bind(null, {customerId}), initialState)

    if (state?.status === 200) {
        updateCustomerStore({
            childDateOfBirth: state.data?.childDateOfBirth,
            email: state.data?.email,
        })
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
                    <Text align="left" size="lg">
                        Geburtsdatum
                    </Text>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateField name="childDateOfBirth" label="Geburtsdatum des Kindes"/>
                    </LocalizationProvider>

                    {state?.errors?.childDateOfBirth && (
                        <>
                            <div/>
                            {
                                state?.errors?.childDateOfBirth?.map((error) => (
                                    <Text key={error} className="text-red-500" align="left" size="sm">
                                        {error}
                                    </Text>
                                ))
                            }
                        </>
                    )}
                </div>


                <hr className="mt-[2rem] mb-[2rem] border-b-none border-t-[1px] border-blue-faded"/>

                <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <Text align="left" size="lg">
                        E-Mail-Adresse
                    </Text>
                    <input type="text"
                           id="email"
                           name="email"
                           placeholder="E-Mail-Adresse"
                           defaultValue={email}
                           className="h-[55px] w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100"
                    />

                    {state?.errors?.email && (
                        <>
                            <div/>
                            {
                                state?.errors?.email?.map((error) => (
                                    <Text key={error} className="text-red-500" align="left" size="sm">
                                        {error}
                                    </Text>
                                ))
                            }
                        </>
                    )}
                    <div />
                    <Text align="left" size="xs">
                        Optional. Wenn du möchtest, dass wir deine Angaben bei einem Beratungsgespräch mit dir verbinden können, gebe bitte deine E-Mail Adresse an.
                    </Text>
                </div>

                <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
                    <div />
                    <div className="flex gap-[1rem]">
                        <input type="checkbox"
                               id="privacy"
                               name="privacy" />
                        <Text align="left" size="xs">
                            <div>
                                Hiermit bestätigst du, dass wir deine Angaben speichern und bei einem Beratungsgespräch nutzen dürfen. Mehr dazu findest du unter <InternalLink className="underline" href="/datenschutz">Datenschutz</InternalLink>.
                            </div>
                        </Text>
                    </div>
                </div>

                <CalculatorStageSharedNextButtons pending={pending} onBackButtonClick={() => setStageKey(stage.prevKey)} />
            </form>
        </div>
    );
}
