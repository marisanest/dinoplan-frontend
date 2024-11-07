import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import LandingAboutBoxPersonalFeatureSymbol from "@/(landing)/about/box/personalFeatures/personalFeature/symbol";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export default function LandingAboutBoxPersonalFeature({personalFeature, index}) {
    return (
        <LandingAboutBoxPersonalFeatureContainer>
            <LandingAboutBoxPersonalFeatureSymbol personalFeature={personalFeature} index={index} />
            <div>
                <Title key="title" size="md" align="left">
                    {personalFeature.name}
                </Title>
                <Text key="description" className="mt-2 text-[0.9rem]" size="sm" align="left">
                    <PortableText value={personalFeature.description} />
                </Text>
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