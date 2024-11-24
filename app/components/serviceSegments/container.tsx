"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";

export default function ServiceSegmentsContainer({children}: ReactNodeProps) {
    const showServiceSegmentDetails = useServiceSegmentsContext(useShallow((s) => s.showServiceSegmentDetails));

    return (
        <div className="relative z-10 w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className={cn(
                "w-full max-w-sm px-x-s s:px-x-sm py-y-sm bg-orange-200 rounded-tr-md shadow-[0px_0px_0px_0px_black] transition-[border-radius] duration-1000",
                showServiceSegmentDetails ? "rounded-bl-md !shadow-[0px_6px_10px_-10px_black]" : 'shadow-[0px_0px_0px_0px_black]'
            )}>
                {children}
            </div>
        </div>
    );
}