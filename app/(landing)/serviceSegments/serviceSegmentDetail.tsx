"use client"

import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import {useShallow} from "zustand/react/shallow";
import CheckmarkDot from "@/app/components/checkmarkDot";
import {PortableText} from "next-sanity";
import Title from "@/components/title";
import Text from "@/components/text/text";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";
import useScreenSizes from "@/lib/hooks/useScreenSizes";

const segmentNameToCheckmarkDotColor: {[key: string]: string} = {
    'Geldanlage': 'bg-orange border-orange',
    'Ernstfallabsicherung': 'bg-blue border-blue',
    'Zusatzversicherungen': 'bg-red-200 border-red-200',
}

export default function LandingServiceSegmentDetail() {
    const {selectedServiceSegmentIndex, prevSelectedServiceSegmentIndex, serviceSegments} = useServiceSegmentsContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        prevSelectedServiceSegmentIndex: s.prevSelectedServiceSegmentIndex,
        serviceSegments: s.serviceSegments,
    })))

    let serviceSegmentIndex = typeof selectedServiceSegmentIndex === 'number' ? selectedServiceSegmentIndex : undefined
    if (!(typeof serviceSegmentIndex === 'number')) serviceSegmentIndex = typeof prevSelectedServiceSegmentIndex === 'number' ? prevSelectedServiceSegmentIndex : 0

    const selectedServiceSegment = serviceSegments[serviceSegmentIndex];
    const checkmarkDotBackgroundColor = selectedServiceSegment.name in segmentNameToCheckmarkDotColor ? segmentNameToCheckmarkDotColor[selectedServiceSegment.name] : 'bg-orange'

    return (
        <LandingServiceSegmentDetailContainer>
            <div>
                <Title key="title" className="!text-[2rem]" size="lg" align="left">
                    {selectedServiceSegment && `${selectedServiceSegment?.dinoPrefix}-Dino`}
                </Title>
                <Text key="title" size="xl" align="left">
                    {selectedServiceSegment?.name}
                </Text>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-[2rem] sm:gap-[6rem]">
                <div className="flex justify-start items-center w-full">
                    <Text size="md" align="left" className="gap-[1rem]" isFlexCol>
                        <PortableText value={selectedServiceSegment?.description} />
                    </Text>
                </div>
                <div className="flex flex-col gap-[1rem] w-full">
                    {selectedServiceSegment?.serviceModules?.map((serviceModule: any) => (
                        <div key={serviceModule.serviceModule?._id} className="flex items-center gap-[1rem] w-full">
                            <CheckmarkDot className={checkmarkDotBackgroundColor} />
                            <Text className="break-words w-full" align="left">{serviceModule.serviceModule.name}</Text>
                        </div>
                    ))}
                </div>
            </div>
        </LandingServiceSegmentDetailContainer>
    );
}

function LandingServiceSegmentDetailContainer({children}: ReactNodeProps) {
    const screenSizes = useScreenSizes()
    const {selectedServiceSegmentIndex} = useServiceSegmentsContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
    })))

    return (
        <div className="w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className={cn(
                "w-full sm:w-sm sm:max-w-sm flex justify-center px-x-s xs:px-x-sm pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-s))] pb-y-s rounded-bl-md bg-orange-400 transition-[transform] duration-1000 pointer-events-auto",
                typeof selectedServiceSegmentIndex === 'number' || screenSizes?.isXs ? 'translate-y-[calc(-1*var(--dino-bottom-offset))]' : 'translate-y-[-100%] rounded-tr-md'
            )}>
                <div className="w-fit flex flex-col gap-[0.75rem]">
                    {children}
                </div>
            </div>
        </div>
    );
}
