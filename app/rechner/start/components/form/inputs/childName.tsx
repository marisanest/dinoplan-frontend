import React from "react";
import DinoplanFormTextInput from "@/components/form/inputs/text";
import {CustomerQueryResult} from "@/rechner/start/components/start";

type CalculatorStartFormChildNameInputProps = {
    register: any;
    pending: boolean;
    customer: CustomerQueryResult;
}

export default function CalculatorStartFormChildNameInput({register, pending, customer}: CalculatorStartFormChildNameInputProps) {
    return (
        <DinoplanFormTextInput name="childName"
                               placeholder="Name des Kindes"
                               register={register}
                               pending={pending}
                               defaultValue={customer?.childName ?? ''} />
    );
}