"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useCalculatorContext} from "@/lib/stores/calculator/context";

export default function CalculatorCalculationServiceSegmentsContainer({children}: ReactNodeProps) {
    const screenSizes = useScreenSizes()
    const selectedServiceSegmentIndex = useCalculatorContext(useShallow((s) => s.selectedServiceSegmentIndex));

    return (
        <div className="relative z-10 w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className="w-full max-w-sm rounded-bl-md bg-orange-400">
                <div className={cn(
                    "w-full max-w-sm px-x-s py-y-sm bg-orange-200 rounded-tr-md shadow-[0px_0px_0px_0px_black] transition-[border-radius] duration-1000 flex flex-col items-center",
                    typeof selectedServiceSegmentIndex === 'number' || screenSizes?.isXs ? "rounded-bl-md !shadow-[0px_6px_10px_-10px_black]" : 'shadow-[0px_0px_0px_0px_black]',
                )}>
                    {children}
                </div>
            </div>
        </div>
    );
}
