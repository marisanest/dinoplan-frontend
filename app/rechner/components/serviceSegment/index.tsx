import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import CalculatorServiceSegmentTitle from "@/rechner/components/serviceSegment/title";
import CalculatorServiceSegmentImage from "@/rechner/components/serviceSegment/image";
import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";

export type CalculatorServiceSegmentProps = {
    serviceSegment: any;
} & ReactNodeProps

export default function CalculatorServiceSegment({className, serviceSegment}: CalculatorServiceSegmentProps) {
    return (
        <CalculatorServiceSegmentContainer className={className} serviceSegment={serviceSegment}>
            <CalculatorServiceSegmentImage key="image" serviceSegment={serviceSegment} />
            <CalculatorServiceSegmentTitle key="title" serviceSegment={serviceSegment} />
        </CalculatorServiceSegmentContainer>
    );
}

function CalculatorServiceSegmentContainer({className, children, serviceSegment}: ReactNodeProps & {serviceSegment: any}) {
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
