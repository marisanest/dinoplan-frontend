"use client"

import Text from "@/components/text/text";
import Button from "@/components/buttons";
import PhoneInput from 'react-phone-number-input'
import {useState} from "react";
import {updatePhoneNumber} from "@/rechner/berechnung/actions/updatePhoneNumber";

export default function CalculatorCalculationCallCta({customer}: {customer: any}) {
    const [value, setValue] = useState<undefined | string>(undefined)
    const [isVisible, setIsVisible] = useState(false)
    const [height, setHeight] = useState<number>(0)
    const [state, setState] = useState<{message?: string; status?: number}>({})

    console.log(state)

    return (
        <div className="flex flex-col items-center">
            <Button key="appointment-button"
                    className="w-fit transition-[margin] duration-700"
                    size="sm"
                    colors="blue"
                    onClick={() => setIsVisible(!isVisible)}>
                <Text color="yellow">Anruf anfragen</Text>
            </Button>

            <div className="transition-[height] duration-700 overflow-y-hidden"
                 style={{height: isVisible ? `${height}px` : '0px'}}>

                <div ref={el => setHeight(el?.clientHeight ?? 0)}
                     className="flex flex-col items-center transition-[height] duration-700 overflow-y-hidden">
                    <div className="flex pt-[22px]">
                        <PhoneInput country="DE"
                                    defaultCountry="DE"
                                    placeholder="Telefonnummer"
                                    value={value}
                                    onChange={setValue} />
                        <div className="w-[55px]"></div>
                    </div>

                    <div className="h-fit min-h-[22px] py-[4px] w-[250px]">
                        <Text align="left" color={state.status === 200 ? "blue" : "red"} size="xs">{state.message}</Text>
                    </div>

                    <div className="cursor-pointer"
                         onClick={async () => {
                             console.log(value)
                             if (value === null || value === undefined || value === "") {
                                 setState({ message: "Es muss eine Telefonnummer angegeben werden.",  status: -1 })
                             } else {
                                 const res = await updatePhoneNumber(customer, value)
                                 setState(res)
                             }
                         }}>
                        <Text className="hover:text-blue-600-faded" size="md">Abschicken</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}