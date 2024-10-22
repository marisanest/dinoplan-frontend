import Title from "@/components/title";
import CalculatorServiceSegment from "@/rechner/components/serviceSegment";
import CalculatorServiceModules from "@/rechner/components/serviceModules";
import CalculatorThirdSummary from "@/rechner/components/summary";
import Text from "@/components/text/text";
import Button from "@/components/buttons";

export default function CalculatorStageServiceModules({stage, setStageKey, serviceSegments, contact}) {
    return (
        <div>
            <div className="bg-orange-200 rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm">
                <Title>Wähle deine Bausteine</Title>
                <Text className="mb-y-xs mt-[0.5rem]" size="sm">
                    Du kannst mehrere Optionen wählen, die in dein Paket einfließen sollen.
                </Text>
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
                    <Button key="appointment" size="sm" colors="orange" link={contact.calendly}>
                        <Text color="yellow">Termin vereinbaren</Text>
                    </Button>
                    <div className="cursor-pointer mt-[1rem]" onClick={() => setStageKey(stage.prevKey)}>
                        <Text className="hover:text-blue-600-faded" size="md">Zurück</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
