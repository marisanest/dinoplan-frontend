import {LandingProps} from "@/(landing)/landing";
import {ReactNodeProps} from "@/lib/types/core";
import LandingServiceSegmentDetail from "@/(landing)/serviceSegments/serviceSegmentDetail";
import ServiceSegments from "@/components/serviceSegments";
import CalculatorCalculationProviderContainer from "@/rechner/berechnung/components/providerContainer";
import ServiceSegmentsDetails from "@/components/serviceSegments/details";

export default function LandingServiceSegments({serviceSegmentsPageSection}: Pick<LandingProps, 'serviceSegmentsPageSection'>) {

    return (
        <CalculatorCalculationProviderContainer serviceSegments={serviceSegmentsPageSection?.serviceSegments}>
            <LandingServiceSegmentsContainer>
                <ServiceSegments key="service-segments"
                                 className="rounded-bl-md"
                                 title={serviceSegmentsPageSection?.title}
                                 description={serviceSegmentsPageSection?.description} />

                <ServiceSegmentsDetails key="service-segments-details">
                    <LandingServiceSegmentDetail key="detail" />
                </ServiceSegmentsDetails>
            </LandingServiceSegmentsContainer>
        </CalculatorCalculationProviderContainer>
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
