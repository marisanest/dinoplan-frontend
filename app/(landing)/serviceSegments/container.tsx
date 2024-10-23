"use client"
import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import useServiceSegmentsStore from "@/lib/stores/useServiceSegmentsStore";

export default function LandingServiceSegmentsContainer({children}: ReactNodeProps) {
    const { selectedServiceSegment } = useServiceSegmentsStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    // todo: 466px berechnen
    return (
        <div className={cn("bg-yellow-100 flex flex-col items-center transition-[margin] mt-y-m", selectedServiceSegment ? 'mb-[calc(666px-var(--dino-bottom-offset)+var(--spacing-y-m))]' : 'mb-y-m')}>
            <div className="relative z-10 w-[calc(100dvw-calc(2*var(--spacing-x-outer)))] sm:w-sm sm:max-w-sm">{children}</div>
        </div>
    );
}
