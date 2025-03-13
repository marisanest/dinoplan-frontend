import Title from "@/components/title";
import Text from "@/components/text/text";
import CalculatorCalculationServiceSegmentsContainer from "@/rechner/berechnung/components/serviceSegments/container";
import CalculatorCalculationServiceSegmentsGrid from "@/rechner/berechnung/components/serviceSegments/grid";
import CalculatorCalculationServiceSegmentsCarousel from "@/rechner/berechnung/components/serviceSegments/carousel";

export default function CalculatorCalculationServiceSegments() {
    return (
        <CalculatorCalculationServiceSegmentsContainer>
            <Title className="max-w-text">
                Wähle deine Bausteine
            </Title>
            <Text className="max-w-text pb-y-[30px] xs:pb-y-s pt-[10px]" size="sm">
                Du kannst mehrere Optionen wählen, die in dein Paket einfließen sollen.
            </Text>

            <CalculatorCalculationServiceSegmentsGrid />
            {/*<CalculatorCalculationServiceSegmentsCarousel />*/}
        </CalculatorCalculationServiceSegmentsContainer>
    );
}