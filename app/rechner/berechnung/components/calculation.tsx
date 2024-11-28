"use client"
import {ReactNodeProps} from "@/lib/types/core";
import CalculatorCalculationServiceModules from "@/rechner/berechnung/components/serviceModules";
import CalculatorCalculationSummary from "@/rechner/berechnung/components/summary";
import CalculatorCalculationButtons from "@/rechner/berechnung/components/buttons";
import ServiceSegments from "@/components/serviceSegments";
import ServiceSegmentsDetails from "@/components/serviceSegments/details";
import {ServiceSegmentsProvider} from "@/lib/stores/serviceSegments/context";

export default function CalculatorCalculation({serviceSegments, customer, costCalculation, contact}: any) {
    return (
        <ServiceSegmentsProvider serviceSegments={serviceSegments?.map((s: any) => s.serviceSegment)}>
            <CalculatorCalculationContainer>
                <ServiceSegments key="service-segments"
                                 title="Wähle deine Bausteine"
                                 description="Du kannst mehrere Optionen wählen, die in dein Paket einfließen sollen."
                                 bgColor="bg-orange-400" />
                <ServiceSegmentsDetails key="service-segments-details">
                    <CalculatorCalculationServiceModules />
                </ServiceSegmentsDetails>

                <CalculatorCalculationSummary key="summery" customer={customer} costCalculation={costCalculation} />
                <CalculatorCalculationButtons key="buttons" contact={contact} />
            </CalculatorCalculationContainer>
        </ServiceSegmentsProvider>
    );
}

function CalculatorCalculationContainer({children}: ReactNodeProps) {
    return (
        <main
            className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-currection))] flex flex-col items-center pt-[calc(var(--height-banner)+var(--spacing-y-sm))] bg-orange-400">
            <div className="w-full relative z-10 grow">
                {children}
            </div>
        </main>
    );
}