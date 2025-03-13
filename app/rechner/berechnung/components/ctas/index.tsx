import CalculatorCalculationAppointmentCta from "@/rechner/berechnung/components/ctas/appointment";
import CalculatorCalculationCallCta from "@/rechner/berechnung/components/ctas/call";
import Text from "@/components/text/text";
import CalculatorCalculationBackCta from "@/rechner/berechnung/components/ctas/back";

export default function CalculatorCalculationCtas({customer}: { customer: any }) {
    return (
        <div className="w-full flex justify-center px-x-outer">
            <div className="w-full sm:w-sm sm:max-w-sm flex flex-col items-center px-x-s s:px-x-sm pb-y-sm bg-orange-200 rounded-bl-md">
                <CalculatorCalculationAppointmentCta/>
                <Text className="py-[10px]" size="md">oder</Text>
                <CalculatorCalculationCallCta customer={customer}/>
                <CalculatorCalculationBackCta/>
            </div>
        </div>
    );
}