import ServiceSegmentsDetails from "@/components/serviceSegments/details";
import LandingServiceSegmentDetail from "@/(landing)/serviceSegments/serviceSegmentDetail";
import ServiceSegmentsGrid from "@/components/serviceSegments/grid";
import ServiceSegmentsCarousel from "@/components/serviceSegments/carousel";
import ServiceSegmentsContainer from "@/components/serviceSegments/container";
import LandingServiceSegmentsTitle from "@/(landing)/serviceSegments/title";
import LandingServiceSegmentsDescription from "@/(landing)/serviceSegments/description";
import InViewMotion from "@/components/inViewMotion";

export default function LandingServiceSegments() {
    return (
        <InViewMotion>
            <div className="w-full relative pb-y-block">
                <div className="relative z-10 pt-y-block bg-yellow-100"/>

                <ServiceSegmentsContainer className="rounded-bl-md">
                    <LandingServiceSegmentsTitle key="title" />
                    <LandingServiceSegmentsDescription key="description" />
                    <ServiceSegmentsGrid />
                    <ServiceSegmentsCarousel />
                </ServiceSegmentsContainer>

                <ServiceSegmentsDetails key="service-segments-details">
                    <LandingServiceSegmentDetail key="detail"/>
                </ServiceSegmentsDetails>
            </div>
        </InViewMotion>
    );
}
