import {ReactNodeProps} from "@/lib/types/core";
import LandingServiceFeatureImage from "@/app/(landing)/serviceFeatures/serviceFeature/image";
import Text from "@/components/text/text";

export default function LandingServiceFeature({serviceFeature}) {
    return (
        <LandingServiceFeatureContainer>
            <LandingServiceFeatureImage key="image" serviceFeature={serviceFeature} />
            <Text key="name" size="md">{serviceFeature.name}</Text>
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
