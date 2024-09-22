import {DinoSegmentType, ReactNodeProps} from "@/lib/types/core";
import LandingDinoSegmentImage from "@/app/(landing)/dino/segment/image";
import LandingDinoSegmentTitle from "@/app/(landing)/dino/segment/title";
import cn from "clsx";

export type LandingDinoSegmentProps = {
    segment: DinoSegmentType;
} & ReactNodeProps

export default function LandingDinoSegment({className, segment}: LandingDinoSegmentProps) {
    return (
        <LandingDinoSegmentContainer className={className}>
            <LandingDinoSegmentImage key="image" segment={segment} />
            <LandingDinoSegmentTitle key="title" segment={segment} />
        </LandingDinoSegmentContainer>
    );
}

function LandingDinoSegmentContainer({className, children}: ReactNodeProps) {
    return (
        <div className="w-full">
            <div className={cn("flex flex-col justify-center items-center gap-[1rem] h-full w-fit", className)}>
                {children}
            </div>
        </div>
    );
}
