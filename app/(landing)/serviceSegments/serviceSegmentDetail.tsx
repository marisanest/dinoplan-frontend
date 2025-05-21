"use client"

import cn from "clsx";
import {useShallow} from "zustand/react/shallow";
import CheckmarkDot from "@/app/components/checkmarkDot";
import {PortableText} from "next-sanity";
import Title from "@/components/title";
import Text from "@/components/text/text";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import {useAppContext} from "@/lib/stores/app/context";

const checkmarkDotColors: string[] = [
    'bg-orange border-orange',
    'bg-blue border-blue',
    'bg-red-200 border-red-200',
]

export default function LandingServiceSegmentDetail() {
    const screenSizes = useScreenSizes()

    const {selectedServiceSegmentIndex, prevSelectedServiceSegmentIndex, serviceSegments} = useAppContext(useShallow((s) => ({
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        prevSelectedServiceSegmentIndex: s.prevSelectedServiceSegmentIndex,
        serviceSegments: s.serviceSegments,
    })))

    let serviceSegmentIndex = typeof selectedServiceSegmentIndex === 'number' ? selectedServiceSegmentIndex : undefined
    if (!(typeof serviceSegmentIndex === 'number')) serviceSegmentIndex = typeof prevSelectedServiceSegmentIndex === 'number' ? prevSelectedServiceSegmentIndex : 0

    const selectedServiceSegment = serviceSegments[serviceSegmentIndex];
    const checkmarkDotBackgroundColor = checkmarkDotColors[serviceSegmentIndex]

    return (
        <div className="w-full flex justify-center px-x-s xs:px-x-sm sm:px-0">
            <div className={cn(
                "w-full sm:w-sm max-w-sm flex justify-center px-x-s xs:px-x-sm pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-s))] pb-y-s rounded-bl-md bg-orange-400 transition-[transform] duration-1000 pointer-events-auto",
                typeof selectedServiceSegmentIndex === 'number' || screenSizes?.isXs ? 'translate-y-[calc(-1*var(--dino-bottom-offset))]' : 'translate-y-[-100%] rounded-tr-md'
            )}>
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-[32px] gap-y-[16px]">
                  <div className="w-full flex flex-col justify-start items-start gap-y-[16px]">
                    <div>
                      <Title key="title" className="!text-[32px]" size="lg" align="left">
                        {selectedServiceSegment && `${selectedServiceSegment?.dinoPrefix}-Dino`}
                      </Title>
                      <Text key="title" size="xl" align="left">
                        {selectedServiceSegment?.dinoSubtitle}
                      </Text>
                    </div>
                    <Text size="md" align="left" className="gap-y-[16px]" isFlexCol>
                      <PortableText value={selectedServiceSegment?.description}/>
                    </Text>
                  </div>

                  <div className="w-full flex sm:justify-center">
                    <div className="flex flex-col justify-center gap-y-[16px]">
                      {selectedServiceSegment?.serviceModules?.map((serviceModule: any) => (
                        <div key={serviceModule.serviceModule?._id}
                             className="flex items-center gap-x-[16px]">
                          <CheckmarkDot className={checkmarkDotBackgroundColor}/>
                          <Text className="break-words"
                                align="left">{serviceModule.serviceModule.name}</Text>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
            </div>
        </div>
    );
}