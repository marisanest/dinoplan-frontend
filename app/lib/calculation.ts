import {round} from "@/lib/math";
import {CostCalculation, Customer, ServiceModule} from "@/lib/types/sanity-types";

export function calculatePricePerMonthForFinancialInvestment({
                                                          cost,
                                                          ageAtPayout,
                                                          childAge,
                                                          interestRate,
                                                          inflationRate,
                                                      }: {
    cost: number,
    ageAtPayout: number,
    childAge: number,
    interestRate: number,
    inflationRate: number,
}) {
    const nYears = ageAtPayout - childAge;

    if (nYears <= 0)
        return cost;

    const nMonths = nYears * 12;
    const pYear = interestRate
    const pMonth = 100 * (Math.pow((1 + pYear / 100), 1 / 12) - 1)
    const q = 1.0 + (pMonth / 100.0)
    const e = cost * Math.pow(1 + inflationRate / 100.0, nYears)
    const r = e * (q - 1) / (q * (Math.pow(q, nMonths) - 1))

    return round(r, 2);
}


export function calculatePricePerMonthForForInsurance({serviceModule, customer}: {serviceModule: any; customer: any}): number {
    if (customer.childAge <= 18) {
        return serviceModule.extractedCostPerMonthForInsurance[customer.childAge]
    } else {
        return serviceModule.extractedCostPerMonthForInsurance[18]
    }
}

export function calculatePricePerMonth(serviceModule: ServiceModule, costCalculation: CostCalculation | undefined, customer: Customer | undefined) {
    if (serviceModule.costPerMonthForInsurance) {
        return calculatePricePerMonthForForInsurance({serviceModule, customer});
    } else if (serviceModule.costCalculationForFinancialInvestment) {
        return calculatePricePerMonthForFinancialInvestment({
            cost: serviceModule.costCalculationForFinancialInvestment.cost ?? 0,
            ageAtPayout: serviceModule.costCalculationForFinancialInvestment.ageAtPayout ?? 0,
            childAge: customer?.childAge ?? 0,
            interestRate: costCalculation?.interestRate ?? 0,
            inflationRate: costCalculation?.inflationRate ?? 0,
        });
    } else {
        return 0;
    }
}