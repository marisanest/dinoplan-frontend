import {ReactNodeProps} from "@/lib/types/core";
import {CalculatorServiceSegmentProps} from "@/rechner/components/serviceSegment/index";

export default function CalculatorServiceSegmentTitle({serviceSegment}: CalculatorServiceSegmentProps) {
    return (
        <CalculatorServiceSegmentTitleContainer>
            {serviceSegment.dinoPrefix}-Dino
        </CalculatorServiceSegmentTitleContainer>
    );
}

function CalculatorServiceSegmentTitleContainer({children}: ReactNodeProps) {
    return (
        <div className="cursor-pointer mt-auto text-blue-600">
            {children}
        </div>
    );
}
