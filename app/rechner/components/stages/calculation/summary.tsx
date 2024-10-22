import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";
import Title from "@/components/title";
import Text from "@/components/text/text";

export default function CalculatorStageCalculationSummary({costCalculation}) {
    const { selectedServiceModules } = useCalculatorStore(
        useShallow((state) => ({
            selectedServiceModules: state.selectedServiceModules,
        })),
    );

    return (
        <div className="w-full flex-col flex justify-center items-center">
            <Text className="mb-[2rem]" size="sm">
                Du hast {Object.values(selectedServiceModules).length} Baustein(e) ausgewählt.
            </Text>
            {
                Object.values(selectedServiceModules).length > 0 && (
                    <>
                        <Title className="mb-[0.5rem]" size="lg">
                            Max's Dinoplan
                        </Title>
                        <Text className="mb-[2rem]" size="sm">
                            Folgendes würde dich unser dino-starket Paket kosten:
                        </Text>

                        <div className="w-full max-w-[500px]">
                            <div className="flex justify-between w-full mt-[0.5rem] mb-[0.75rem]">
                                <Text className="!font-light" size="md" align="left">
                                    Baustein
                                </Text>
                                <Text className="!font-light" size="md" align="right">
                                    Kosten pro Monat
                                </Text>
                            </div>
                            <div className="flex flex-col gap-[0.25rem]">
                                {
                                    Object.values(selectedServiceModules).map((selectedServiceModule) => (
                                        <div key={selectedServiceModule._id} className="flex justify-between w-full">
                                            <Text align="left" size="sm">
                                                {selectedServiceModule.name}
                                            </Text>
                                            <Text align="right" size="sm">
                                                {calculatePricePerMonth(selectedServiceModule, costCalculation)} €
                                            </Text>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr className="border-[1px] border-blue-600 my-[0.5rem]"/>
                            <div className="flex justify-between w-full">
                                <Text align="left" size="sm">
                                    Insgesamt
                                </Text>
                                <Text align="right" size="sm">
                                    {Object.values(selectedServiceModules).map((selectedServiceModule) => calculatePricePerMonth(selectedServiceModule, costCalculation)).reduce((partialSum, a) => partialSum + a, 0)} €
                                </Text>
                            </div>
                        </div>

                        <Text className="my-y-xs" size="sm">
                           Vereinbare jetzt einen Termin mit uns und lass dich umfangreich zu deinem Paket beraten.
                        </Text>
                    </>
                )
            }
        </div>
    );
}

function calculatePricePerMonth(serviceModule, costCalculation) {
    if (serviceModule.costPerMonthForInsurance) {
        return serviceModule.costPerMonthForInsurance;
    } else if (serviceModule.costCalculationForFinancialInvestment) {
        const childAge = 3 // todo
        const nYears = serviceModule.costCalculationForFinancialInvestment.ageAtPayout - childAge;
        const nMonths = nYears * 12;
        const pYear = costCalculation.interestRate
        const pMonth = 100 * (Math.pow((1 + pYear / 100), 1/12) - 1)
        const q = 1.0 + (pMonth / 100.0)
        const e = serviceModule.costCalculationForFinancialInvestment.cost * Math.pow(1 + costCalculation.inflationRate / 100.0, nYears)
        const r = e * (q - 1) / (q * (Math.pow(q, nMonths) - 1))

        return Math.round((r + Number.EPSILON) * 100) / 100;
    } else {
        return 0;
    }
}