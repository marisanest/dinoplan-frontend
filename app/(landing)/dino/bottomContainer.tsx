"use client"

import {ReactNodeProps} from "@/lib/types/core";
import useDinoCardStore from "@/lib/stores/useDinoCardStore";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";

export default function LandingDinoBottomContainer({children}: ReactNodeProps) {
    const { selectedSegment } = useDinoCardStore(
        useShallow((state) => ({
            selectedSegment: state.selectedSegment,
        })),
    );

    return (
        <div className={cn("rounded-bl-[50px] rounded-tr-[50px] bg-orange-400 flex justify-center transition-[]", selectedSegment ? '' : '')}>
            {children}
        </div>
    );
}
