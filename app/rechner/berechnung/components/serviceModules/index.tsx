"use client"
import { useShallow } from "zustand/react/shallow";
import CalculatorCalculationServiceModule from "@/rechner/berechnung/components/serviceModules/serviceModule";
import cn from "clsx";
import {ReactNodeProps} from "@/lib/types/core";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useCalculatorContext} from "@/lib/stores/calculator/context";

export default function CalculatorCalculationServiceModules() {
    const {selectedServiceSegmentIndex, prevSelectedServiceSegmentIndex, serviceSegments} = useCalculatorContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        prevSelectedServiceSegmentIndex: s.prevSelectedServiceSegmentIndex,
        serviceSegments: s.serviceSegments,
    })))
    let serviceSegmentIndex = typeof selectedServiceSegmentIndex === 'number' ? selectedServiceSegmentIndex : undefined
    if (!(typeof serviceSegmentIndex === 'number')) serviceSegmentIndex = typeof prevSelectedServiceSegmentIndex === 'number' ? prevSelectedServiceSegmentIndex : 0
    const selectedServiceSegment = serviceSegments[serviceSegmentIndex];

    return (
        <CalculatorCalculationServiceModulesContainer>
            {selectedServiceSegment?.serviceModules.map((serviceModule: any) => <CalculatorCalculationServiceModule key={serviceModule.serviceModule._id} serviceModule={serviceModule.serviceModule}/>)}
        </CalculatorCalculationServiceModulesContainer>
    );
}

function CalculatorCalculationServiceModulesContainer({children}: ReactNodeProps) {
    const screenSizes = useScreenSizes()
    const {selectedServiceSegmentIndex} = useCalculatorContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
    })))

    return (
        <div className="w-full flex justify-center px-x-outer">
            <div className={cn(
                "w-full sm:w-sm sm:max-w-sm bg-orange-200 transition-[transform] duration-1000 pointer-events-auto",
                typeof selectedServiceSegmentIndex === 'number' || screenSizes?.isXs ? 'translate-y-[calc(-1*var(--dino-bottom-offset))]' : 'translate-y-[-100%]'
            )}>
                <div className={cn(
                    "w-full flex justify-center px-x-s xs:px-x-sm bg-orange-300 pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-sm))] pb-y-sm transition-[border-radius] duration-1000",
                    typeof selectedServiceSegmentIndex === 'number' || screenSizes?.isXs ? 'rounded-bl-md translate shadow-[0px_6px_10px_-10px_black]' : 'rounded-bl-0 shadow-[0px_0px_0px_0px_black]'
                )}>
                    <div className="w-fit flex flex-col gap-[8px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
