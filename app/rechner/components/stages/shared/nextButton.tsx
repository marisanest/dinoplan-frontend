import Text from "@/components/text/text";
import FormButton from "@/components/buttons/formButton";

export type CalculatorStageSharedNextButtonProps = {
    pending: boolean;
}

export default function CalculatorStageSharedNextButton({pending}: CalculatorStageSharedNextButtonProps) {
    return (
        <FormButton type="submit" disabled={pending} className="w-fit" colors="blue">
            <Text size="md" color="yellow">Weiter</Text>
        </FormButton>
    )
}
