"use client"

import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingServiceFeaturesTitle() {
    const serviceFeaturesPageSection = useAppContext(useShallow((s) => s.serviceFeaturesPageSection));

    return (
        <Title key="title" className="max-w-text">
            {serviceFeaturesPageSection?.title && <PortableText value={serviceFeaturesPageSection.title} />}
        </Title>
    );
}
