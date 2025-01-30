"use client"

import {useShallow} from "zustand/react/shallow";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useCalculatorContext} from "@/lib/stores/calculator/context";
import CalculatorCalculationServiceSegment from "@/rechner/berechnung/components/serviceSegments/serviceSegment";

export default function CalculatorCalculationServiceSegmentsGrid() {
    const screenSizes = useScreenSizes()
    const {serviceSegments} = useCalculatorContext(useShallow((s) => ({
        serviceSegments: s.serviceSegments,
    })))

    if (screenSizes?.isXs) return null;

    return (
        <div className="w-full hidden ss:grid ss:grid-cols-3 ss:justify-between ss:gap-[1.5rem] sm:gap-[4rem] sm:px-[15px]">
            {serviceSegments.map((serviceSegment, index) => (
                <CalculatorCalculationServiceSegment
                    key={serviceSegment._id}
                    className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                    index={index}
                    serviceSegment={serviceSegment}/>
            ))}
        </div>
    );
}