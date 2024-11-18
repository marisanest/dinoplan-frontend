"use client"

import { useShallow } from "zustand/react/shallow";
import {useState} from "react";
import {ReactNodeProps} from "@/lib/types/core";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";

export default function ServiceSegmentsDetails({children}: ReactNodeProps) {
    const showServiceSegmentDetails = useServiceSegmentsContext(useShallow((s) => s.showServiceSegmentDetails));
    const [height, setHeight] = useState<number>(0)

    return (
        <>
            <div ref={el => setHeight(el?.clientHeight ?? 0)} className="absolute z-1 left-0 right-0">
                {children}
            </div>
            <div key="details-placeholder" className="transition-[height] duration-1000" style={{height: showServiceSegmentDetails ? `calc(${height}px - var(--dino-bottom-offset))` : 0}}/>
        </>
    );
}