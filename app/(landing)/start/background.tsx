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
                className="ml-auto max-h-[calc(100dvh-18rem-83px)] w-auto"
                width={startPageSection.illustration.width}
                height={startPageSection.illustration.height}
            />
        </LandingStartBackgroundContainer>
    );
}

function LandingStartBackgroundContainer({children}: ReactNodeProps) {
    return (
        <div className="absolute right-0 left-0 top-0 bottom-0 px-20 pt-[9rem] pb-[calc(9rem+83px)] flex flex-col items-center justify-center">
            {children}
        </div>
    );
}
