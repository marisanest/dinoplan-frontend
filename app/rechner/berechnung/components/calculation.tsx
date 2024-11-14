import Text from "@/components/text/text";
import Button from "@/components/buttons";
import {ReactNodeProps} from "@/lib/types/core";
import CalculatorCalculationServiceSegments from "@/rechner/berechnung/components/serviceSergments";
import CalculatorCalculationServiceModules from "@/rechner/berechnung/components/serviceModules";
import CalculatorCalculationSummary from "@/rechner/berechnung/components/summary";
import CalculatorPrevButton from "@/rechner/components/prevButton";

export default function CalculatorCalculation({serviceSegments, customer, costCalculation, contact}: any) {
    return (
        <CalculatorCalculationContainer>
            <CalculatorCalculationServiceSegments key="segments" serviceSegments={serviceSegments}/>
            <CalculatorCalculationServiceModules key="modules"/>

            <div key="bottom" className="bg-orange-200 rounded-bl-[50px] px-x-sm pb-y-sm w-sm max-w-sm">
                <CalculatorCalculationSummary key="summery" customer={customer} costCalculation={costCalculation}/>

                <div className="flex flex-col justify-center items-center w-full">
                    <Button key="appointment-button" size="sm" colors="orange" link={contact.calendly}>
                        <Text color="yellow">Termin vereinbaren</Text>
                    </Button>

                    <CalculatorPrevButton key="backButton" prevLink={{type: 'internal', url: '/rechner/info'}}/>
                </div>
            </div>
        </CalculatorCalculationContainer>
    );
}


function CalculatorCalculationContainer({children}: ReactNodeProps) {
    return (
        <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image))] flex flex-col items-center pt-[9rem] bg-orange-400">
            {children}
        </main>
    );
}