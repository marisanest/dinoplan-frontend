import {ReactNodeProps} from "@/lib/types/core";
import LandingStartDescription from "@/app/(landing)/start/description";
import LandingStartBackground from "@/app/(landing)/start/background";
import {LandingProps} from "@/(landing)/landing";
import Title from "@/components/title";
import {PortableText} from "next-sanity";

export default function LandingStart({startPageSection, serviceSegmentsPageSection}: Pick<LandingProps, 'startPageSection' | 'serviceSegmentsPageSection'>) {
    if (!startPageSection) return null;

    return (
        <LandingStartContainer>
            <div className="relative z-10 h-full flex flex-col">
                <Title size="7xl" align="left">
                    <PortableText value={startPageSection?.title}/>
                </Title>
                <LandingStartDescription startPageSection={startPageSection} serviceSegmentsPageSection={serviceSegmentsPageSection}/>
            </div>
            <LandingStartBackground key="background" startPageSection={startPageSection}/>
        </LandingStartContainer>
    );
}

function LandingStartContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full bg-orange-200 px-x-outer pt-[calc(var(--height-banner)+var(--spacing-y-outer))] pb-y-outer flex justify-center">
            <div className="relative max-w-md w-md h-[625px]">
                {children}
            </div>
        </div>
    );
}
