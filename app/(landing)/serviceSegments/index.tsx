"use client"

import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import {LandingProps} from "@/(landing)/landing";
import Text from "@/components/text/text";
import {
    ServiceSegmentsProvider,
    useServiceSegmentsContext
} from "@/lib/stores/serviceSegments/context";
import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import LandingServiceSegmentsCarousel from "@/(landing)/serviceSegments/serviceSegmentsCarousel";
import LandingServiceSegmentsGrid from "@/(landing)/serviceSegments/grid";
import LandingServiceSegmentDetail from "@/(landing)/serviceSegments/serviceSegmentDetail";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useState} from "react";

export default function LandingServiceSegments({serviceSegmentsPageSection}: Pick<LandingProps, 'serviceSegmentsPageSection'>) {
    const [height, setHeight] = useState(0)
    const screenSizes = useScreenSizes()
    if (!serviceSegmentsPageSection?.serviceSegments || !Array.isArray(serviceSegmentsPageSection.serviceSegments) || serviceSegmentsPageSection.serviceSegments.length === 0 || !screenSizes) return null;

    return (
        <ServiceSegmentsProvider showServiceSegmentDetails={screenSizes.isXxs}
                                 serviceSegments={serviceSegmentsPageSection.serviceSegments.map(serviceSegment => serviceSegment.serviceSegment)}>
            <LandingServiceSegmentsContainer height={height}>
                <LandingServiceSegmentsInnerContainer key="main">
                    <Title key="title">
                        <PortableText value={serviceSegmentsPageSection.title}/>
                    </Title>
                    <Text key="description" className="mt-y-xs" size="sm">
                        <PortableText value={serviceSegmentsPageSection.description}/>
                    </Text>
                    <LandingServiceSegmentsGrid key="grid" />
                    <LandingServiceSegmentsCarousel key="carousel" />
                </LandingServiceSegmentsInnerContainer>
                <LandingServiceSegmentDetail key="detail" setHeight={setHeight} />
            </LandingServiceSegmentsContainer>
        </ServiceSegmentsProvider>
    );
}

function LandingServiceSegmentsContainer({children, height}) {
    const showServiceSegmentDetails = useServiceSegmentsContext(useShallow((s) => s.showServiceSegmentDetails))
    // w-[calc(100dvw-calc(2*var(--spacing-x-outer)))]

    return (
        <div className={cn("w-full bg-yellow-100 flex flex-col items-center pt-y-m transition-[margin] duration-1000", showServiceSegmentDetails ? 'pb-[calc(var(--spacing-y-m)-var(--dino-bottom-offset))]' : 'pb-y-m')}>
            <div className="relative z-10 sm:w-sm sm:max-w-sm">
                {children}
            </div>
            <div className="transition-[height] duration-1000" style={{height: showServiceSegmentDetails ? height : 0}}/>
        </div>
    );
}

function LandingServiceSegmentsInnerContainer({children}: ReactNodeProps) {
    const showServiceSegmentDetails = useServiceSegmentsContext(useShallow((s) => s.showServiceSegmentDetails))

    return (
        <div
            className={cn("relative z-10 bg-orange-200 rounded-bl-md rounded-tr-md transition-[box-shadow] px-x-s py-y-sm", showServiceSegmentDetails ? 'shadow-[0px_6px_10px_-10px_black]' : 'shadow-[0px_0px_0px_0px_black]')}>
            {children}
        </div>
    );
}

