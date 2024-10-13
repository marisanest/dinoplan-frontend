import {ReactNodeProps} from "@/lib/types/core";
import LandingFaqQuestion from "@/(landing)/faq/questions/question";
import {LandingProps} from "@/(landing)/landing";

export default function LandingFaqQuestions({faqPageSection}: Pick<LandingProps, 'faqPageSection'>) {
    return (
        <LandingFaqQuestionsContainer>
            {faqPageSection?.questions?.map((question) => <LandingFaqQuestion key={question.question?._id} question={question.question} />)}
        </LandingFaqQuestionsContainer>
    );
}

function LandingFaqQuestionsContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full my-y-xs">
            {children}
        </div>
    );
}