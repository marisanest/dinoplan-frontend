import {ReactNodeProps} from "@/lib/types/core";
import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";

export default function LandingServiceModulesExampleImage({serviceModule}) {
    return (
        <LandingServiceModulesExampleImageContainer>
            <Image
                src={urlFor(serviceModule.serviceSegment.illustration)?.url()}
                alt="Illustration"
                className="w-full max-w-[250px]"
                height="310"
                width="250"
            />
        </LandingServiceModulesExampleImageContainer>
    );
}

function LandingServiceModulesExampleImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full h-full flex justify-center items-center mt-2">
            {children}
        </div>
    );
}
