import {ReactNodeProps} from "@/lib/types/core";
import LandingAboutBoxPersonalFeature from "@/(landing)/about/box/personalFeatures/personalFeature";
import {LandingProps} from "@/(landing)/landing";

export default function LandingAboutBoxPersonalFeatures({aboutPageSection}: Pick<LandingProps, 'aboutPageSection'>) {
    if (!aboutPageSection) return null;

    return (
        <LandingAboutBoxPersonalFeaturesContainer>
            {aboutPageSection.personalFeatures?.map((personalFeature, index) => (
                <LandingAboutBoxPersonalFeature key={personalFeature.personalFeature?._id} personalFeature={personalFeature.personalFeature} index={index} />
            ))}
        </LandingAboutBoxPersonalFeaturesContainer>
    );
}

function LandingAboutBoxPersonalFeaturesContainer({children}: ReactNodeProps) {
    return (
        <div className="flex flex-col gap-[1.5rem] sm:gap-[2rem] w-full h-fit justify-center items-start">
            {children}
        </div>
    );
}