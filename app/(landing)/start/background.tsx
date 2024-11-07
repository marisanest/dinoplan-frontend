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
                className="ml-auto h-[475px] w-auto"
                width={startPageSection.illustration.width}
                height={startPageSection.illustration.height}
            />
        </LandingStartBackgroundContainer>
    );
}

function LandingStartBackgroundContainer({children}: ReactNodeProps) {
    return (
        <div className="absolute top-0">
            <div className="max-w-md w-md">
                {children}
            </div>
        </div>
    );
}
