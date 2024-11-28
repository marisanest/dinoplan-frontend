import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import LandingFaqImage from "@/(landing)/faq/image";
import LandingFaqQuestions from "@/(landing)/faq/questions";
import {LandingProps} from "@/(landing)/landing";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export default function LandingFaq({faqPageSection}: Pick<LandingProps, 'faqPageSection'>) {
    if (!faqPageSection) return null;

    return (
        <LandingFaqContainer>
            <Title key="title" className="max-w-text">
                <PortableText value={faqPageSection.title} />
            </Title>
            <Text key="sub-title" className="pt-[0.5rem] max-w-text" size="xl">
                <PortableText value={faqPageSection.subTitle} />
            </Text>
            <LandingFaqImage key="image" faqPageSection={faqPageSection} />
            <LandingFaqQuestions key="questions" faqPageSection={faqPageSection} />
        </LandingFaqContainer>
    );
}

function LandingFaqContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center px-x-outer">
            <div className="w-full max-w-sm flex flex-col items-center">{children}</div>
        </div>
    );
}