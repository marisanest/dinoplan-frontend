"use client"
import { useShallow } from "zustand/react/shallow";
import CalculatorCalculationServiceModule from "@/rechner/berechnung/components/serviceModules/serviceModule";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";
import cn from "clsx";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorCalculationServiceModules() {
    const {selectedServiceSegmentIndex, prevSelectedServiceSegmentIndex, serviceSegments} = useServiceSegmentsContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        prevSelectedServiceSegmentIndex: s.prevSelectedServiceSegmentIndex,
        serviceSegments: s.serviceSegments,
    })))
    const selectedServiceSegment = serviceSegments[(selectedServiceSegmentIndex || selectedServiceSegmentIndex === 0 ? selectedServiceSegmentIndex : prevSelectedServiceSegmentIndex )];

    return (
        <CalculatorCalculationServiceModulesContainer>
            {selectedServiceSegment?.serviceModules.map((serviceModule: any) => <CalculatorCalculationServiceModule key={serviceModule.serviceModule._id} serviceModule={serviceModule.serviceModule}/>)}
        </CalculatorCalculationServiceModulesContainer>
    );
}

function CalculatorCalculationServiceModulesContainer({children}: ReactNodeProps) {
    const {showServiceSegmentDetails} = useServiceSegmentsContext(useShallow((s) => ({
        showServiceSegmentDetails: s.showServiceSegmentDetails,
    })))

    return (
        <div className="w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className={cn(
                "w-full sm:w-sm sm:max-w-sm bg-orange-200 transition-[transform] duration-1000 pointer-events-auto",
                showServiceSegmentDetails ? 'translate-y-[calc(-1*var(--dino-bottom-offset))]' : 'translate-y-[-100%]'
            )}>
                <div className={cn(
                    "w-full flex justify-center px-x-s xs:px-x-sm bg-orange-300 pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-sm))] pb-y-sm transition-[border-radius] duration-1000",
                    showServiceSegmentDetails ? 'rounded-bl-md translate shadow-[0px_6px_10px_-10px_black]' : 'rounded-bl-0 shadow-[0px_0px_0px_0px_black]'
                )}>
                    <div className="w-fit flex flex-col gap-[0.75rem]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
