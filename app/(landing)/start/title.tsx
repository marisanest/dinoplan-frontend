"use client"

import Title from "@/components/title";
import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingStartTitle() {
    const {startPageSection} = useAppContext(
        useShallow((s) => ({
            startPageSection: s.startPageSection,
        }))
    )

    if (!startPageSection || !startPageSection.title) return null;

    return (
        <Title size="7xl" align="left">
            {startPageSection && <PortableText value={startPageSection.title}/>}
        </Title>
    );
}