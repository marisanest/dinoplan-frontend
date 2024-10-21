import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import LandingServiceSegmentImage from "@/app/(landing)/serviceSegments/serviceSegment/image";
import Title from "@/components/title";

export type LandingServiceSegmentProps = {
    serviceSegment: any;
} & ReactNodeProps

export default function LandingServiceSegment({className, serviceSegment}: LandingServiceSegmentProps) {
    return (
        <LandingServiceSegmentContainer className={className}>
            <LandingServiceSegmentImage key="image" serviceSegment={serviceSegment} />
            <Title key="title" className="cursor-pointer mt-auto" size="md">
                {serviceSegment.dinoPrefix}-Dino
            </Title>
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
