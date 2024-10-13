import {ReactNodeProps} from "@/lib/types/core";
import {LandingServiceSegmentProps} from "@/(landing)/serviceSegments/serviceSegment/index";

export default function LandingServiceSegmentTitle({serviceSegment}: LandingServiceSegmentProps) {
    return (
        <LandingServiceSegmentTitleContainer>
            {serviceSegment.dinoPrefix}-Dino
        </LandingServiceSegmentTitleContainer>
    );
}

function LandingServiceSegmentTitleContainer({children}: ReactNodeProps) {
    return (
        <div className="cursor-pointer mt-auto text-blue-600">
            {children}
        </div>
    );
}
