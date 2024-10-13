import {ReactNodeProps} from "@/lib/types/core";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";

export default function LandingKeyPointsPointImage({serviceFeature}) {
    return (
        <LandingKeyPointsPointImageContainer>
            <Image
                src={urlFor(serviceFeature.illustration)?.url()}
                alt={serviceFeature.name}
                className="w-full max-w-[250px]"
                height="310"
                width="250"
            />
        </LandingKeyPointsPointImageContainer>
    );
}

function LandingKeyPointsPointImageContainer({children}: ReactNodeProps) {
    return (
        <div className="px-x-xs">
            {children}
        </div>
    );
}
