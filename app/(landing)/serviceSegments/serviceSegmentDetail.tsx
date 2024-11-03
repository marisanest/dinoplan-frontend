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

export default function LandingServiceSegmentDetail({setHeight}) {
    const screenSizes = useScreenSizes()
    const {isInitial, selectedServiceSegmentIndex, prevSelectedServiceSegmentIndex, serviceSegments} = useServiceSegmentsContext(useShallow((s) => ({
        isInitial: s.isInitial,
        selectedServiceSegmentIndex: s.selectedServiceSegmentIndex,
        prevSelectedServiceSegmentIndex: s.prevSelectedServiceSegmentIndex,
        serviceSegments: s.serviceSegments,
    })))

    // if (!screenSizes || (!screenSizes.isXxs && isInitial) || (!selectedServiceSegmentIndex && selectedServiceSegmentIndex !== 0)) return null;
    const selectedServiceSegment = serviceSegments[(selectedServiceSegmentIndex || selectedServiceSegmentIndex === 0 ? selectedServiceSegmentIndex : prevSelectedServiceSegmentIndex )];

    const checkmarkDotBackgroundColor = selectedServiceSegment.name in segmentNameToCheckmarkDotColor ? segmentNameToCheckmarkDotColor[selectedServiceSegment.name] : 'bg-orange'

    return (
        <LandingServiceSegmentDetailContainer setHeight={setHeight}>
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
                    {selectedServiceSegment?.serviceModules?.map((serviceModule: any) => (
                        <div key={serviceModule.serviceModule?._id} className="flex items-center gap-[1rem] w-full">
                            <CheckmarkDot className={checkmarkDotBackgroundColor} />
                            <div className="text-blue-600 break-words w-full">{serviceModule.serviceModule.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </LandingServiceSegmentDetailContainer>
    );
}

function LandingServiceSegmentDetailContainer({children, setHeight}) {
    const showServiceSegmentDetails = useServiceSegmentsContext(useShallow((s) => s.showServiceSegmentDetails));

    return (
        <div ref={el => setHeight(el?.clientHeight)} className={cn("rounded-bl-md rounded-tr-md bg-orange-400 pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-sm))] pb-y-sm transition-transform duration-[1s] translate-y-[0px] w-full flex justify-center", showServiceSegmentDetails ? 'translate-y-[0px]' : 'translate-y-[-100%]')}>
            <div className="w-[calc(100%-calc(2*var(--spacing-x-s)))] flex flex-col gap-[1rem]">
                {children}
            </div>
        </div>
    );
}
