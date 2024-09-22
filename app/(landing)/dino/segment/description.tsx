"use client"
import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import useDinoCardStore from "@/lib/stores/useDinoCardStore";
import {useShallow} from "zustand/react/shallow";

export default function LandingDinoSegmentDescription() {
    const { selectedSegment } = useDinoCardStore(
        useShallow((state) => ({
            selectedSegment: state.selectedSegment,
        })),
    );

    return (
        <LandingDinoSegmentDescriptionContainer>
            <div>
                <div className="text-blue-600 font-medium text-2xl">{selectedSegment?.title}</div>
                <div className="text-blue-600 mt-4 text-sm">
                    {selectedSegment?.description}
                </div>
            </div>
        </LandingDinoSegmentDescriptionContainer>
    );
}

function LandingDinoSegmentDescriptionContainer({children}: ReactNodeProps) {
    const {selectedSegment} = useDinoCardStore(
        useShallow((state) => ({
            selectedSegment: state.selectedSegment,
        })),
    );

    return (
        <div className={cn("rounded-bl-[50px] rounded-tr-[50px] bg-orange-400 transition-[height] duration-2000", selectedSegment ? 'h-[400px]' : 'h-0')}>
            <div className={cn("grid grid-cols-2 px-20 py-10", selectedSegment ? '' : '')}>{children}</div>
        </div>
    );
}
