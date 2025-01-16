"use client"

import LandingAboutBoxPersonalFeature from "@/(landing)/about/box/personalFeatures/personalFeature";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingAboutBoxPersonalFeatures() {
    const aboutPageSection = useAppContext(useShallow((s) => s.aboutPageSection));

    return (
        <div className="flex flex-col gap-[1.5rem] sm:gap-[2rem] w-full h-fit justify-center items-start">
            {aboutPageSection?.personalFeatures?.map((personalFeature, index) => (
                <LandingAboutBoxPersonalFeature key={personalFeature.personalFeature?._id}
                                                personalFeature={personalFeature.personalFeature} index={index}/>
            ))}
        </div>
    );
}
