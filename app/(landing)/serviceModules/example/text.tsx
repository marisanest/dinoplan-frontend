import Title from "@/components/title";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export default function LandingServiceModulesExampleText({selectedServiceModule}: {selectedServiceModule: any}) {
    return (
        <div className="h-full flex justify-center flex-col">
            <Title className="pb-[1rem] sm:pb-[1.5rem] !text-3xl xs:justify-start xs:text-left"
                   size='lg'>{selectedServiceModule?.name}</Title>

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