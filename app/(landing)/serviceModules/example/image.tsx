import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";

export default function LandingServiceModulesExampleImage({selectedServiceModule}: {selectedServiceModule: any}) {
    return (
        <div className="w-full xs:h-full flex justify-center xs:justify-end xs:items-center">
            {selectedServiceModule && (
                <Image
                    src={urlFor(selectedServiceModule.serviceSegment?.illustration)?.url()}
                    alt="Illustration"
                    className="w-[150px] h-auto xs:w-full xs:max-w-[250px]"
                    width={selectedServiceModule.serviceSegment?.illustration.width}
                    height={selectedServiceModule.serviceSegment?.illustration.height}
                />
            )}
        </div>
    );
}
