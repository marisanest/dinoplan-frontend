"use client"
import {ReactNodeProps} from "@/lib/types/core";

import {LandingProps} from "@/(landing)/landing";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";

export default function LandingStartBackground({startPageSection}: Pick<LandingProps, 'startPageSection'>) {
    return (
        <LandingStartBackgroundContainer>
            <Image
                src={urlFor(startPageSection.illustration)?.url()}
                alt="Illustration"
                className="ml-auto max-h-[calc(100dvh-5rem-10rem)] w-auto"
                height="2833"
                width="2078"
            />
        </LandingStartBackgroundContainer>
    );
}

function LandingStartBackgroundContainer({children}: ReactNodeProps) {
    return (
        <div className="absolute right-0 left-0 top-0 bottom-0 px-20 pt-[5rem] flex flex-col items-center">
            {children}
        </div>
    );
}
