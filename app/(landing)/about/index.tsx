import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import Description from "@/app/components/description";
import LandingAboutBox from "@/(landing)/about/box";
import {LandingProps} from "@/(landing)/landing";
import {PortableText} from "next-sanity";

export default function LandingAbout({aboutPageSection}: Pick<LandingProps, 'aboutPageSection'>) {
    if (!aboutPageSection) return null;

    return (
        <LandingAboutContainer>
            <Title key="title">
                <PortableText value={aboutPageSection.title} />
            </Title>
            <Description key="description" className="my-y-xs">
                <PortableText value={aboutPageSection.description} />
            </Description>
            <LandingAboutBox key="box" aboutPageSection={aboutPageSection} />
        </LandingAboutContainer>
    );
}

function LandingAboutContainer({children}: ReactNodeProps) {
    return (
        <div className="bg-yellow-100 flex flex-col items-center my-y-m">
            <div className="w-sm max-w-sm">{children}</div>
        </div>
    );
}