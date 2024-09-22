import {ReactNodeProps} from "@/lib/types/core";
import {LandingDinoSegmentProps} from "@/app/(landing)/dino/segment/index";

export default function LandingDinoSegmentTitle({segment}: LandingDinoSegmentProps) {
    return (
        <LandingDinoSegmentTitleContainer>
            {segment.title}
        </LandingDinoSegmentTitleContainer>
    );
}

function LandingDinoSegmentTitleContainer({children}: ReactNodeProps) {
    return (
        <div className="cursor-pointer mt-auto text-blue-600">
            {children}
        </div>
    );
}
