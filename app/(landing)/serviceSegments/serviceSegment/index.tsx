import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import LandingServiceSegmentContainer from "@/(landing)/serviceSegments/serviceSegment/container";
import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";

export type LandingServiceSegmentProps = {
    serviceSegment: any;
} & ReactNodeProps

export default function LandingServiceSegment({className, serviceSegment}: LandingServiceSegmentProps) {
    return (
        <LandingServiceSegmentContainer className={className} serviceSegment={serviceSegment}>
            <Image className="w-full max-w-[250px]"
                   src={urlFor(serviceSegment.illustration)?.url()}
                   alt={serviceSegment.name}
                   width={serviceSegment.illustration.width}
                   height={serviceSegment.illustration.height} />
            <Title key="title" className="cursor-pointer mt-auto" size="md">
                {serviceSegment.dinoPrefix}-Dino
            </Title>
        </LandingServiceSegmentContainer>
    );
}
