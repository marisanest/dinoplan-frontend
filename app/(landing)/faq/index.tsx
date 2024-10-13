import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import LandingFaqImage from "@/(landing)/faq/image";
import LandingFaqQuestions from "@/(landing)/faq/questions";
import {LandingProps} from "@/(landing)/landing";
import {PortableText} from "next-sanity";

export default function LandingFaq({faqPageSection}: Pick<LandingProps, 'faqPageSection'>) {
    if (!faqPageSection) return null;

    return (
        <LandingFaqContainer>
            <Title key="title">
                <PortableText value={faqPageSection.title} />
            </Title>
            <div key="sub-title" className="mt-3 text-blue-600 flex items-center w-full justify-center text-center font-normal text-xl">
                <PortableText value={faqPageSection.subTitle} />
            </div>
            <LandingFaqImage key="image" faqPageSection={faqPageSection} />
            <LandingFaqQuestions key="questions" faqPageSection={faqPageSection} />
        </LandingFaqContainer>
    );
}

function LandingFaqContainer({children}: ReactNodeProps) {
    return (
        <div id="faq" className="flex flex-col items-center mt-y-m">
            <div className="w-sm max-w-sm">{children}</div>
        </div>
    );
}