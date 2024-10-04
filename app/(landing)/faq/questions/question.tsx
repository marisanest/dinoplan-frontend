"use client"

import {QuestionType, ReactNodeProps} from "@/lib/types/core";
import RichText from "@/components/text";
import CircleIcon from "@/components/icons/circle";
import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import LandingFaqQuestionAnswer from "@/(landing)/faq/questions/answer";
import ArrowIcon from "@/components/icons/arrow";
import cn from "clsx";

export type LandingFaqQuestionProps = {
    question: QuestionType;
};

export default function LandingFaqQuestion({question}: LandingFaqQuestionProps) {
    const { selectedQuestion, selectQuestion } = useQuestionsStore(
        useShallow((state) => ({
            selectedQuestion: state.selectedQuestion,
            selectQuestion: state.selectQuestion,
        })),
    );

    return (
        <LandingFaqQuestionContainer>
            <div className="flex cursor-pointer" onClick={() => selectQuestion(question)}>
                <RichText key={question.id} trustedHtml={question.question} align="left" size="lg"/>
                <div className="bg-red-200 rounded-full w-7 h-7 flex justify-center items-center">
                    <ArrowIcon className={cn("transition-transform duration-700", selectedQuestion && selectedQuestion.id === question.id ? 'rotate-180' : 'rotate-0')} />
                </div>
            </div>
            <LandingFaqQuestionAnswer question={question} />
            <hr className="my-3 border-[1px] border-blue-600" />
        </LandingFaqQuestionContainer>
    );
}

function LandingFaqQuestionContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full">
            {children}
        </div>
    );
}