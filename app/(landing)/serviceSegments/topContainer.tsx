"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import useServiceSegmentsStore from "@/lib/stores/useServiceSegmentsStore";

export default function LandingServiceSegmentsTopContainer({children}: ReactNodeProps) {
    const { selectedServiceSegment } = useServiceSegmentsStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <div className={cn("relative z-10 bg-orange-200 rounded-bl-md rounded-tr-md transition-[box-shadow] px-x-s py-y-sm", selectedServiceSegment ? 'shadow-[0px_6px_10px_-10px_black]' : 'shadow-[0px_0px_0px_0px_black]')}>
            {children}
        </div>
    );
}
