import Image from "next/image";
import {urlFor} from "@/lib/sanity/image";
import {CalculatorServiceSegmentProps} from "@/rechner/components/serviceSegment/index";

export default function CalculatorServiceSegmentImage({serviceSegment}: CalculatorServiceSegmentProps) {
    return (
        <div className="cursor-pointer">
            <Image
                src={urlFor(serviceSegment.illustration)?.url()}
                alt={serviceSegment.name}
                className="w-full max-w-[250px]"
                height="310"
                width="250"
            />
        </div>
    );
}
