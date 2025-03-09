"use client"

import {useEffect, useRef} from "react";
import {useWindowSize} from "@uidotdev/usehooks";
import {RESPONSIVE_SIZE_BREAKPOINT_SS} from "@/lib/utils";
import InfoIcon from "@/components/icons/info";
import {useShallow} from "zustand/react/shallow";
import {useInfoBoxContext} from "@/lib/stores/infoBox/context";

export default function InfoBoxToggle({text}: {text?: any | null}) {
    const {width} = useWindowSize()
    const ref = useRef<HTMLDivElement>(null);

    const {
        toggleInfoBoxIsOpen,
        setToggleRef,
        setInfoBoxText,
        closeInfoBox,
        openInfoBox,
    } = useInfoBoxContext(useShallow((s) => ({
        toggleInfoBoxIsOpen: s.toggleInfoBoxIsOpen,
        setToggleRef: s.setToggleRef,
        setInfoBoxText: s.setInfoBoxText,
        closeInfoBox: s.closeInfoBox,
        openInfoBox: s.openInfoBox,
    })));

    useEffect(() => {
        setToggleRef(ref)
    }, [ref])

    return (
        <div ref={ref} className="cursor-pointer px-[4px] pb-[4px]"
             onClick={() => {
                 toggleInfoBoxIsOpen()
                 setInfoBoxText(text)
             }}
            onMouseEnter={() => {
                if (width && width > RESPONSIVE_SIZE_BREAKPOINT_SS) {
                    openInfoBox()
                    setInfoBoxText(text)
                }
            }}
            onMouseLeave={() => {
                if (width && width > RESPONSIVE_SIZE_BREAKPOINT_SS) {
                    closeInfoBox()
                    setInfoBoxText(text)
                }
            }}
        >
            <InfoIcon/>
        </div>
    );
}