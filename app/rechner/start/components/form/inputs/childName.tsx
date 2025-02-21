import Text from "@/components/text/text";
import {FieldError} from "react-hook-form";
import React from "react";
import DinoplanFormTextInput from "@/components/form/inputs/text";

type CalculatorStartFormChildNameInputProps = {
    register: any;
    error: FieldError | undefined | null;
    pending: boolean;
    customer: any;
}

export default function CalculatorStartFormChildNameInput({register, error, pending, customer}: CalculatorStartFormChildNameInputProps) {
    return (
        <div className="ss:flex ss:flex-col ss:gap-y-[0.4rem]">
            {/*<Text className="!w-fit pb-[8px] ss:pt-0" align="left" size="md">*/}
            {/*    Name*/}
            {/*</Text>*/}

            <DinoplanFormTextInput name="childName"
                                   placeholder="Name des Kindes"
                                   register={register}
                                   pending={pending}
                                   defaultValue={customer?.childName} />

            {error && (
                <Text className="text-red-500" align="left" size="sm">
                    {error.message}
                </Text>
            )}
        </div>
    );
}