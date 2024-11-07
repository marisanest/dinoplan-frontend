import {ArrayElement, ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import {SERVICE_MODULES_QUERYResult} from "@/lib/types/sanity-types";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export type LandingServiceModulesExampleTextProps = {
    serviceModule: ArrayElement<SERVICE_MODULES_QUERYResult>;
}

export default function LandingServiceModulesExampleText({serviceModule}: LandingServiceModulesExampleTextProps) {
    return (
        <LandingServiceModulesExampleTextContainer>
            <Title className="mb-[1rem] sm:mb-[1.5rem] !text-3xl" size='lg' align="left">{serviceModule.name}</Title>
            <Text align="left" size="lg">
                <PortableText value={serviceModule.example?.input}/>
            </Text>
            <hr className="my-[0.5rem] sm:my-[0.75rem] border-[1px] border-blue-600"/>
            <Text align="left" size="lg">
                <PortableText value={serviceModule.example?.output}/>
            </Text>
        </LandingServiceModulesExampleTextContainer>
);
}

function LandingServiceModulesExampleTextContainer({
    children
}: ReactNodeProps) {
    return (
        <div className="h-full flex justify-center flex-col">
            {children}
        </div>
    );
}
