import CalculatorCalculationServiceModules from "@/rechner/berechnung/components/serviceModules";
import CalculatorCalculationSummary from "@/rechner/berechnung/components/summary";
import {CalculatorProvider} from "@/lib/stores/calculator/context";
import CalculatorCalculationServiceSegments from "@/rechner/berechnung/components/serviceSegments";
import CalculatorCalculationServiceSegmentsDetails from "@/rechner/berechnung/components/serviceSegments/details";
import {InfoBoxProvider} from "@/lib/stores/infoBox/context";
import InfoBox from "@/components/infoBox";
import CalculatorCalculationCtas from "@/rechner/berechnung/components/ctas";

export default function CalculatorCalculation({serviceSegments, customer, costCalculation}: any) {
    return (
        <CalculatorProvider serviceSegments={serviceSegments}>
            <InfoBoxProvider>
                <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-correction))] flex flex-col items-center pt-[calc(var(--height-banner)+var(--spacing-y-sm))] bg-orange-400">
                    <div className="w-full relative z-10 grow">
                        <CalculatorCalculationServiceSegments key="service-segments"/>

                        <CalculatorCalculationServiceSegmentsDetails key="service-segments-details">
                            <CalculatorCalculationServiceModules />
                        </CalculatorCalculationServiceSegmentsDetails>

                        <CalculatorCalculationSummary key="summery" customer={customer} costCalculation={costCalculation} />
                        <CalculatorCalculationCtas customer={customer}/>
                    </div>

                    <InfoBox/>
                </main>
            </InfoBoxProvider>
        </CalculatorProvider>
    );
}