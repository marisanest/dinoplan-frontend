import Title from "@/components/title";
import AppointmentButton from "@/components/buttons/appointment";
import CalculatorServiceSegment from "@/rechner/components/serviceSegment";
import CalculatorServiceModules from "@/rechner/components/serviceModules";
import CalculatorThirdSummary from "@/rechner/components/summary";

export default function CalculatorThird({setStage, serviceSegments}) {
    return (
        <div>
            <div className="bg-orange-200 rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm">
                <Title>Wähle deine Bausteine</Title>
                <Title className="mb-y-xs" size="xs">Du kannst mehrere Optionen wählen, die in dein Paket einfließen
                    sollen.</Title>
                <div className="w-full grid grid-cols-3 justify-between gap-[4rem] mt-y-s">
                    {serviceSegments?.map((serviceSegment, index) => (
                        <CalculatorServiceSegment
                            key={serviceSegment._id}
                            className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                            serviceSegment={serviceSegment}/>
                    ))}
                </div>
            </div>

            <CalculatorServiceModules />

            <div className="bg-orange-200 rounded-bl-[50px] px-x-sm py-y-sm w-sm max-w-sm">
                <CalculatorThirdSummary />
                <div className="flex flex-col justify-center items-center w-full">
                    <AppointmentButton/>
                    <div className="text-blue-600 mt-[0.5rem]">
                        <div className="cursor-pointer" onClick={() => setStage(2)}>Zurück</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
