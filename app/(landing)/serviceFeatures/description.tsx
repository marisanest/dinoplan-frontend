"use client"

import {PortableText} from "next-sanity";
import Text from "@/components/text/text";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingServiceFeaturesDescription() {
    const serviceFeaturesPageSection = useAppContext(useShallow((s) => s.serviceFeaturesPageSection));

    return (
        <Text key="description" className="pt-y-paragraph max-w-text" size="sm">
            {serviceFeaturesPageSection?.description && <PortableText value={serviceFeaturesPageSection.description}/>}
        </Text>
    );
}
