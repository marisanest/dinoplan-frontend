"use client"

import InfoBoxMobile from "@/components/infoBox/mobile";
import InfoBoxDesktop from "@/components/infoBox/desktop";
import {useWindowSize} from "@uidotdev/usehooks";
import {RESPONSIVE_SIZE_BREAKPOINT_SS} from "@/lib/utils";
import {useInfoBoxContext} from "@/lib/stores/infoBox/context";
import {useShallow} from "zustand/react/shallow";

export default function InfoBox() {
    const {width} = useWindowSize()

    const {
        isInfoBoxOpen
    } = useInfoBoxContext(useShallow((s) => ({
        isInfoBoxOpen: s.isInfoBoxOpen
    })));

    return (
        <>
            {width && width >= RESPONSIVE_SIZE_BREAKPOINT_SS && isInfoBoxOpen && <InfoBoxDesktop/>}
            {width && width < RESPONSIVE_SIZE_BREAKPOINT_SS && isInfoBoxOpen && <InfoBoxMobile/>}
        </>
    );
}