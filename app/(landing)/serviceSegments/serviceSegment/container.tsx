"use client"
import {LandingServiceSegmentProps} from "@/app/(landing)/serviceSegments/serviceSegment";
import {useShallow} from "zustand/react/shallow";

import useServiceSegmentsStore from "@/lib/stores/useServiceSegmentsStore";
import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export default function LandingServiceSegmentContainer({className, children, serviceSegment}: LandingServiceSegmentProps & ReactNodeProps) {
    const { selectServiceSegment } = useServiceSegmentsStore(
        useShallow((state) => ({
            selectServiceSegment: state.selectServiceSegment,
        })),
    );

    return (
        <div className="w-full">
            <div className={cn("flex flex-col justify-center items-center gap-[1rem] h-full w-fit cursor-pointer", className)}
                 onClick={() => selectServiceSegment(serviceSegment)}>
                {children}
            </div>
        </div>
    );
}
