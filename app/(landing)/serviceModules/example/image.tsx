import {ReactNodeProps} from "@/lib/types/core";
import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";

export default function LandingServiceModulesExampleImage({serviceModule}) {
    return (
        <LandingServiceModulesExampleImageContainer>
            <Image
                src={urlFor(serviceModule.serviceSegment.illustration)?.url()}
                alt="Illustration"
                className="w-[150px] h-auto xs:w-full xs:max-w-[250px]"
                width={serviceModule.serviceSegment.illustration.width}
                height={serviceModule.serviceSegment.illustration.height}
            />
        </LandingServiceModulesExampleImageContainer>
    );
}

function LandingServiceModulesExampleImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full xs:h-full flex justify-center xs:justify-end xs:items-center">
            {children}
        </div>
    );
}
