import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import LandingAboutBoxPersonalFeatureSymbol from "@/(landing)/about/box/personalFeatures/personalFeature/symbol";
import {PortableText} from "next-sanity";

export default function LandingAboutBoxPersonalFeature({personalFeature, index}) {
    return (
        <LandingAboutBoxPersonalFeatureContainer>
            <LandingAboutBoxPersonalFeatureSymbol personalFeature={personalFeature} index={index} />
            <div>
                <Title key="title" size="sm" align="left">
                    {personalFeature.name}
                </Title>
                <div key="description" className="flex items-center w-full mt-2 font-normal text-sm justify-start text-blue-600" >
                    <PortableText value={personalFeature.description} />
                </div>
            </div>
        </LandingAboutBoxPersonalFeatureContainer>
    );
}

function LandingAboutBoxPersonalFeatureContainer({children}: ReactNodeProps) {
    return (
        <div className="flex gap-[1rem] sm:gap-[1.5rem]">
            {children}
        </div>
    );
}