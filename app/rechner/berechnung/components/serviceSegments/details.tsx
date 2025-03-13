"use client"

import { useShallow } from "zustand/react/shallow";
import {useState} from "react";
import {ReactNodeProps} from "@/lib/types/core";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useCalculatorContext} from "@/lib/stores/calculator/context";

export default function CalculatorCalculationServiceSegmentsDetails({children}: ReactNodeProps & {bgColor?: string}) {
    const screenSizes = useScreenSizes()

    const {
        selectedServiceSegmentIndex
    } = useCalculatorContext(
        useShallow((s) => ({
            selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        }))
    )

    const [height, setHeight] = useState<number>(0)

    return (
        <>
            <div key="details" ref={el => setHeight(el?.clientHeight ?? 0)} className="absolute z-1 left-0 right-0 pointer-events-none">
                {children}
            </div>
            <div key="details-placeholder" className="transition-[height] duration-1000 flex justify-center px-x-outer" style={{height: typeof selectedServiceSegmentIndex === 'number' || screenSizes?.isXs ? `calc(${height}px - var(--dino-bottom-offset))` : 0}}>
                <div className="w-full max-w-sm h-full" />
            </div>
        </>
    );
}