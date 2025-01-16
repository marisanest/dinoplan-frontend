"use client"

import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingFaqTitle() {
    const faqPageSection = useAppContext(useShallow((s) => s.faqPageSection));

    return (
        <Title key="title" className="max-w-text">
            {faqPageSection?.title && <PortableText value={faqPageSection.title}/>}
        </Title>
    );
}