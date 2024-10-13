import {ReactNodeProps} from "@/lib/types/core";

export default function LandingAboutBoxPersonalFeatureIcon({personalFeatures}) {
    return (
        <LandingAboutBoxPersonalFeatureIconContainer>
            {/*{personalFeatures.illustration}*/}
        </LandingAboutBoxPersonalFeatureIconContainer>
    );
}

function LandingAboutBoxPersonalFeatureIconContainer({children}: ReactNodeProps) {
    return (
        <div className="bg-yellow-100 rounded-full w-fit h-fit p-2.5">
            {children}
        </div>
    );
}