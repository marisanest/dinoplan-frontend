import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import LandingAboutBox from "@/(landing)/about/box";
import {LandingProps} from "@/(landing)/landing";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export default function LandingAbout({aboutPageSection, contact}: Pick<LandingProps, 'aboutPageSection' | 'contact'>) {
    if (!aboutPageSection) return null;

    return (
        <LandingAboutContainer>
            <Title key="title">
                <PortableText value={aboutPageSection.title} />
            </Title>
            <Text key="description" className="mt-y-xs mb-y-s" size="sm" >
                <PortableText value={aboutPageSection.description} />
            </Text>
            <LandingAboutBox key="box" aboutPageSection={aboutPageSection} contact={contact} />
        </LandingAboutContainer>
    );
}

function LandingAboutContainer({children}: ReactNodeProps) {
    return (
        <div className="bg-yellow-100 flex flex-col items-center my-y-m">
            <div className="w-sm max-w-sm">{children}</div>
            <div id="faq"></div>
        </div>
    );
}