"use client"

import {useShallow} from "zustand/react/shallow";
import Image from "next/image";
import {getImageUrlBuilder} from "@/lib/sanity/image";
import Title from "@/components/title";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useAppContext} from "@/lib/stores/app/context";
import CircledArrowIcon from "@/components/icons/circledArrow";

export default function ServiceSegmentsCarousel() {
  const screenSizes = useScreenSizes()
  const {
    selectedServiceSegmentIndex,
    serviceSegments,
    selectPrevServiceSegment,
    selectNextServiceSegment,
    windowSize,
  } = useAppContext(useShallow((s) => ({
    selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
    serviceSegments: s.serviceSegments,
    selectPrevServiceSegment: s.selectPrevServiceSegment,
    selectNextServiceSegment: s.selectNextServiceSegment,
    windowSize: s.windowSize
  })))

  if (screenSizes && !screenSizes.isXs) return null;
  const selectedServiceSegment = serviceSegments[typeof selectedServiceSegmentIndex === 'number' ? selectedServiceSegmentIndex : 0];

  return (
    <div className="flex ss:hidden flex-col gap-y-y-xs">
      <div className="w-full flex items-center justify-center mt-y-s gap-[1.5rem]" key="illustration">
        <div className="cursor-pointer"
             onClick={selectPrevServiceSegment}>
          <CircledArrowIcon className="rotate-90"
                            size={(windowSize.width ?? 0) >= 470 ? 30 : 27}
          />
        </div>

        <Image className="w-[calc(100%-2*27px-2*1.5rem)] xs:w-[calc(100%-2*30px-2*1.5rem)] max-w-[250px] h-auto"
               src={getImageUrlBuilder(selectedServiceSegment.illustration)?.url()}
               alt={selectedServiceSegment.name}
               width={selectedServiceSegment.illustration.width}
               height={selectedServiceSegment.illustration.height} />

        <div className="cursor-pointer"
             onClick={selectNextServiceSegment}>
          <CircledArrowIcon className="-rotate-90"
                            size={(windowSize.width ?? 0) >= 470 ? 30 : 27}
          />
        </div>
      </div>

      <Title key="title" size="md">
        {selectedServiceSegment.dinoPrefix}-Dino
      </Title>
    </div>
  );
}