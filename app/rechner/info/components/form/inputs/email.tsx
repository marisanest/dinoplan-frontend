import Text from "@/components/text/text";
import cn from "clsx";
import {FieldErrors} from "react-hook-form";
import React from "react";

type CalculatorInfoFormEmailInputProps = {
    customer: any;
    register: any;
    errors: FieldErrors<{ email: string}>;
    pending: boolean;
}

export default function CalculatorInfoFormEmailInput({customer, register, errors, pending}: CalculatorInfoFormEmailInputProps) {
    return (
        <CalculatorInfoFormEmailInputContainer>
            <Text className="pb-[8px] ss:pt-0" align="left" size="lg">
                E-Mail-Adresse
            </Text>

            <input id="email"
                   type="text"
                   className={cn(
                       "min-h-[55px] w-full text-left px-[1rem] !rounded-none !border-2",
                       pending ? '!border-blue-600-faded !text-blue-600-faded' : '!bg-yellow-100 border-blue-600-faded focus:border-blue !text-blue-600'
                   )}
                   name="email"
                   placeholder="E-Mail-Adresse"
                   defaultValue={customer.email}
                   disabled={pending}
                   {...register("email")} />

            {errors.email && (
                <>
                    <div className="pt-[8px] ss:pt-0"/>
                    <Text className="text-red-500" align="left" size="sm">
                        {errors.email.message}
                    </Text>
                </>
            )}
        </CalculatorInfoFormEmailInputContainer>
    );
}

function CalculatorInfoFormEmailInputContainer({children}) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_1fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem] mb-y-xs">
            {children}
        </div>
    );
}
