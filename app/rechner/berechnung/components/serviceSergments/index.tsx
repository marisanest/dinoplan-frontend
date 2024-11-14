"use client"

import Title from "@/components/title";
import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";
import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import CalculatorCalculationServiceSegment from "@/rechner/berechnung/components/serviceSergments/serviceSegment";

export default function CalculatorCalculationServiceSegments({serviceSegments}: any) {
    return (
        <CalculatorCalculationServiceSegmentsContainer>
            <Title>Wähle deine Bausteine</Title>
            <Text className="mb-y-xs mt-[0.5rem]" size="sm">
                Du kannst mehrere Optionen wählen, die in dein Paket einfließen sollen.
            </Text>

            <div className="w-full grid grid-cols-3 justify-between gap-[4rem] mt-y-s">
                {serviceSegments?.map((serviceSegment: any, index: number) => (
                    <CalculatorCalculationServiceSegment
                        key={serviceSegment.serviceSegment._id}
                        className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                        serviceSegment={serviceSegment.serviceSegment}/>
                ))}
            </div>
        </CalculatorCalculationServiceSegmentsContainer>
    );
}

function CalculatorCalculationServiceSegmentsContainer({children}: ReactNodeProps) {
    const { selectedServiceSegment } = useCalculatorStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <div className={cn(
            "relative z-10 bg-orange-200 rounded-tr-md px-x-sm py-y-sm shadow-[0px_0px_0px_0px_black] transition-[border-radius] duration-1000",
            selectedServiceSegment ? "rounded-bl-md !shadow-[0px_6px_10px_-10px_black]" : 'shadow-[0px_0px_0px_0px_black]'
        )}>
            {children}
        </div>
    );
}
