"use client"

import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingAboutBoxImage() {
    const aboutPageSection = useAppContext(useShallow((s) => s.aboutPageSection));

    return (
        <div className="w-full h-fit ss:h-full flex justify-center ss:justify-end items-center">
            {aboutPageSection && (
                <Image
                    src={urlFor(aboutPageSection.illustration)?.url()}
                    alt="Illustration"
                    className="max-w-[300px] w-full h-auto px-[2rem] ss:px-0 pt-y-paragraph ss:pt-y-0"
                    width={aboutPageSection.illustration.width}
                    height={aboutPageSection.illustration.height}
                />
            )}
        </div>
    );
}