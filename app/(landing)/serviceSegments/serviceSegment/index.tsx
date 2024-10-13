import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import LandingServiceSegmentImage from "@/app/(landing)/serviceSegments/serviceSegment/image";
import LandingServiceSegmentTitle from "@/app/(landing)/serviceSegments/serviceSegment/title";

export type LandingServiceSegmentProps = {
    serviceSegment: any;
} & ReactNodeProps

export default function LandingServiceSegment({className, serviceSegment}: LandingServiceSegmentProps) {
    return (
        <LandingServiceSegmentContainer className={className}>
            <LandingServiceSegmentImage key="image" serviceSegment={serviceSegment} />
            <LandingServiceSegmentTitle key="title" serviceSegment={serviceSegment} />
        </LandingServiceSegmentContainer>
    );
}

function LandingServiceSegmentContainer({className, children}: ReactNodeProps) {
    return (
        <div className="w-full">
            <div className={cn("flex flex-col justify-center items-center gap-[1rem] h-full w-fit", className)}>
                {children}
            </div>
        </div>
    );
}
