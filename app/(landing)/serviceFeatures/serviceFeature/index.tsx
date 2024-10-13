import {ReactNodeProps} from "@/lib/types/core";
import LandingServiceFeatureImage from "@/app/(landing)/serviceFeatures/serviceFeature/image";

export default function LandingServiceFeature({serviceFeature}) {
    return (
        <LandingServiceFeatureContainer>
            <LandingServiceFeatureImage serviceFeature={serviceFeature} />
            <div className="text-blue-600 text-center">{serviceFeature.name}</div>
        </LandingServiceFeatureContainer>
    );
}

function LandingServiceFeatureContainer({children}: ReactNodeProps) {
    return (
        <div>
            {children}
        </div>
    );
}
