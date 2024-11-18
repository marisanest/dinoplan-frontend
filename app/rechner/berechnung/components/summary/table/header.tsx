import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorCalculationSummaryTableHeader() {
    return (
        <CalculatorCalculationSummaryTableHeaderContainer>
            <Text className="!font-light" size="md" align="left">Baustein</Text>
            <Text className="!font-light" size="md" align="right">Kosten pro Monat</Text>
        </CalculatorCalculationSummaryTableHeaderContainer>
    );
}

function CalculatorCalculationSummaryTableHeaderContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full grid grid-cols-2 mt-[0.5rem] mb-[0.75rem]">
            {children}
        </div>
    );
}