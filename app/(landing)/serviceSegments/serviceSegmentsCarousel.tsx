import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";
import Title from "@/components/title";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";
import ArrowIcon from "@/components/icons/arrow";
import useScreenSizes from "@/lib/hooks/useScreenSizes";

export default function LandingServiceSegmentsCarousel() {
    const screenSizes = useScreenSizes()
    const {selectedServiceSegmentIndex, serviceSegments, selectPrevServiceSegment, selectNextServiceSegment} = useServiceSegmentsContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        serviceSegments: s.serviceSegments,
        selectPrevServiceSegment: s.selectPrevServiceSegment,
        selectNextServiceSegment: s.selectNextServiceSegment,
    })))

    if (!screenSizes || !screenSizes.isXxs) return null;
    if (!selectedServiceSegmentIndex && selectedServiceSegmentIndex !== 0) return null;
    const selectedServiceSegment = serviceSegments[selectedServiceSegmentIndex];

    return (
        <LandingSelectedServiceSegmentContainer>
            <LandingSelectedServiceSegmentInnerContainer key="illustration">
                <div className="cursor-pointer border-red-200 bg-red-200 flex justify-center items-center min-w-[1.75rem] w-[1.75rem] min-h-[1.75rem] h-[1.75rem] rounded-full p-[0.175rem] border-[2px]"
                     onClick={selectPrevServiceSegment}>
                    <ArrowIcon className="rotate-90" scale={0.8} />
                </div>

                <Image className="w-full max-w-[250px] h-auto"
                       src={urlFor(selectedServiceSegment.illustration)?.url()}
                       alt={selectedServiceSegment.name}
                       width={selectedServiceSegment.illustration.width}
                       height={selectedServiceSegment.illustration.height} />

                <div className="cursor-pointer border-red-200 bg-red-200 flex justify-center items-center min-w-[1.75rem] w-[1.75rem] min-h-[1.75rem] h-[1.75rem] rounded-full p-[0.175rem] border-[2px]"
                     onClick={selectNextServiceSegment}>
                    <ArrowIcon className="-rotate-90" scale={0.8}/>
                </div>
            </LandingSelectedServiceSegmentInnerContainer>

            <Title key="title" size="md">
                {selectedServiceSegment.dinoPrefix}-Dino
            </Title>
        </LandingSelectedServiceSegmentContainer>
    );
}

function LandingSelectedServiceSegmentContainer({children}: ReactNodeProps) {
    return (
        <div className="flex flex-col gap-y-y-xs">
            {children}
        </div>
    );
}

function LandingSelectedServiceSegmentInnerContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex items-center justify-center mt-y-s gap-[1.5rem]">
            {children}
        </div>
    );
}
