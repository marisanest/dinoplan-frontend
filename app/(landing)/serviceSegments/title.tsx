"use client"

import Title from "@/components/title";
import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingServiceSegmentsTitle() {
    const {serviceSegmentsPageSection} = useAppContext(useShallow((s) => ({
        serviceSegmentsPageSection: s.serviceSegmentsPageSection,
    })))

    return (
        <Title className="max-w-text">
            {serviceSegmentsPageSection?.title && <PortableText value={serviceSegmentsPageSection.title}/>}
        </Title>
    );
}
