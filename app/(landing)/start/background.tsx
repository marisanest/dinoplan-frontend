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
                className="max-w-[calc(100dvw-calc(2*var(--spacing-x-outer)))] h-auto sm:ml-auto sm:max-h-[calc(100dvh-var(--height-banner)-var(--spacing-y-outer)-var(--height-start-description)-var(--spacing-y-outer)-var(--spacing-y-start-image)-var(--spacing-y-start-image))] sm:w-auto"
                width={startPageSection.illustration.width}
                height={startPageSection.illustration.height}
            />
        </LandingStartBackgroundContainer>
    );
}

function LandingStartBackgroundContainer({children}: ReactNodeProps) {
    return (
        <div className="absolute right-0 left-0 top-0 bottom-0 px-x-outer sm:pt-[calc(var(--height-banner)+var(--spacing-y-outer)+var(--spacing-y-start-image))] pb-[calc(var(--height-start-description)+var(--spacing-y-outer)+var(--spacing-y-start-image))] flex flex-col items-center justify-end sm:justify-center">
            {children}
        </div>
    );
}
