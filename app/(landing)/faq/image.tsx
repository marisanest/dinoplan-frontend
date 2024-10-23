"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {LandingProps} from "@/(landing)/landing";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";

export default function LandingFaqImage({faqPageSection}: Pick<LandingProps, 'faqPageSection'>) {
    return (
        <LandingFaqImageContainer>
            <Image
                src={urlFor(faqPageSection.illustration)?.url()}
                alt="Illustration"
                className="w-[80%] sm:w-[45%] h-auto"
                width={faqPageSection.illustration.width}
                height={faqPageSection.illustration.height}
            />
        </LandingFaqImageContainer>
    );
}

function LandingFaqImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center items-center">
            {children}
        </div>
    );
}