import LandingFaqImage from "@/(landing)/faq/image";
import LandingFaqQuestions from "@/(landing)/faq/questions";
import LandingFaqTitle from "@/(landing)/faq/title";
import LandingFaqSubTitle from "@/(landing)/faq/subTitle";
import LandingFaqContainer from "@/(landing)/faq/container";

export default function LandingFaq() {
    return (
        <LandingFaqContainer>
            <div className="w-full flex justify-center px-x-outer">
                <div className="w-full max-w-sm flex flex-col items-center">
                    <LandingFaqTitle key="title"/>
                    <LandingFaqSubTitle key="subTitle"/>
                    <LandingFaqImage key="image"/>
                    <LandingFaqQuestions key="questions"/>
                </div>
            </div>
        </LandingFaqContainer>
    );
}