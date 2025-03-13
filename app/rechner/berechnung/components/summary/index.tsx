"use client"

import {useShallow} from "zustand/react/shallow";
import Title from "@/components/title";
import Text from "@/components/text/text";
import cn from "clsx";
import CalculatorCalculationSummaryTable from "@/rechner/berechnung/components/summary/table";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useCalculatorContext} from "@/lib/stores/calculator/context";
import {PortableText} from "next-sanity";

export default function CalculatorCalculationSummary() {
    const {
        selectedServiceModules,
        selectedServiceSegmentIndex,
        customer,
        costCalculation,
    } = useCalculatorContext(useShallow((s) => ({
        selectedServiceModules: s.selectedServiceModules,
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        customer: s.customer,
        costCalculation: s.costCalculation,
    })));

    const screenSizes = useScreenSizes()

    return (
        <div className="w-full flex justify-center px-x-outer">
            <div className={cn(
                "w-full sm:w-sm sm:max-w-sm flex flex-col justify-center items-center px-x-s s:px-x-sm transition-[padding] duration-1000 bg-orange-200",
                typeof selectedServiceSegmentIndex === 'number' || screenSizes?.isXs ? "pt-x-sm" : "pt-[0px]"
            )}>

            <Text className="mb-[2rem]" size="sm">
                Du hast {Object.values(selectedServiceModules).length} Baustein(e) ausgewählt.
            </Text>

            {
                Object.values(selectedServiceModules).length > 0 && (
                    <>
                        <Title className="mb-[0.5rem]" size="lg">
                            {customer?.childName}'s Dinoplan
                        </Title>
                        <Text className="mb-[2rem]" size="sm">
                            Folgendes würde dich unser dino-starkes Paket kosten:
                        </Text>

                        <CalculatorCalculationSummaryTable/>

                        <Text className="mt-y-xs" size="sm">
                            Vereinbare jetzt einen Termin mit uns und lass dich umfangreich zu deinem Paket beraten.
                        </Text>

                        <Text className="mb-y-xs mt-[6px]" size="xs">
                            *&nbsp;<PortableText value={costCalculation?.generalNote}/>
                        </Text>
                    </>
                )
            }
            </div>
        </div>
    );
}