"use client"

import {PortableText} from "next-sanity";
import Text from "@/components/text/text";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingFaqSubTitle() {
    const faqPageSection = useAppContext(useShallow((s) => s.faqPageSection));

    return (
        <Text key="sub-title" className="pt-[0.5rem] max-w-text" size="xl">
            {faqPageSection?.subTitle && <PortableText value={faqPageSection.subTitle}/>}
        </Text>
    );
}