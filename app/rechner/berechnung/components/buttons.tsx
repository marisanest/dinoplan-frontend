import Text from "@/components/text/text";
import Button from "@/components/buttons";
import CalculatorPrevButton from "@/rechner/components/prevButton";

export default function CalculatorCalculationButtons() {
    return (
        <div className="w-full flex justify-center px-x-outer">
            <div className="w-full sm:w-sm sm:max-w-sm flex flex-col items-center px-x-s s:px-x-sm pb-y-sm bg-orange-200 rounded-bl-md">
            <Button key="appointment-button" size="sm" colors="orange" link={{type: 'internal', url: '/kalender'}}>
                <Text color="yellow">Termin vereinbaren</Text>
            </Button>

            <CalculatorPrevButton key="backButton" prevLink={{type: 'internal', url: '/rechner/start'}} />
            </div>
        </div>
    );
}