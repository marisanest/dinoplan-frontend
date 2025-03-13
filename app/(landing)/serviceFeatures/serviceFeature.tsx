import {ReactNodeProps} from "@/lib/types/core";
import Text from "@/components/text/text";
import Image from "next/image";
import {getImageUrlBuilder} from "@/lib/sanity/image";

export default function LandingServiceFeature({serviceFeature}) {
    return (
        <LandingServiceFeatureContainer>
            <Image
                src={getImageUrlBuilder(serviceFeature.illustration)?.url()}
                alt={serviceFeature.name}
                className="w-full ss:w-[182px] max-w-[182px] h-auto"
                width={serviceFeature.illustration.width}
                height={serviceFeature.illustration.height}
            />
            <Text key="name" size="md">{serviceFeature.name}</Text>
        </LandingServiceFeatureContainer>
    );
}

function LandingServiceFeatureContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex flex-col items-center">
            {children}
        </div>
    );
}
