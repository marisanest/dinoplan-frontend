import {useShallow} from "zustand/react/shallow";
import CalculatorCalculationSummaryTableHeader from "@/rechner/berechnung/components/summary/table/header";
import CalculatorCalculationSummaryTableSum from "@/rechner/berechnung/components/summary/table/sum";
import CalculatorCalculationSummaryTableValues from "@/rechner/berechnung/components/summary/table/values";
import {round} from "@/lib/math";
import {useCalculatorContext} from "@/lib/stores/calculator/context";

export type CalculatorCalculationSummaryTableValueType = {
    name: string;
    costPerMonth: number;
}

export default function CalculatorCalculationSummaryTable({customer, costCalculation}: any) {
    const { selectedServiceModules } = useCalculatorContext(
        useShallow((state) => ({
            selectedServiceModules: state.selectedServiceModules,
        })),
    );

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

function calculatePricePerMonth(serviceModule, costCalculation, customer) {
    if (serviceModule.costPerMonthForInsurance) {
        return serviceModule.costPerMonthForInsurance;
    } else if (serviceModule.costCalculationForFinancialInvestment) {
        return calculatePricePerMonthForFinancialInvestment({
            cost: serviceModule.costCalculationForFinancialInvestment.cost,
            ageAtPayout: serviceModule.costCalculationForFinancialInvestment.ageAtPayout,
            childDateOfBirth: customer.childDateOfBirth,
            interestRate: costCalculation.interestRate,
            inflationRate: costCalculation.inflationRate,
        });
    } else {
        return 0;
    }
}

function calculatePricePerMonthForFinancialInvestment({
    cost,
    ageAtPayout,
    childDateOfBirth,
    interestRate,
    inflationRate,
}: {
    cost: number,
    ageAtPayout: number,
    childDateOfBirth: string,
    interestRate: number,
    inflationRate: number,
}) {
    const [month, day, childBirthYear] = childDateOfBirth.split('-')

    const currentYear = new Date().getFullYear()
    const childAge = currentYear - parseInt(childBirthYear)
    const nYears = ageAtPayout - childAge;

    if (nYears <= 0) {
        return cost;
    }

    const nMonths = nYears * 12;
    const pYear = interestRate
    const pMonth = 100 * (Math.pow((1 + pYear / 100), 1 / 12) - 1)
    const q = 1.0 + (pMonth / 100.0)
    const e = cost * Math.pow(1 + inflationRate / 100.0, nYears)
    const r = e * (q - 1) / (q * (Math.pow(q, nMonths) - 1))

    return round(r, 2);
}