import {ArrayElement, ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import {SERVICE_MODULES_QUERYResult} from "@/lib/types/sanity-types";
import {PortableText} from "next-sanity";

export type LandingServiceModulesExampleTextProps = {
    serviceModule: ArrayElement<SERVICE_MODULES_QUERYResult>;
}

export default function LandingServiceModulesExampleText({serviceModule}: LandingServiceModulesExampleTextProps) {
    return (
        <LandingServiceModulesExampleTextContainer>
            <Title className="mb-6" size='lg' align="left">{serviceModule.name}</Title>
            <PortableText value={serviceModule.example?.input} />
            {/*<RichText align="left" trustedHtml={serviceModule.example.input.join('<br/>')}/>*/}
            <hr className="my-4 border-[1px] border-blue-600"/>
            <PortableText value={serviceModule.example?.output} />
            {/*<RichText align="left" trustedHtml={service.example.output.join('<br/>')}/>*/}
        </LandingServiceModulesExampleTextContainer>
    );
}

function LandingServiceModulesExampleTextContainer({children}: ReactNodeProps) {
    return (
        <div>
            {children}
        </div>
    );
}
