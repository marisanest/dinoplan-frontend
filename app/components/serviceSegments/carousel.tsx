"use client"

import {useShallow} from "zustand/react/shallow";
import Image from "next/image";
import {getImageUrlBuilder} from "@/lib/sanity/image";
import Title from "@/components/title";
import ArrowIcon from "@/components/icons/arrow";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useAppContext} from "@/lib/stores/app/context";

export default function ServiceSegmentsCarousel() {
    const screenSizes = useScreenSizes()
    const {selectedServiceSegmentIndex, serviceSegments, selectPrevServiceSegment, selectNextServiceSegment} = useAppContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        serviceSegments: s.serviceSegments,
        selectPrevServiceSegment: s.selectPrevServiceSegment,
        selectNextServiceSegment: s.selectNextServiceSegment,
    })))

    if (screenSizes && !screenSizes.isXs) return null;
    const selectedServiceSegment = serviceSegments[typeof selectedServiceSegmentIndex === 'number' ? selectedServiceSegmentIndex : 0];

    return (
        <div className="flex ss:hidden flex-col gap-y-y-xs">
            <div className="w-full flex items-center justify-center mt-y-s gap-[1.5rem]" key="illustration">
                <div className="min-w-[27px] w-[27px] min-h-[27px] h-[27px] xs:min-w-[30px] xs:w-[30px] xs:min-h-[30px] xs:h-[30px] flex justify-center items-center rounded-full bg-red-200 cursor-pointer"
                     onClick={selectPrevServiceSegment}>
                    <ArrowIcon className="rotate-90" scale={0.8} />
                </div>

                <Image className="w-[calc(100%-2*27px-2*1.5rem)] xs:w-[calc(100%-2*30px-2*1.5rem)] max-w-[250px] h-auto"
                       src={getImageUrlBuilder(selectedServiceSegment.illustration)?.url()}
                       alt={selectedServiceSegment.name}
                       width={selectedServiceSegment.illustration.width}
                       height={selectedServiceSegment.illustration.height} />

                <div className="min-w-[27px] w-[27px] min-h-[27px] h-[27px] xs:min-w-[30px] xs:w-[30px] xs:min-h-[30px] xs:h-[30px] flex justify-center items-center rounded-full bg-red-200 cursor-pointer"
                     onClick={selectNextServiceSegment}>
                    <ArrowIcon className="-rotate-90" scale={0.8}/>
                </div>
            </div>

            <Title key="title" size="md">
                {selectedServiceSegment.dinoPrefix}-Dino
            </Title>
        </div>
    );
}