"use client"
import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import {useShallow} from "zustand/react/shallow";
import CheckmarkDot from "@/app/components/checkmarkDot";
import useServiceSegmentsStore from "@/lib/stores/useServiceSegmentsStore";
import {PortableText} from "next-sanity";
import Title from "@/components/title";
import Text from "@/components/text/text";

const segmentNameToCheckmarkDotColor = {
    'Geldanlage': 'bg-orange',
    'Ernstfallabsicherung': 'bg-blue',
    'Zusatzversicherungen': 'bg-red-200',
}

export default function LandingServiceSegmentDetail() {
    const { selectedServiceSegment } = useServiceSegmentsStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <LandingServiceSegmentDetailContainer>
            <div>
                <Title key="title" size="lg" align="left">
                    {selectedServiceSegment && `${selectedServiceSegment?.dinoPrefix}-Dino`}
                </Title>
                <Title key="title" size="xs" align="left">
                    {selectedServiceSegment?.name}
                </Title>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-[2rem] sm:gap-[6rem]">
                <div className="flex justify-start items-center w-full">
                    <Text size="md" align="left" className="gap-[1rem]" isFlexCol>
                        <PortableText value={selectedServiceSegment?.description} />
                    </Text>
                </div>
                <div className="flex flex-col gap-[1rem] w-full">
                    {selectedServiceSegment?.serviceModules?.map((serviceModule) => (
                        <div key={serviceModule.serviceModule?._id} className="flex items-center gap-[1rem] w-full">
                            <CheckmarkDot backgroundColor={segmentNameToCheckmarkDotColor[selectedServiceSegment.name]} />
                            <div className="text-blue-600 break-words w-full">{serviceModule.serviceModule.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </LandingServiceSegmentDetailContainer>
    );
}

function LandingServiceSegmentDetailContainer({children}: ReactNodeProps) {
    const {selectedServiceSegment} = useServiceSegmentsStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <div className={cn("rounded-bl-md rounded-tr-md absolute z-1 bg-orange-400 left-0 right-0 pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-sm))] pb-y-sm transition-[top] w-full flex justify-center", selectedServiceSegment ? 'top-[calc(100%-var(--dino-bottom-offset))]' : 'top-0')}>
            <div className="w-[calc(100%-calc(2*var(--spacing-x-s)))] flex flex-col gap-[1rem]">
                {children}
            </div>
        </div>
    );
}
