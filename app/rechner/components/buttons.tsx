import CalculatorPrevButton, {
    CalculatorPrevButtonProps
} from "@/rechner/components/prevButton";
import CalculatorNextButton, {
    CalculatorNextButtonProps
} from "@/rechner/components/nextButton";

export type CalculatorButtonsProps = CalculatorNextButtonProps & CalculatorPrevButtonProps

export default function CalculatorButtons({pending, prevLink}: CalculatorButtonsProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <CalculatorNextButton key="nextButton" pending={pending} />
            <CalculatorPrevButton key="backButton" prevLink={prevLink} />
        </div>
    );
}
