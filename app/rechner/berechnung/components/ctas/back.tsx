import CalculatorPrevButton from "@/rechner/components/prevButton";

export default function CalculatorCalculationBackCta() {
    return (
        <CalculatorPrevButton key="backButton" prevLink={{type: 'internal', url: '/rechner/start'}} />
    );
}