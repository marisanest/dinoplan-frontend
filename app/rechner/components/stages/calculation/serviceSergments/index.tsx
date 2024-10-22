import Title from "@/components/title";
import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";
import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import CalculatorStageCalculationServiceSegment
    from "@/rechner/components/stages/calculation/serviceSergments/serviceSegment";

export default function CalculatorStageCalculationServiceSegments({serviceSegments}) {
    return (
        <CalculatorStageCalculationServiceSegmentsContainer>
            <Title>Wähle deine Bausteine</Title>
            <Text className="mb-y-xs mt-[0.5rem]" size="sm">
                Du kannst mehrere Optionen wählen, die in dein Paket einfließen sollen.
            </Text>
            <div className="w-full grid grid-cols-3 justify-between gap-[4rem] mt-y-s">
                {serviceSegments?.map((serviceSegment, index) => (
                    <CalculatorStageCalculationServiceSegment
                        key={serviceSegment.serviceSegment._id}
                        className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                        serviceSegment={serviceSegment.serviceSegment}/>
                ))}
            </div>
        </CalculatorStageCalculationServiceSegmentsContainer>
    );
}

function CalculatorStageCalculationServiceSegmentsContainer({children}: ReactNodeProps) {
    const { selectedServiceSegment } = useCalculatorStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <div className={cn("bg-orange-300", selectedServiceSegment ? "pb-y-sm" : "")}>
            <div className={cn("bg-orange-200 rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm", selectedServiceSegment ? "rounded-bl-[50px] shadow-[0px_6px_10px_-10px_black]" : "shadow-[0px_0px_0px_0px_black]")}>
                {children}
            </div>
        </div>
    );
}
