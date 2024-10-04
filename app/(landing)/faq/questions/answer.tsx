import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import {LandingFaqQuestionProps} from "@/(landing)/faq/questions/question";
import RichText from "@/components/text";

export default function LandingFaqQuestionAnswer({question}: LandingFaqQuestionProps) {
    const { selectedQuestion } = useQuestionsStore(
        useShallow((state) => ({
            selectedQuestion: state.selectedQuestion,
        })),
    );

    if (!selectedQuestion || selectedQuestion.id !== question.id) return null;

    return (
        <LandingFaqQuestionAnswerContainer>
            <RichText trustedHtml={selectedQuestion.answer} size="md" align="left" />
        </LandingFaqQuestionAnswerContainer>
    );
}

function LandingFaqQuestionAnswerContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full my-2">
            {children}
        </div>
    );
}