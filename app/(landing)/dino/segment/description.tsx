"use client"
import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import useDinoCardStore from "@/lib/stores/useDinoCardStore";
import {useShallow} from "zustand/react/shallow";
import CheckmarkDot from "@/app/components/checkmarkDot";

export default function LandingDinoSegmentDescription() {
    const { selectedSegment } = useDinoCardStore(
        useShallow((state) => ({
            selectedSegment: state.selectedSegment,
        })),
    );

    return (
        <LandingDinoSegmentDescriptionContainer>
            <div className="text-blue-600 font-medium text-2xl">{selectedSegment?.title}</div>
            <div className="grid grid-cols-2 gap-sm">
                <div>
                    <div className="text-blue-600 text-sm">
                        {selectedSegment?.description}
                    </div>
                </div>
                <div className="flex flex-col gap-[1rem] w-full">
                    {selectedSegment?.checkmarks.items.map((item) => (
                        <div key={item} className="flex items-center gap-[1rem] w-full">
                            <CheckmarkDot backgroundColor={selectedSegment?.checkmarks.dot.backgroundColor}/>
                            <div className="text-blue-600 break-words w-full">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </LandingDinoSegmentDescriptionContainer>
    );
}

function LandingDinoSegmentDescriptionContainer({
                                                    children
                                                }: ReactNodeProps) {
    const {selectedSegment} = useDinoCardStore(
        useShallow((state) => ({
            selectedSegment: state.selectedSegment,
        })),
    );

    return (
        <div
            className={cn("rounded-bl-[50px] rounded-tr-[50px] absolute z-1 bg-orange-400 left-0 right-0 pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-sm))] pb-y-sm transition-[top] w-full flex justify-center ", selectedSegment ? 'top-[calc(100%-var(--dino-bottom-offset))]' : 'top-0')}>
            <div className="w-[calc(100%-calc(2*var(--spacing-x-sm)))] max-w-[calc(var(--max-w-sm)-calc(2*var(--spacing-x-sm)))] flex flex-col gap-[1rem]">{children}</div>
        </div>
    );
}
