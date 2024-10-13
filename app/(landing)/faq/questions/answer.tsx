import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import {PortableText} from "next-sanity";

export default function LandingFaqQuestionAnswer({question}) {
    const { selectedQuestion } = useQuestionsStore(
        useShallow((state) => ({
            selectedQuestion: state.selectedQuestion,
        })),
    );

    if (!selectedQuestion || selectedQuestion._id !== question._id) return null;

    return (
        <LandingFaqQuestionAnswerContainer>
            <div className="flex items-center w-full justify-start font-light text-md text-blue-600">
                <PortableText value={question.answer} />
            </div>
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