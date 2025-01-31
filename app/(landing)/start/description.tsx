"use client"

import {PortableText} from "next-sanity";
import CheckmarkDot from "@/components/checkmarkDot";
import Text from "@/components/text/text";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingStartDescription() {
    const {startPageSection, serviceSegmentsPageSection} = useAppContext(
        useShallow((s) => ({
            startPageSection: s.startPageSection,
            serviceSegmentsPageSection: s.serviceSegmentsPageSection,
        }))
    )

    return (
        <div className="w-full flex justify-center mt-auto">
            <div className="grid grid-cols-[1fr_2px_1fr] gap-[0.6rem] sm:gap-[0.5rem] sm:flex sm:flex-col">
                <Text key="sub-title" className="sm:justify-center sm:text-center" size="lg" align="right">
                    {startPageSection && startPageSection.subTitle && <PortableText value={startPageSection?.subTitle}/>}
                </Text>

                <hr key="line" className="hidden sm:block border border-red-200"/>
                <div className="border-l-[2px] border-red-200 sm:hidden" />
                <div key="key-points" className="flex flex-col justify-center sm:flex-row sm:justify-between gap-[0.25rem] xs:gap-[0.5rem] sm:gap-[1rem]">
                    {serviceSegmentsPageSection?.serviceSegments?.map((serviceSegment) => (
                        <div key={serviceSegment.serviceSegment?._id} className="flex items-center gap-[0.5rem]">
                            <CheckmarkDot key="checkmark" className="bg-none border-blue-600" strokeColor="#294290"/>
                            <Text key="name" className="sm:items-center sm:justify-center sm:text-center" size="lg" align="left">
                                {serviceSegment.serviceSegment?.name}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}