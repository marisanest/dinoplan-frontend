import Text from "@/components/text/text";
import Image from "next/image";
import {getImageUrlBuilder} from "@/lib/sanity/image";

export default function LandingServiceFeature({serviceFeature}) {
    return (
      <div className="w-full flex flex-col items-center">
            <Image
                src={getImageUrlBuilder(serviceFeature.illustration)?.url()}
                alt={serviceFeature.name}
                className="w-full ss:w-[170px] max-w-[170px] h-auto"
                width={serviceFeature.illustration.width}
                height={serviceFeature.illustration.height}
            />
            <Text key="name" className="px-[16px]" size="md">{serviceFeature.name}</Text>
        </div>
    );
}