import Text from "@/components/text/text";
import { DateInput } from 'rsuite';
import {stringDateToDate} from "@/lib/utils";
import cn from "clsx";
import React from "react";
import {FieldErrors} from "react-hook-form";

type CalculatorInfoFormChildDateOfBirthInputProps = {
    customer: any;
    register: any;
    errors: FieldErrors<{ childDateOfBirth: string}>;
    pending: boolean;
}

export default function CalculatorInfoFormChildDateOfBirthInput({customer, register, errors, pending}: CalculatorInfoFormChildDateOfBirthInputProps) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_1fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem]">
            <Text className="pb-[8px] ss:pt-0" align="left" size="lg">
                Geburtsdatum
            </Text>

            <DateInput className={cn(
                "min-h-[55px] h-[55px] w-full px-[1rem] !rounded-none text-left !border-2",
                pending ? '!border-blue-600-faded !text-blue-600-faded' : '!bg-yellow-100 border-blue-600-faded focus:border-blue !text-blue-600'
            )}
                       name="childDateOfBirth"
                       placeholder="Geburtsdatum"
                       format="dd.MM.yyyy"
                       defaultValue={typeof customer.childDateOfBirth === 'string' ? stringDateToDate(customer.childDateOfBirth) : null}
                       disabled={pending}
                       {...register("childDateOfBirth")} />

            {errors.childDateOfBirth && (
                <>
                    <div className="pt-[8px] ss:pt-0"/>
                    <Text className="text-red-500" align="left" size="sm">
                        {errors.childDateOfBirth.message}
                    </Text>
                </>
            )}
        </div>
    );
}
