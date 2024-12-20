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
            <Title key="title" className="max-w-text-lg">
                <PortableText value={serviceModulesPageSection.title} />
            </Title>
            <LandingServiceModulesButtons key="buttons" serviceModulesPageSection={serviceModulesPageSection} />
            <LandingServiceModulesExample key="example" />
        </LandingServiceModulesContainer>
    );
}

function LandingServiceModulesContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center px-x-outer pb-y-block">
            <div className="w-full max-w-sm flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}
