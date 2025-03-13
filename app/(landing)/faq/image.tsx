"use client"

import Image from "next/image";
import {getImageUrlBuilder} from "@/lib/sanity/image";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingFaqImage() {
    const faqPageSection = useAppContext(useShallow((s) => s.faqPageSection));

    return (
        <div className="w-full flex justify-center">
            {faqPageSection?.illustration && (
                <Image
                    src={getImageUrlBuilder(faqPageSection.illustration)?.url()}
                    alt="Illustration"
                    className="w-[70%] ss:w-[350px] max-w-[350px] h-auto"
                    width={faqPageSection.illustration.width}
                    height={faqPageSection.illustration.height}
                />
            )}
        </div>
    );
}
