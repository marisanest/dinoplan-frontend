"use client"

import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingServiceModulesTitle() {
    const serviceModulesPageSection = useAppContext(useShallow((s) => s.serviceModulesPageSection));

    return (
        <Title key="title" className="max-w-text-lg">
            {serviceModulesPageSection?.title && <PortableText value={serviceModulesPageSection.title}/>}
        </Title>
    );
}