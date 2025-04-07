import Text from "@/components/text/text";
import Button from "@/components/buttons";

export default function CalculatorCalculationCtaAppointmentToggle({
                                                                      isAppointmentEmbedVisible,
                                                                      setIsAppointmentEmbedVisible
}: {
    isAppointmentEmbedVisible: boolean,
    setIsAppointmentEmbedVisible: (values: boolean) => void
}) {
    return (
        <Button size="sm"
                colors="orange"
                onClick={() => setIsAppointmentEmbedVisible(!isAppointmentEmbedVisible)}>
            <Text color="yellow">
                Termin vereinbaren
            </Text>
        </Button>
    );
}