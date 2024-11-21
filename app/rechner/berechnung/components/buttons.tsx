import Text from "@/components/text/text";
import Button from "@/components/buttons";
import {ReactNodeProps} from "@/lib/types/core";
import CalculatorPrevButton from "@/rechner/components/prevButton";

export default function CalculatorCalculationButtons({contact}: any) {
    return (
        <CalculatorCalculationButtonsContainer>
            <Button key="appointment-button" size="sm" colors="orange" link={contact.calendly}>
                <Text color="yellow">Termin vereinbaren</Text>
            </Button>

            <CalculatorPrevButton key="backButton" prevLink={{type: 'internal', url: '/rechner/info'}} />
        </CalculatorCalculationButtonsContainer>
    );
}

function CalculatorCalculationButtonsContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className="w-full sm:w-sm sm:max-w-sm flex flex-col items-center px-x-s s:px-x-sm pb-y-sm bg-orange-200 rounded-bl-md">
                {children}
            </div>
        </div>
    );
}