"use client"
import {LandingServiceSegmentProps} from "@/app/(landing)/serviceSegments/serviceSegment";
import {useShallow} from "zustand/react/shallow";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";
import useServiceSegmentsStore from "@/lib/stores/useServiceSegmentsStore";

export default function LandingServiceSegmentImage({serviceSegment}: LandingServiceSegmentProps) {
    const { selectServiceSegment } = useServiceSegmentsStore(
        useShallow((state) => ({
            selectServiceSegment: state.selectServiceSegment,
        })),
    );

    return (
        <div className="cursor-pointer" onClick={() => selectServiceSegment(serviceSegment)}>
            <Image
                src={urlFor(serviceSegment.dinoIllustration)?.url()}
                alt={serviceSegment.name}
                className="w-full max-w-[250px]"
                height="310"
                width="250"
            />
        </div>
    );
}
