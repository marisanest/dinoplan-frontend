import Text from "@/components/text/text";
import {FieldError} from "react-hook-form";
import React from "react";
import DinoplanFormTextInput from "@/components/form/inputs/text";

type CalculatorStartFormChildAgeInputProps = {
    register: any;
    error: FieldError | undefined | null;
    pending: boolean;
    customer: any;
}


export default function CalculatorStartFormChildAgeInput({register, error, pending, customer}: CalculatorStartFormChildAgeInputProps) {
    return (
        <div className="ss:flex ss:flex-col ss:gap-y-[0.4rem]">
            <DinoplanFormTextInput name="childAge"
                                   placeholder="Alter des Kindes"
                                   register={register}
                                   pending={pending}
                                   defaultValue={customer?.childAge} />

            {error && (
                <Text className="text-red-500" align="left" size="sm">
                    {error.message}
                </Text>
            )}
        </div>
    );
}