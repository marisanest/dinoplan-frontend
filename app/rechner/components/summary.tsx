import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";
import RichText from "@/components/text";
import Title from "@/components/title";

function calculatePricePerMonth(serviceModule) {
    if (serviceModule.costPerMonthForInsurance) {
        return serviceModule.costPerMonthForInsurance;
    } else if (serviceModule.costCalculationForFinancialInvestment) {
        // serviceModule.costCalculationForFinancialInvestment
        serviceModule.costCalculationForFinancialInvestment.cost
        serviceModule.costCalculationForFinancialInvestment.ageAtPayout
        // inflationRate
        // interestRate

        const ageGap = 15

        return 10;
    } else {
        return 0;
    }
}

export default function CalculatorThirdSummary() {
    const { selectedServiceModules } = useCalculatorStore(
        useShallow((state) => ({
            selectedServiceModules: state.selectedServiceModules,
        })),
    );

    return (
        <div className="w-full flex-col flex justify-center items-center">
            <RichText className="mb-[1rem]" trustedHtml={`Du hast ${Object.values(selectedServiceModules).length} Baustein(e) ausgewählt.`} size="sm" />
            {Object.values(selectedServiceModules).length > 0 && (
                <>
                    <Title className="mb-[0.5rem]" size="lg">Max's Dinoplan</Title>
                    <RichText className="mb-[2rem]" trustedHtml="Folgendes würde dich unser dino-starket Paket kosten:" size="sm" />

                    <div className="w-full max-w-[500px]">
                        <div className="flex justify-between w-full mt-[0.5rem] mb-[0.5rem]">
                            <RichText align="left" trustedHtml="Baustein" size="md"/>
                            <RichText align="right" trustedHtml="Kosten pro Monat" size="md"/>
                        </div>
                        <div className="mb-[0.5rem]">
                            {Object.values(selectedServiceModules).map((selectedServiceModule) => (
                                <div key={selectedServiceModule._id} className="flex justify-between w-full">
                                    <RichText align="left" className="" trustedHtml={selectedServiceModule.name}
                                              size="sm"/>
                                    <RichText align="right" className=""
                                              trustedHtml={`${calculatePricePerMonth(selectedServiceModule)} €`}
                                              size="sm"/>
                                </div>
                            ))}
                        </div>
                        <hr className="border-[1px] border-blue-600"/>
                        <div className="flex justify-between w-full mt-[0.5rem]">
                            <RichText align="left" className="mb-[2rem]" trustedHtml="Insgesamt" size="sm"/>
                            <RichText align="right" className="mb-[2rem]"
                                      trustedHtml={`${Object.values(selectedServiceModules).map((selectedServiceModule) => calculatePricePerMonth(selectedServiceModule)).reduce((partialSum, a) => partialSum + a, 0)} €`}
                                      size="sm"/>
                        </div>
                    </div>

                    <RichText className="mb-[1rem]"
                              trustedHtml="Vereinbare jetzt einen Termin mit uns und lass dich umfangreich zu deinem Paket beraten."
                              size="sm"/>
                </>
            )}
        </div>
    );
}
