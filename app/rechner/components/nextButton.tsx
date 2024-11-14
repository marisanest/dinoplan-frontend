import Text from "@/components/text/text";
import FormButton from "@/components/buttons/formButton";

export type CalculatorNextButtonProps = {
    pending: boolean;
}

export default function CalculatorNextButton({pending}: CalculatorNextButtonProps) {
    return (
        <FormButton disabled={pending} className="w-fit" colors="blue" size="sm">
            <Text color="none">Weiter</Text>
        </FormButton>
    )
}
