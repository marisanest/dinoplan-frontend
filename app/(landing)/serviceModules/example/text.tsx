import {ArrayElement, ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import {SERVICE_MODULES_QUERYResult} from "@/lib/types/sanity-types";
import {PortableText} from "next-sanity";
import RichText from "@/components/text";

export type LandingServiceModulesExampleTextProps = {
    serviceModule: ArrayElement<SERVICE_MODULES_QUERYResult>;
}

export default function LandingServiceModulesExampleText({serviceModule}: LandingServiceModulesExampleTextProps) {
    return (
        <LandingServiceModulesExampleTextContainer>
            <Title className="mb-6" size='lg' align="left">{serviceModule.name}</Title>
            <div className="text-blue-600 justify-start font-normal text-lg flex items-center w-full">
                <PortableText value={serviceModule.example?.input}/>
            </div>
            <hr className="my-4 border-[1px] border-blue-600"/>
            <div className="text-blue-600 justify-start font-normal text-lg flex items-center w-full">
                <PortableText value={serviceModule.example?.output}/>
            </div>
        </LandingServiceModulesExampleTextContainer>
);
}

function LandingServiceModulesExampleTextContainer({
    children
}: ReactNodeProps) {
    return (
        <div>
            {children}
        </div>
    );
}
