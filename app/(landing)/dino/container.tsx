"use client"
import {ReactNodeProps} from "@/lib/types/core";
import useDinoCardStore from "@/lib/stores/useDinoCardStore";
import {useShallow} from "zustand/react/shallow";
import cn from "clsx";

export default function LandingDinoContainer({children}: ReactNodeProps) {
    const { selectedSegment } = useDinoCardStore(
        useShallow((state) => ({
            selectedSegment: state.selectedSegment,
        })),
    );

    // todo
    return (
        <div className={cn("bg-yellow-100 flex flex-col items-center transition-[margin] mt-y-m", selectedSegment ? 'mb-[calc(416px-var(--dino-bottom-offset)+var(--spacing-y-m))]' : 'mb-y-m')}>
            <div className="w-sm max-w-sm relative z-10">{children}</div>
        </div>
    );
}
