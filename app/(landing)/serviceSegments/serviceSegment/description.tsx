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

export default function LandingServiceSegmentsDescription() {
    const { selectedServiceSegment } = useServiceSegmentsStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <LandingServiceSegmentsDescriptionContainer>
            <Title size="lg" align="left">
                {selectedServiceSegment?.name}
            </Title>
            <div className="grid grid-cols-2 gap-sm">
                <div className="justify-start items-center w-full">
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
        </LandingServiceSegmentsDescriptionContainer>
    );
}

function LandingServiceSegmentsDescriptionContainer({
                                                    children
                                                }: ReactNodeProps) {
    const {selectedServiceSegment} = useServiceSegmentsStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <div
            className={cn("rounded-bl-[50px] rounded-tr-[50px] absolute z-1 bg-orange-400 left-0 right-0 pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-sm))] pb-y-sm transition-[top] w-full flex justify-center ", selectedServiceSegment ? 'top-[calc(100%-var(--dino-bottom-offset))]' : 'top-0')}>
            <div className="w-[calc(100%-calc(2*var(--spacing-x-sm)))] max-w-[calc(var(--max-w-sm)-calc(2*var(--spacing-x-sm)))] flex flex-col gap-[1rem]">{children}</div>
        </div>
    );
}
