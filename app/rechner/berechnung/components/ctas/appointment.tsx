import Text from "@/components/text/text";
import Button from "@/components/buttons";
import CalculatorPrevButton from "@/rechner/components/prevButton";

export default function CalculatorCalculationAppointmentCta() {
    return (
        <Button key="appointment-button" size="sm" colors="orange" link={{type: 'internal', url: '/kalender'}}>
            <Text color="yellow">Termin vereinbaren</Text>
        </Button>
    );
}