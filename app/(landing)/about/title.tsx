"use client"

import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingAboutTitle() {
    const aboutPageSection = useAppContext(useShallow((s) => s.aboutPageSection));

    return (
        <Title key="title" className="max-w-text">
            {aboutPageSection?.title && <PortableText value={aboutPageSection.title}/>}
        </Title>
    );
}