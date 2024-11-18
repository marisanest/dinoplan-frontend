import {ReactNodeProps} from "@/lib/types/core";
import {CalculatorCalculationSummaryTableValueType} from "@/rechner/berechnung/components/summary/table";
import CalculatorCalculationSummaryTableValue from "@/rechner/berechnung/components/summary/table/values/value";

export default function CalculatorCalculationSummaryTableValues({values}: {values: CalculatorCalculationSummaryTableValueType[]}) {
    return (
        <CalculatorCalculationSummaryTableValuesContainer>
            {values.map((value) => <CalculatorCalculationSummaryTableValue key={value.name} value={value} />)}
        </CalculatorCalculationSummaryTableValuesContainer>
    );
}

function CalculatorCalculationSummaryTableValuesContainer({children}: ReactNodeProps) {
    return <>{children}</>;
}
