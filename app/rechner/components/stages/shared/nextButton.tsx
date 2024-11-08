import Text from "@/components/text/text";
import FormButton from "@/components/buttons/formButton";

export type CalculatorStageSharedNextButtonProps = {
    pending: boolean;
}

export default function CalculatorStageSharedNextButton({pending}: CalculatorStageSharedNextButtonProps) {
    return (
        <FormButton disabled={pending} className="w-fit" colors="blue" size="sm">
            <Text color="none">Weiter</Text>
        </FormButton>
    )
}
