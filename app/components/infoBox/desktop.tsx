"use client"

import Text from "@/components/text/text";
import {useRef, useState} from "react";
import {useOutsideClickHandler} from "@/lib/utils";
import {PortableText} from "next-sanity";
import {useInfoBoxContext} from "@/lib/stores/infoBox/context";
import {useShallow} from "zustand/react/shallow";
import {useWindowScroll} from "@uidotdev/usehooks";

export default function InfoBoxDesktop() {
    const [height, setHeight] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null);
    const [{ y }, _] = useWindowScroll();

    const {
        closeInfoBox,
        toggleRef,
        infoBoxText,
    } = useInfoBoxContext(useShallow((s) => ({
        closeInfoBox: s.closeInfoBox,
        toggleRef: s.toggleRef,
        infoBoxText: s.infoBoxText,
    })));

    useOutsideClickHandler([ref, toggleRef], () => closeInfoBox())

    return (
        <div ref={ref} className="hidden ss:flex absolute z-30 left-0 items-center justify-center"
             style={{
                 top: `calc(${toggleRef?.current.getBoundingClientRect().y}px + ${y}px - ${height}px)`,
                 left: `calc(${toggleRef?.current.getBoundingClientRect().x}px + 22px)`,
             }}
        >
            <div ref={(el) => setHeight(el?.clientHeight ?? 0)}
                 className="bg-blue-200 text-blue-600 px-[10px] py-[12px] w-[300px] rounded-[12px]">
                <Text className="flex-col gap-y-[8px]" size="xs">
                    <PortableText value={infoBoxText}/>
                </Text>
            </div>
        </div>
    );
}