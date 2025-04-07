"use client"

import Text from "@/components/text/text";
import React, {useState} from "react";
import CalculatorCalculationCtaCallToggle from "@/rechner/berechnung/components/ctas/call/toggle";
import CalculatorCalculationCtaCallInput from "@/rechner/berechnung/components/ctas/call/input";
import CalculatorCalculationCtaAppointmentToggle from "@/rechner/berechnung/components/ctas/appointment/toggle";
import CalculatorCalculationCtasAppointmentEmbed from "@/rechner/berechnung/components/ctas/appointment/embed";
import cn from "clsx";
import CalculatorPrevButton from "@/rechner/components/prevButton";

export default function CalculatorCalculationCtas({baseUrl = 'https://calendly.com/marisanest-mailbox/30min'}) {
    const [isAppointmentEmbedVisible, setIsAppointmentEmbedVisible] = useState(false)
    const [isCallInputVisible, setIsCallInputVisible] = useState(false)

    return (
        <div className="w-full flex justify-center px-x-outer">
            <div className="w-full sm:w-sm sm:max-w-sm flex flex-col items-center px-x-s s:px-x-sm pb-y-sm bg-orange-200 rounded-bl-md">
                <CalculatorCalculationCtaAppointmentToggle isAppointmentEmbedVisible={isAppointmentEmbedVisible} setIsAppointmentEmbedVisible={setIsAppointmentEmbedVisible} />
                <Text className="py-[10px]" size="md">oder</Text>
                <CalculatorCalculationCtaCallToggle isCallInputVisible={isCallInputVisible} setIsCallInputVisible={setIsCallInputVisible}/>
                <CalculatorCalculationCtaCallInput isCallInputVisible={isCallInputVisible}/>
                <CalculatorCalculationCtasAppointmentEmbed baseUrl={baseUrl} isAppointmentEmbedVisible={isAppointmentEmbedVisible}/>
                <div className={cn("transition-[padding] duration-700", isCallInputVisible && !isAppointmentEmbedVisible ? "pt-0" : "pt-[calc(var(--spacing-y-xs)-10px)]")}/>
                <CalculatorPrevButton key="backButton" prevLink={{type: 'internal', url: '/rechner/start'}}/>
            </div>
        </div>
    );
}