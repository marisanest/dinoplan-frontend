import {ReactNodeProps, ServiceType} from "@/lib/types/core";
import Title from "@/components/title";
import RichText from "@/components/text";

export type LandingServicesExampleTextProps = {
    service: ServiceType;
}

export default function LandingServicesExampleText({service}: LandingServicesExampleTextProps) {
    return (
        <LandingServicesExampleTextContainer>
            <Title className="mb-6" size='lg' align="left">{service.title}</Title>
            <RichText align="left" trustedHtml={service.example.input.join('<br/>')}/>
            <hr className="my-4 border-[1px] border-blue-600"/>
            <RichText align="left" trustedHtml={service.example.output.join('<br/>')}/>
        </LandingServicesExampleTextContainer>
    );
}

function LandingServicesExampleTextContainer({children}: ReactNodeProps) {
    return (
        <div>
            {children}
        </div>
    );
}
