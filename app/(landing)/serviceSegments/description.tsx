"use client"

import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";
import Text from "@/components/text/text";

export default function LandingServiceSegmentsDescription() {
    const {serviceSegmentsPageSection} = useAppContext(useShallow((s) => ({
        serviceSegmentsPageSection: s.serviceSegmentsPageSection,
    })))

    return (
        <Text className="max-w-text pb-y-[30px] xs:pb-y-s pt-[10px]" size="sm">
            {serviceSegmentsPageSection?.description && <PortableText value={serviceSegmentsPageSection.description}/>}
        </Text>
    );
}
