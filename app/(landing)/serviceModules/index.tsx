import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import LandingServiceModulesExample from "@/(landing)/serviceModules/example";
import LandingServiceModulesButtons from "@/(landing)/serviceModules/buttons";
import {LandingProps} from "@/(landing)/landing";
import {PortableText} from "next-sanity";

export default function LandingServiceModules({serviceModulesPageSection}: Pick<LandingProps, 'serviceModulesPageSection'>) {
    if (!serviceModulesPageSection) return null;

    return (
        <LandingServiceModulesContainer>
            <Title key="title">
                <PortableText value={serviceModulesPageSection.title} />
            </Title>
            <LandingServiceModulesButtons key="buttons" serviceModulesPageSection={serviceModulesPageSection} />
            <LandingServiceModulesExample key="example" />
        </LandingServiceModulesContainer>
    );
}

function LandingServiceModulesContainer({children}: ReactNodeProps) {
    return (
        <div className="flex items-center justify-center mb-y-m">
            <div className="w-[calc(100dvw-calc(2*var(--spacing-x-outer)))] sm:w-sm sm:max-w-sm flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}
