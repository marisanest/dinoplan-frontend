import Text from "@/components/text/text";
import PhoneInput from 'react-phone-number-input'
import {useState} from "react";
import {updatePhoneNumber} from "@/rechner/berechnung/actions/updatePhoneNumber";
import {useCalculatorContext} from "@/lib/stores/calculator/context";
import {useShallow} from "zustand/react/shallow";

export default function CalculatorCalculationCtaCallInput({isCallInputVisible}: {isCallInputVisible: boolean}) {
    const {
        customer,
    } = useCalculatorContext(useShallow((s) => ({
        customer: s.customer,
    })));

    const [value, setValue] = useState<undefined | string>(undefined)
    const [height, setHeight] = useState<number>(0)
    const [state, setState] = useState<{message?: string; status?: number}>({})

    const onClick = async () => {
        if (value === null || value === undefined || value === "") {
            setState({ message: "Es muss eine Telefonnummer angegeben werden.",  status: -1 })
        } else {
            const res = await updatePhoneNumber(customer, value)
            setState(res)
        }
    }

    return (
        <div className="transition-[height] duration-700 overflow-y-hidden"
             style={{height: isCallInputVisible ? `${height}px` : '0px'}}>

            <div ref={el => setHeight(el?.clientHeight ?? 0)}
                 className="flex flex-col items-center pt-y-xs">

                <div className="pr-[10px]">
                    <PhoneInput country="DE"
                                defaultCountry="DE"
                                placeholder="Telefonnummer"
                                value={value}
                                onChange={setValue} />
                </div>

                <div className="flex min-h-[12px] pt-[4px] pb-[8px] w-[296px] ss:w-[315px] px-[10px]">
                    <div className="w-[55px]"/>
                    <Text align="left" color={state.status === 200 ? "blue" : "red"} size="xs">{state.message}</Text>
                </div>

                <div className="cursor-pointer p-[10px]" onClick={onClick}>
                    <Text className="hover:text-blue-600-faded" size="md">Abschicken</Text>
                </div>
            </div>
        </div>
    );
}