import CalculatorStageSharedPrevButton, {
    CalculatorStageSharedBackButtonProps
} from "@/rechner/components/stages/shared/prevButton";
import CalculatorStageSharedNextButton, {
    CalculatorStageSharedNextButtonProps
} from "@/rechner/components/stages/shared/nextButton";

export type CalculatorStageSharedNextButtonsProps = CalculatorStageSharedNextButtonProps & CalculatorStageSharedBackButtonProps

export default function CalculatorStageSharedNextButtons({pending, link, onBackButtonClick}: CalculatorStageSharedNextButtonsProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <CalculatorStageSharedNextButton key="nextButton" pending={pending}/>
            <CalculatorStageSharedPrevButton key="prevButton" link={link} onBackButtonClick={onBackButtonClick}/>
        </div>
    );
}
