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
            <div className="relative z-10 pt-[var(--height-banner)]">
                <div className="pt-[var(--spacing-y-outer)] h-[calc(100dvh-var(--height-banner)-var(--spacing-y-outer)-var(--height-start-description))] flex flex-col justify-start sm:justify-center">
                    <Title size="7xl" align="left">
                        <PortableText value={startPageSection?.title}/>
                    </Title>
                </div>

                <LandingStartDescription startPageSection={startPageSection} serviceSegmentsPageSection={serviceSegmentsPageSection}/>
            </div>
            <LandingStartBackground key="background" startPageSection={startPageSection}/>
        </LandingStartContainer>
    );
}

function LandingStartContainer({children}: ReactNodeProps) {
    return (
        <div className="relative z-10 w-[100dvw] h-[100dvh] bg-orange-200 rounded-bl-lg px-x-outer">
            {children}
        </div>
    );
}
