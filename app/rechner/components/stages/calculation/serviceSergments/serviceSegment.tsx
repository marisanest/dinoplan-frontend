import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";

export type CalculatorServiceSegmentProps = {
    serviceSegment: any;
} & ReactNodeProps

export default function CalculatorStageCalculationServiceSegment({className, serviceSegment}: CalculatorServiceSegmentProps) {
    return (
        <CalculatorStageCalculationServiceSegmentContainer className={className} serviceSegment={serviceSegment}>
            <Image
                key="image"
                className="w-full max-w-[250px]"
                src={urlFor(serviceSegment.illustration)?.url()}
                alt="Illustration"
                width={serviceSegment.illustration.width}
                height={serviceSegment.illustration.height}
            />
            <div className="cursor-pointer mt-auto text-blue-600">
                {serviceSegment.dinoPrefix}-Dino
            </div>
        </CalculatorStageCalculationServiceSegmentContainer>
    );
}

function CalculatorStageCalculationServiceSegmentContainer({className, children, serviceSegment}: ReactNodeProps & {serviceSegment: any}) {
    const { selectServiceSegment } = useCalculatorStore(
        useShallow((state) => ({
            selectServiceSegment: state.selectServiceSegment,
        })),
    );

    return (
        <div className="w-full" onClick={() => selectServiceSegment(serviceSegment)}>
            <div className={cn("flex flex-col justify-center items-center gap-[1rem] h-full w-fit", className)}>
                {children}
            </div>
        </div>
    );
}
