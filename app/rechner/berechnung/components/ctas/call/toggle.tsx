import Text from "@/components/text/text";
import Button from "@/components/buttons";

export default function CalculatorCalculationCtaCallToggle({
                                                               isCallInputVisible,
                                                               setIsCallInputVisible
}: {
    isCallInputVisible: boolean;
    setIsCallInputVisible: (value: boolean) => void
}) {
    return (
        <Button className="w-fit"
                size="sm"
                colors="blue"
                onClick={() => setIsCallInputVisible(!isCallInputVisible)}>
            <Text color="yellow">
                Anruf anfragen
            </Text>
        </Button>
    );
}