import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";
import Text from "@/components/text/text";

export type LandingServiceSegmentProps = {
    index: number;
    serviceSegment: any;
} & ReactNodeProps

export default function LandingServiceSegment({className, index, serviceSegment}: LandingServiceSegmentProps) {
    return (
        <LandingServiceSegmentContainer className={className} index={index}>
            <Image className="w-full "
                   src={urlFor(serviceSegment.illustration)?.url()}
                   alt={serviceSegment.name}
                   width={serviceSegment.illustration.width}
                   height={serviceSegment.illustration.height} />
            <Title key="title" className="cursor-pointer mt-auto !text-[1.5rem]" size="md">
                {serviceSegment.dinoPrefix}-Dino
            </Title>
        </LandingServiceSegmentContainer>
    );
}

function LandingServiceSegmentContainer({className, children, index}: Pick<LandingServiceSegmentProps, 'index'> & ReactNodeProps) {
    const selectServiceSegment = useServiceSegmentsContext(useShallow((s) => s.selectServiceSegment))

    return (
        <div className="w-full">
            <div className={cn("flex flex-col justify-center items-center gap-[1rem] h-full w-fit cursor-pointer", className)}
                 onClick={() => selectServiceSegment(index)}>
                {children}
            </div>
        </div>
    );
}
