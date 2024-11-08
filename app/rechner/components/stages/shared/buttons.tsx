import CalculatorStageSharedPrevButton, {
    CalculatorStageSharedPrevButtonProps
} from "@/rechner/components/stages/shared/prevButton";
import CalculatorStageSharedNextButton, {
    CalculatorStageSharedNextButtonProps
} from "@/rechner/components/stages/shared/nextButton";

export type CalculatorStageSharedNextButtonsProps = CalculatorStageSharedNextButtonProps & CalculatorStageSharedPrevButtonProps

export default function CalculatorStageSharedButtons({pending, prevLink}: CalculatorStageSharedNextButtonsProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <CalculatorStageSharedNextButton key="nextButton" pending={pending} />
            <CalculatorStageSharedPrevButton key="backButton" prevLink={prevLink} />
        </div>
    );
}
