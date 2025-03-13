"use client"

import InfoBoxMobile from "@/components/infoBox/mobile";
import InfoBoxDesktop from "@/components/infoBox/desktop";
import {useInfoBoxContext} from "@/lib/stores/infoBox/context";
import {useShallow} from "zustand/react/shallow";
import {RESPONSIVE_SIZE_BREAKPOINT_SS} from "@/lib/constants/app";

export default function InfoBox() {
    const {
        windowSize,
        isInfoBoxOpen,
    } = useInfoBoxContext(useShallow((s) => ({
        windowSize: s.windowSize,
        isInfoBoxOpen: s.isInfoBoxOpen,
    })));

    return (
        <>
            {windowSize.width && windowSize.width >= RESPONSIVE_SIZE_BREAKPOINT_SS && isInfoBoxOpen && <InfoBoxDesktop/>}
            {windowSize.width && windowSize.width < RESPONSIVE_SIZE_BREAKPOINT_SS && isInfoBoxOpen && <InfoBoxMobile/>}
        </>
    );
}