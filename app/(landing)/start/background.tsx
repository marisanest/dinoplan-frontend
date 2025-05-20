"use client"

import Image from "next/image";
import {getImageUrlBuilder} from "@/lib/sanity/image";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingStartBackground() {
    const {startPageSection} = useAppContext(
        useShallow((s) => ({
            startPageSection: s.startPageSection,
        }))
    )

    return (
      <div className="absolute w-[100dvw] min-w-[100dvw] max-w-[100dvw] flex justify-center px-x-outer py-y-block bg-orange-200">
        <div className="w-full max-w-md h-[calc(100dvh-2*var(--spacing-y-block)-var(--height-banner))] ss:h-start flex items-center ss:items-start">
            {
                startPageSection && (
                    <Image
                        src={getImageUrlBuilder(startPageSection?.illustration)?.height(startPageSection.illustration?.height * 0.5).url()}
                        alt=""
                        className="w-full h-auto ss:h-start-image ss:w-auto ml-auto"
                        width={startPageSection.illustration?.width}
                        height={startPageSection.illustration?.height}
                    />
                )
            }
        </div>
      </div>
    );
}
