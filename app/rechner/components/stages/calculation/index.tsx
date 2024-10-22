import Text from "@/components/text/text";
import Button from "@/components/buttons";
import CalculatorStageCalculationServiceModules from "@/rechner/components/stages/calculation/serviceModules";
import CalculatorStageCalculationServiceSegments from "@/rechner/components/stages/calculation/serviceSergments";
import CalculatorStageCalculationSummary from "@/rechner/components/stages/calculation/summary";
import CalculatorStageSharedPrevButton from "@/rechner/components/stages/shared/prevButton";

export default function CalculatorStageCalculation({stage, setStageKey, serviceSegments, costCalculation, contact}) {
    const onBackButtonClick = () => {
        setStageKey(stage.prevKey);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <CalculatorStageCalculationServiceSegments key="segments" serviceSegments={serviceSegments} />
            <CalculatorStageCalculationServiceModules key="modules" />
            <div key="summery" className="bg-orange-200 rounded-bl-[50px] px-x-sm pb-y-sm w-sm max-w-sm">
                <CalculatorStageCalculationSummary key="summery" costCalculation={costCalculation}/>

                <div className="flex flex-col justify-center items-center w-full">
                    <Button key="appointment-button" size="sm" colors="orange" link={contact.calendly}>
                        <Text color="yellow">Termin vereinbaren</Text>
                    </Button>
                    <CalculatorStageSharedPrevButton key="backButton" onBackButtonClick={onBackButtonClick} />
                </div>
            </div>
        </div>
    );
}
