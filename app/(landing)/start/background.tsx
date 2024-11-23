"use client"
import {ReactNodeProps} from "@/lib/types/core";

import {LandingProps} from "@/(landing)/landing";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";

export default function LandingStartBackground({startPageSection}: Pick<LandingProps, 'startPageSection'>) {
    return (
        <LandingStartBackgroundContainer>{
            startPageSection && (
                <Image
                    src={urlFor(startPageSection.illustration)?.height(startPageSection.illustration.height * 0.5).url()}
                    alt="Illustration"
                    className="ml-auto w-full h-auto ss:h-[475px] ss:w-auto text-blue-600 text-right"
                    width={startPageSection.illustration.width}
                    height={startPageSection.illustration.height}
                />
            )
        }
        </LandingStartBackgroundContainer>
    );
}

function LandingStartBackgroundContainer({children}: ReactNodeProps) {
    return (
        <div className="absolute w-full flex justify-center px-x-outer py-y-sections bg-orange-200">
            <div className="w-full max-w-md h-[calc(100dvh-2*var(--spacing-y-sections)-var(--height-banner))] ss:h-start flex items-center ss:items-start">
                {children}
            </div>
        </div>
    )
}
