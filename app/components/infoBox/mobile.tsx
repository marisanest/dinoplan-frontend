"use client"

import Text from "@/components/text/text";
import {useEffect, useRef} from "react";
import CrossIcon from "@/components/icons/cross";
import {useOutsideClickHandler} from "@/lib/utils";
import {PortableText} from "next-sanity";
import {useInfoBoxContext} from "@/lib/stores/infoBox/context";
import {useShallow} from "zustand/react/shallow";

export default function InfoBoxMobile() {
    const ref = useRef<HTMLDivElement>(null);

    const {
        closeInfoBox,
        infoBoxText,
    } = useInfoBoxContext(useShallow((s) => ({
        closeInfoBox: s.closeInfoBox,
        infoBoxText: s.infoBoxText,
    })));

    useOutsideClickHandler([ref], () => closeInfoBox())

    useEffect(() => {
        document.body.style.backgroundColor = 'var(--status-background)'
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.backgroundColor = 'var(--background)'
            document.body.style.overflow = 'unset';
        }
    }, []);

    return (
        <div className="fixed ss:hidden z-50 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50">
            <div className="w-full h-full flex items-center justify-center px-x-outer">
                <div ref={ref} className="flex flex-col gap-y-[8px] bg-blue-200 text-blue-600 px-[12px] py-[14px] w-[calc(100dvw-2*10px)] rounded-[12px]">
                    <div className="w-full flex justify-between items-center">
                        <div>
                            <Text size="lg">
                                Information
                            </Text>
                        </div>
                        <div className="border-[2px] border-blue-600 rounded-full p-[4px] cursor-pointer"
                             onClick={closeInfoBox}>
                            <CrossIcon/>
                        </div>
                    </div>
                    <Text className="gap-2" size="xs" align={'left'} isFlexCol={true}>
                        <PortableText value={infoBoxText}/>
                    </Text>
                </div>
            </div>
        </div>
    );
}