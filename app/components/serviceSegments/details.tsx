"use client"

import { useShallow } from "zustand/react/shallow";
import {useState} from "react";
import {ReactNodeProps} from "@/lib/types/core";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";

export default function ServiceSegmentsDetails({children}: ReactNodeProps) {
    const {selectedServiceSegmentIndex, showServiceSegmentDetails} = useServiceSegmentsContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        showServiceSegmentDetails: s.showServiceSegmentDetails,
    })))

    const [height, setHeight] = useState<number>(0)

    return (
        <>
            <div ref={el => setHeight(el?.clientHeight ?? 0)} className="absolute z-1 left-0 right-0 pointer-events-none">
                {children}
            </div>
            <div key="details-placeholder" className="transition-[height] duration-1000 flex justify-center px-x-s xs:px-x-sm sm:px-0" style={{height: showServiceSegmentDetails ? `calc(${height}px - var(--dino-bottom-offset))` : 0}}>
                <div className="bg-orange-200 w-full max-w-sm h-full"/>
            </div>
        </>
    );
}