import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import Description from "@/app/components/description";
import LandingAboutBox from "@/(landing)/about/box";
import RichText from "@/components/text";
import LandingFaqImage from "@/(landing)/faq/image";
import LandingFaqQuestions from "@/(landing)/faq/questions";

export default function LandingFaq() {
    return (
        <LandingFaqContainer>
            <Title key="title">Häufig gestellte Fragen</Title>
            <RichText key="sub-title" className="mt-3" size="xl" trustedHtml="zu Dinoplan" />
            <LandingFaqImage key="image" />
            <LandingFaqQuestions key="questions" />
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