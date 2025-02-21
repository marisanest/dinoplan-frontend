import Text from "@/components/text/text";
import {CalculatorCalculationSummaryTableValueType} from "@/rechner/berechnung/components/summary/table/index";
import {round} from "@/lib/math";
import {toMonetary} from "@/lib/utils";

export default function CalculatorCalculationSummaryTableSum({values}: {values: CalculatorCalculationSummaryTableValueType[]}) {
    const sum = values.reduce((reducedSum, value) => reducedSum + value.costPerMonth, 0)

    return (
        <div className="w-full grid grid-cols-2">
            <Text align="left" size="sm">Insgesamt</Text>
            <Text align="right" size="sm">{toMonetary(round(sum, 2))} €</Text>
        </div>
    );
}
