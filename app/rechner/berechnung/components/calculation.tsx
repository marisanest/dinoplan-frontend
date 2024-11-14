"use client"

import Text from "@/components/text/text";
import Button from "@/components/buttons";
import {ReactNodeProps} from "@/lib/types/core";
import CalculatorCalculationServiceSegments from "@/rechner/berechnung/components/serviceSergments";
import CalculatorCalculationServiceModules from "@/rechner/berechnung/components/serviceModules";
import CalculatorCalculationSummary from "@/rechner/berechnung/components/summary";
import CalculatorPrevButton from "@/rechner/components/prevButton";
import {useState} from "react";
import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";

export default function CalculatorCalculation({serviceSegments, customer, costCalculation, contact}: any) {
    const [height, setHeight] = useState(0)
    const { selectedServiceSegment } = useCalculatorStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <CalculatorCalculationContainer>
            <div className="relative z-10">
                <CalculatorCalculationServiceSegments
                    key="segments"
                    serviceSegments={serviceSegments} />

                <CalculatorCalculationServiceModules
                    key="modules"
                    setHeight={setHeight} />

                <div key="modules-placeholder"
                     className="transition-[height] duration-1000"
                     style={{height: selectedServiceSegment ? `calc(${height}px - 2 * var(--dino-bottom-offset))` : 0}} />
            </div>


            <div key="bottom" className="bg-orange-200 rounded-bl-[50px] px-x-sm pb-y-sm">
                <div className={cn("transition-[padding] duration-1000", selectedServiceSegment ? "pt-[calc(var(--dino-bottom-offset)+var(--spacing-x-sm))]" : "pt-[0px]")}>
                    <CalculatorCalculationSummary key="summery" customer={customer} costCalculation={costCalculation}/>
                    <div className="flex flex-col justify-center items-center w-full">
                        <Button key="appointment-button" size="sm" colors="orange" link={contact.calendly}>
                            <Text color="yellow">Termin vereinbaren</Text>
                        </Button>
                        <CalculatorPrevButton key="backButton" prevLink={{type: 'internal', url: '/rechner/info'}}/>
                    </div>
                </div>
            </div>

        </CalculatorCalculationContainer>
    );
}

function CalculatorCalculationContainer({children}: ReactNodeProps) {
    return (
        <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image))] flex flex-col items-center pt-[9rem] bg-orange-400">
            <div className="w-sm max-w-sm">
                {children}
            </div>
        </main>
    );
}