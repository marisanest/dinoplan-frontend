import Text from "@/components/text/text";
import {CalculatorCalculationSummaryTableValueType} from "@/rechner/berechnung/components/summary/table";
import {toMonetary, zeroPad} from "@/lib/utils";

export default function CalculatorCalculationSummaryTableValue({value}: {value: CalculatorCalculationSummaryTableValueType}) {
    return (
        <div className="w-full grid grid-cols-2">
            <Text key="cost-name" align="left" size="sm">
                {value.name}
            </Text>
            <Text key="cost-per-month" align="right" size="sm">
                {toMonetary(value.costPerMonth)} €
            </Text>
        </div>
    );
}