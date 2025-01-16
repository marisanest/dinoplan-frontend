"use client"

import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";
import Text from "@/components/text/text";

export default function LandingAboutDescription() {
    const aboutPageSection = useAppContext(useShallow((s) => s.aboutPageSection));

    return (
        <Text key="description" className="pt-y-paragraph pb-y-section max-w-text" size="sm">
            {aboutPageSection?.description && <PortableText value={aboutPageSection.description}/>}
        </Text>
    );
}