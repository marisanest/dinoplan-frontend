import {LandingProps} from "@/(landing)/landing";
import {ReactNodeProps} from "@/lib/types/core";
import LandingServiceSegmentDetail from "@/(landing)/serviceSegments/serviceSegmentDetail";
import ServiceSegments from "@/components/serviceSegments";
import ServiceSegmentsDetails from "@/components/serviceSegments/details";
import ServiceSegmentsProviderContainer from "@/components/serviceSegments/providerContainer";

export default function LandingServiceSegments({serviceSegmentsPageSection}: Pick<LandingProps, 'serviceSegmentsPageSection'>) {
    return (
        <LandingServiceSegmentsContainer>
            <ServiceSegmentsProviderContainer serviceSegments={serviceSegmentsPageSection?.serviceSegments}>
                <ServiceSegments key="service-segments"
                                 className="rounded-bl-md"
                                 title={serviceSegmentsPageSection?.title}
                                 description={serviceSegmentsPageSection?.description} />

                <ServiceSegmentsDetails key="service-segments-details">
                    <LandingServiceSegmentDetail key="detail" />
                </ServiceSegmentsDetails>
            </ServiceSegmentsProviderContainer>
        </LandingServiceSegmentsContainer>
    );
}

function LandingServiceSegmentsContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full relative pb-y-block">
            <div className="relative z-10 pt-y-block bg-yellow-100"></div>
            {children}
        </div>
    );
}
