import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import {useShallow} from "zustand/react/shallow";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";
import Text from "@/components/text/text";

export type CalculatorServiceSegmentProps = {
    serviceSegment: any;
    index: number;
} & ReactNodeProps

export default function ServiceSegment({className, index, serviceSegment}: CalculatorServiceSegmentProps) {
    return (
        <ServiceSegmentContainer className={className} index={index}>
            <Image key="image"
                   className="w-full h-auto s:w-[194px] s:h-[194px]"
                   src={urlFor(serviceSegment.illustration)?.url()}
                   alt="Illustration"
                   width={serviceSegment.illustration.width}
                   height={serviceSegment.illustration.height}
            />
            <Text>{serviceSegment.dinoPrefix}-Dino</Text>
        </ServiceSegmentContainer>
    );
}

function ServiceSegmentContainer({className, children, index}: ReactNodeProps & {index: number}) {
    const selectServiceSegment = useServiceSegmentsContext(useShallow((s) => s.selectServiceSegment))

    return (
        <div className="w-full cursor-pointer" onClick={() => selectServiceSegment(index)}>
            <div className={cn("flex flex-col justify-center items-center gap-[1rem] h-full w-fit", className)}>
                {children}
            </div>
        </div>
    );
}
