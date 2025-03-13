import {useShallow} from "zustand/react/shallow";
import CalculatorCalculationSummaryTableHeader from "@/rechner/berechnung/components/summary/table/header";
import CalculatorCalculationSummaryTableSum from "@/rechner/berechnung/components/summary/table/sum";
import CalculatorCalculationSummaryTableValues from "@/rechner/berechnung/components/summary/table/values";
import {useCalculatorContext} from "@/lib/stores/calculator/context";
import {calculatePricePerMonthForFinancialInvestment, calculatePricePerMonthForForInsurance} from "@/lib/calculation";
import {CostCalculation, Customer} from "@/lib/types/sanity-types";

export type CalculatorCalculationSummaryTableValueType = {
    name: string;
    costPerMonth: number;
}

export default function CalculatorCalculationSummaryTable() {
    const {
        selectedServiceModules,
        customer,
        costCalculation,
    } = useCalculatorContext(useShallow((s) => ({
        selectedServiceModules: s.selectedServiceModules,
        customer: s.customer,
        costCalculation: s.costCalculation,
    })));

    if (Object.values(selectedServiceModules).length === 0) {
        return null;
    }

    const values: CalculatorCalculationSummaryTableValueType[] = Object.values(selectedServiceModules)
        .map((selectedServiceModule: any) => ({
            name: selectedServiceModule.name,
            costPerMonth: calculatePricePerMonth(selectedServiceModule, costCalculation, customer),
        }))

    return (
        <div className="w-full max-w-[500px]">
            <CalculatorCalculationSummaryTableHeader key="header" />
            <CalculatorCalculationSummaryTableValues key="values" values={values} />
            <hr className="border-[1px] border-blue-600 my-[0.5rem]" />
            <CalculatorCalculationSummaryTableSum key="sum" values={values} />
        </div>
    );
}

function calculatePricePerMonth(serviceModule: any, costCalculation: CostCalculation, customer: Customer) {
    if (serviceModule.costPerMonthForInsurance) {
        return calculatePricePerMonthForForInsurance({serviceModule, customer});
    } else if (serviceModule.costCalculationForFinancialInvestment) {
        return calculatePricePerMonthForFinancialInvestment({
            cost: serviceModule.costCalculationForFinancialInvestment.cost,
            ageAtPayout: serviceModule.costCalculationForFinancialInvestment.ageAtPayout,
            childAge: customer.childAge,
            interestRate: costCalculation.interestRate,
            inflationRate: costCalculation.inflationRate,
        });
    } else {
        return 0;
    }
}