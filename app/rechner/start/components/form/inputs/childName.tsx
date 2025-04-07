import React from "react";
import DinoplanFormTextInput from "@/components/form/inputs/text";

type CalculatorStartFormChildNameInputProps = {
    register: any;
    pending: boolean;
    customer: any;
}

export default function CalculatorStartFormChildNameInput({register, pending, customer}: CalculatorStartFormChildNameInputProps) {
    return (
        <DinoplanFormTextInput name="childName"
                               placeholder="Name des Kindes"
                               register={register}
                               pending={pending}
                               defaultValue={customer?.childName} />
    );
}