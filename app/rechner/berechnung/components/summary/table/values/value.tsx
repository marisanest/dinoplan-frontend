import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";
import {CalculatorCalculationSummaryTableValueType} from "@/rechner/berechnung/components/summary/table";

export default function CalculatorCalculationSummaryTableValue({value}: {value: CalculatorCalculationSummaryTableValueType}) {
    return (
        <CalculatorCalculationSummaryTableValueContainer>
            <Text key={value.name} align="left" size="sm">
                {value.name}
            </Text>
            <Text key={value.costPerMonth} align="right" size="sm">
                {value.costPerMonth} €
            </Text>
        </CalculatorCalculationSummaryTableValueContainer>
    );
}

function CalculatorCalculationSummaryTableValueContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full grid grid-cols-2">
            {children}
        </div>
    );
}
