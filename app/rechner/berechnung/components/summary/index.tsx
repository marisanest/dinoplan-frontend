"use client"

import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";
import Title from "@/components/title";
import Text from "@/components/text/text";
import cn from "clsx";
import CalculatorCalculationSummaryTable from "@/rechner/berechnung/components/summary/table";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorCalculationSummary({customer, costCalculation}: any) {
    const { selectedServiceModules } = useCalculatorStore(
        useShallow((state) => ({
            selectedServiceModules: state.selectedServiceModules,
        })),
    );

    return (
        <CalculatorCalculationSummaryContainer>
            <Text className="mb-[2rem]" size="sm">
                Du hast {Object.values(selectedServiceModules).length} Baustein(e) ausgewählt.
            </Text>

            {
                Object.values(selectedServiceModules).length > 0 && (
                    <>
                        <Title className="mb-[0.5rem]" size="lg">
                            {customer.childName}'s Dinoplan
                        </Title>
                        <Text className="mb-[2rem]" size="sm">
                            Folgendes würde dich unser dino-starket Paket kosten:
                        </Text>

                        <CalculatorCalculationSummaryTable customer={customer} costCalculation={costCalculation}/>

                        <Text className="my-y-xs" size="sm">
                            Vereinbare jetzt einen Termin mit uns und lass dich umfangreich zu deinem Paket beraten.
                        </Text>
                    </>
                )
            }
        </CalculatorCalculationSummaryContainer>
    );
}

function CalculatorCalculationSummaryContainer({children}: ReactNodeProps) {
    const {showServiceSegmentDetails} = useServiceSegmentsContext(useShallow((s) => ({
        showServiceSegmentDetails: s.showServiceSegmentDetails,
    })))

    return (
        <div className="w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className={cn("w-full sm:w-sm sm:max-w-sm flex flex-col justify-center items-center px-x-s s:px-x-sm transition-[padding] duration-1000 bg-orange-200", showServiceSegmentDetails ? "pt-x-sm" : "pt-[0px]")}>
                {children}
            </div>
        </div>
    );
}
