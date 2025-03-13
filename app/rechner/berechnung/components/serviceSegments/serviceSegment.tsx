import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import {useShallow} from "zustand/react/shallow";
import Image from "next/image";
import {getImageUrlBuilder} from "@/lib/sanity/image";
import Text from "@/components/text/text";
import {useCalculatorContext} from "@/lib/stores/calculator/context";

export type CalculatorServiceSegmentProps = {
    serviceSegment: any;
    index: number;
} & ReactNodeProps

export default function CalculatorCalculationServiceSegment({className, index, serviceSegment}: CalculatorServiceSegmentProps) {
    const selectServiceSegment = useCalculatorContext(useShallow((s) => s.selectServiceSegment))

    console.log("serviceSegment: ", serviceSegment.illustration)

    return (
        <div className="w-full cursor-pointer"
             onClick={() => selectServiceSegment(index)}
        >
            <div className={cn("flex flex-col justify-center items-center gap-[1rem] h-full w-fit", className)}>
                <Image key="image"
                       className="w-full h-auto ss:max-w-[204px] ss:max-h-[204]"
                       src={getImageUrlBuilder(serviceSegment.illustration)?.url()}
                       alt="Illustration"
                       width={serviceSegment.illustration.asset.metadata.dimensions.width}
                       height={serviceSegment.illustration.asset.metadata.dimensions.height}
                />
                <Text>{serviceSegment.dinoPrefix}-Dino</Text>
            </div>
        </div>

    );
}