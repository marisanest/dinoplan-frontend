"use client"

import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import LandingFaqQuestionAnswer from "@/(landing)/faq/questions/answer";
import ArrowIcon from "@/components/icons/arrow";
import cn from "clsx";
import Text from "@/components/text/text";

export default function LandingFaqQuestion({question}: {question: any}) {
    const { selectedQuestion, selectQuestion } = useQuestionsStore(
        useShallow((state) => ({
            selectedQuestion: state.selectedQuestion,
            selectQuestion: state.selectQuestion,
        })),
    );

    return (
        <div className="w-full">
            <div className="grid grid-cols-[1fr_30px] cursor-pointer my-[0.75rem] sm:my-[1rem]"
                 onClick={() => selectQuestion(question)}>

                <Text align="left" size="lg">{question.question}</Text>

                <div className={cn("min-w-[27px] w-[27px] min-h-[27px] h-[27px] xs:min-w-[30px] xs:w-[30px] xs:min-h-[30px] xs:h-[30px] py-[11px] px-[7px] rounded-full bg-red-200 transition-transform duration-700",
                    selectedQuestion && selectedQuestion._id === question._id ? 'rotate-180' : 'rotate-0')}>
                    <ArrowIcon className="transition-transform duration-700"/>
                </div>
            </div>

            <LandingFaqQuestionAnswer question={question}/>
            <hr className="border-t-[2px] border-blue-600"/>
        </div>
    );
}