"use client"

import {ReactNodeProps} from "@/lib/types/core";
import useDinoCardStore from "@/lib/stores/useDinoCardStore";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";

export default function LandingDinoTopContainer({children}: ReactNodeProps) {
    const { selectedSegment } = useDinoCardStore(
        useShallow((state) => ({
            selectedSegment: state.selectedSegment,
        })),
    );

    return (
        <div className={cn("relative z-10 bg-orange-200 rounded-bl-[50px] rounded-tr-[50px] transition-[box-shadow] px-x-sm py-y-sm", selectedSegment ? 'shadow-[0px_6px_10px_-10px_black]' : 'shadow-[0px_0px_0px_0px_black]')}>
            {children}
        </div>
    );
}
