"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";

export default function ServiceSegmentsContainer({className, children}: ReactNodeProps) {
    const showServiceSegmentDetails = useServiceSegmentsContext(useShallow((s) => s.showServiceSegmentDetails));

    return (
        <div className="relative z-10 w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className="w-full max-w-sm bg-yellow-100 rounded-bl-md">
                <div className={cn(
                    "w-full max-w-sm px-x-s py-y-sm bg-orange-200 rounded-tr-md shadow-[0px_0px_0px_0px_black] transition-[border-radius] duration-1000 flex flex-col items-center",
                    showServiceSegmentDetails ? "rounded-bl-md !shadow-[0px_6px_10px_-10px_black]" : 'shadow-[0px_0px_0px_0px_black]',
                    className
                )}>
                    {children}
                </div>
            </div>
        </div>
    );
}
