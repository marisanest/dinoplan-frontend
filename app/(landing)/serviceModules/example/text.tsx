import Title from "@/components/title";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";
import InfoBoxToggle from "@/components/infoBox/toggle";

export default function LandingServiceModulesExampleText({selectedServiceModule}: {selectedServiceModule: any}) {
    return (
        <div className="h-full flex justify-center flex-col">
            <div className="flex justify-center xs:justify-start pb-[1rem] sm:pb-[1.5rem]">
                <Title className="!w-fit !text-3xl xs:justify-start xs:text-left pt-[4px]"
                       size='lg'>
                    {selectedServiceModule?.name}
                </Title>
                {selectedServiceModule.costCalculationDescription && <InfoBoxToggle text={selectedServiceModule.costCalculationDescription} />}
            </div>

            <Text className="xs:justify-start xs:text-left" size="lg">
                {selectedServiceModule?.example?.input && <PortableText value={selectedServiceModule?.example?.input}/>}
            </Text>

            <hr className="my-[0.5rem] sm:my-[0.75rem] border-[1px] border-blue-600"/>

            <Text className="xs:justify-start xs:text-left" size="lg">
                {selectedServiceModule?.example?.output && <PortableText value={selectedServiceModule?.example?.output}/>}
            </Text>
        </div>
    );
}