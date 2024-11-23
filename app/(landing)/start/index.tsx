import {ReactNodeProps} from "@/lib/types/core";
import LandingStartDescription from "@/app/(landing)/start/description";
import LandingStartBackground from "@/app/(landing)/start/background";
import {LandingProps} from "@/(landing)/landing";
import Title from "@/components/title";
import {PortableText} from "next-sanity";

export default function LandingStart({
                                         startPageSection,
                                         serviceSegmentsPageSection
                                     }: Pick<LandingProps, 'startPageSection' | 'serviceSegmentsPageSection'>) {
    return (
        <LandingStartContainer>
            <LandingStartBackground key="background" startPageSection={startPageSection}/>

            <LandingStartInnerContainer>
                <div className="relative z-10 h-full flex flex-col">
                    <Title size="7xl" align="left">
                        {startPageSection && <PortableText value={startPageSection?.title}/>}
                    </Title>
                    <LandingStartDescription startPageSection={startPageSection}
                                             serviceSegmentsPageSection={serviceSegmentsPageSection}/>
                </div>
            </LandingStartInnerContainer>
        </LandingStartContainer>
    );
}

function LandingStartInnerContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center px-x-outer py-y-sections">
            <div className="w-full max-w-md h-[calc(100dvh-2*var(--spacing-y-sections)-var(--height-banner))] ss:h-start">
                {children}
            </div>
        </div>
    );
}

function LandingStartContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full relative pt-banner bg-orange-200">
            {children}
        </div>
    );
}