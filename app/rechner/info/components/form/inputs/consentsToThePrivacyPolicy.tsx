import Text from "@/components/text/text";
import InternalLink from "@/components/link/internal";
import {FieldErrors} from "react-hook-form";
import React from "react";
import cn from "clsx";

type CalculatorInfoFormConsentsToThePrivacyPolicyInputProps = {
    customer: any;
    register: any;
    errors: FieldErrors<{ consentsToThePrivacyPolicy: string}>;
    pending: boolean;
}

export default function CalculatorInfoFormConsentsToThePrivacyPolicyInput({customer, register, errors, pending}: CalculatorInfoFormConsentsToThePrivacyPolicyInputProps) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_1fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem]">
            <div/>
            <div className="flex gap-[1rem]">
                <input id="consentsToThePrivacyPolicy"
                       type="checkbox"
                       className={cn(
                           "appearance-none grid place-content-center min-h-[19px] h-[19px] min-w-[19px] w-[19px] m-0 pb-[2px] !border-2 !rounded-none cursor-pointer text-[16px]",
                           pending ? '!border-blue-600-faded !text-blue-600-faded' : '!bg-yellow-100 border-blue-600-faded focus:border-blue !text-blue-600',
                       )}
                       name="consentsToThePrivacyPolicy"
                       defaultChecked={customer.consentsToThePrivacyPolicy}
                       {...register("consentsToThePrivacyPolicy")} />

                <Text align="left" size="xs">
                    <div>
                        Hiermit bestätigst du, dass wir deine Angaben speichern und bei einem Beratungsgespräch
                        nutzen dürfen. Mehr dazu findest du unter <InternalLink className="underline" href="/datenschutz">Datenschutz</InternalLink>.
                    </div>
                </Text>
            </div>

            {errors.consentsToThePrivacyPolicy && (
                <>
                    <div className="pt-[8px] ss:pt-0"/>
                    <Text className="text-red-500" align="left" size="sm">
                        {errors.consentsToThePrivacyPolicy.message}
                    </Text>
                </>
            )}
        </div>
    );
}