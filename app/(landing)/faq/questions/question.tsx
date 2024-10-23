"use client"

import {ReactNodeProps} from "@/lib/types/core";
import RichText from "@/components/text";
import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import LandingFaqQuestionAnswer from "@/(landing)/faq/questions/answer";
import ArrowIcon from "@/components/icons/arrow";
import cn from "clsx";
import Text from "@/components/text/text";

export default function LandingFaqQuestion({question}) {
    const { selectedQuestion, selectQuestion } = useQuestionsStore(
        useShallow((state) => ({
            selectedQuestion: state.selectedQuestion,
            selectQuestion: state.selectQuestion,
        })),
    );

    return (
        <LandingFaqQuestionContainer>
            <div className="grid grid-cols-[1fr_30px] cursor-pointer my-[0.75rem] sm:my-[1rem]"
                 onClick={() => selectQuestion(question)}>
                <Text align="left" size="lg">{question.question} </Text>
                <div className="bg-red-200 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                    <ArrowIcon className={cn("transition-transform duration-700", selectedQuestion && selectedQuestion._id === question._id ? 'rotate-180' : 'rotate-0')}/>
                </div>
            </div>
            <LandingFaqQuestionAnswer question={question}/>
            <hr className="my-3 border-t-[2px] border-blue-600"/>
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