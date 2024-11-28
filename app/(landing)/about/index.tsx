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
            <Title key="title" className="max-w-text">
                <PortableText value={aboutPageSection.title} />
            </Title>
            <div className="w-full flex justify-center">
                <Text key="description" className="pt-y-paragraph pb-y-section max-w-text" size="sm" >
                    <PortableText value={aboutPageSection.description} />
                </Text>
            </div>
            <LandingAboutBox key="box" aboutPageSection={aboutPageSection} contact={contact} />
        </LandingAboutContainer>
    );
}

function LandingAboutContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center px-x-outer pb-y-block">
            <div className="w-full max-w-sm flex flex-col items-center">{children}</div>
            <div id="faq"></div>
        </div>
    );
}