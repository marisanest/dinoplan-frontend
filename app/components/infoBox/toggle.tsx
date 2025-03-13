"use client"

import {useRef} from "react";
import InfoIcon from "@/components/icons/info";
import {useShallow} from "zustand/react/shallow";
import {useInfoBoxContext} from "@/lib/stores/infoBox/context";
import {RESPONSIVE_SIZE_BREAKPOINT_SS} from "@/lib/constants/app";

export default function InfoBoxToggle({text}: {text?: any | null}) {
    const ref = useRef<HTMLDivElement>(null);

    const {
        windowSize,
        toggleInfoBoxIsOpen,
        setToggleRef,
        setInfoBoxText,
        closeInfoBox,
        openInfoBox,
    } = useInfoBoxContext(useShallow((s) => ({
        windowSize: s.windowSize,
        toggleInfoBoxIsOpen: s.toggleInfoBoxIsOpen,
        setToggleRef: s.setToggleRef,
        setInfoBoxText: s.setInfoBoxText,
        closeInfoBox: s.closeInfoBox,
        openInfoBox: s.openInfoBox,
    })));

    return (
        <div ref={ref} className="cursor-pointer px-[4px] pb-[4px]"
             onClick={() => {
                 toggleInfoBoxIsOpen()
                 setInfoBoxText(text)
                 setToggleRef(ref)
             }}
            onMouseEnter={() => {
                if (windowSize.width && windowSize.width > RESPONSIVE_SIZE_BREAKPOINT_SS) {
                    openInfoBox()
                    setInfoBoxText(text)
                    setToggleRef(ref)
                }
            }}
            onMouseLeave={() => {
                if (windowSize.width && windowSize.width > RESPONSIVE_SIZE_BREAKPOINT_SS) {
                    closeInfoBox()
                    setInfoBoxText(text)
                    setToggleRef(ref)
                }
            }}
        >
            <InfoIcon/>
        </div>
    );
}