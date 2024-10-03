import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import LandingServicesExample from "@/(landing)/services/example";
import LandingServicesButtons from "@/(landing)/services/buttons";

export default function LandingServices() {
    return (
        <LandingServiceContainer>
            <Title key="title">Schau dir deine Leistungen an unseren Beispielen an!</Title>
            <LandingServicesButtons key="buttons" />
            <LandingServicesExample key="example" />
        </LandingServiceContainer>
    );
}

function LandingServiceContainer({children}: ReactNodeProps) {
    return (
        <div className="flex items-center justify-center mb-y-m">
            <div className="w-sm max-w-sm flex flex-col px-x-sm items-center justify-center">
                {children}
            </div>
        </div>
    );
}
