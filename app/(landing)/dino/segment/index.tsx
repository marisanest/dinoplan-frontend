import {DinoSegmentType, ReactNodeProps} from "@/lib/types/core";
import LandingDinoSegmentImage from "@/app/(landing)/dino/segment/image";
import LandingDinoSegmentTitle from "@/app/(landing)/dino/segment/title";

export type LandingDinoSegmentProps = {
    segment: DinoSegmentType;
}

export default function LandingDinoSegment({segment}: LandingDinoSegmentProps) {
    return (
        <LandingDinoSegmentContainer>
            <LandingDinoSegmentImage key="image" segment={segment} />
            <LandingDinoSegmentTitle key="title" segment={segment} />
        </LandingDinoSegmentContainer>
    );
}

function LandingDinoSegmentContainer({children}: ReactNodeProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            {children}
        </div>
    );
}
