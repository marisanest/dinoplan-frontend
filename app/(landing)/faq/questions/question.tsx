"use client"

import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import LandingFaqQuestionAnswer from "@/(landing)/faq/questions/answer";
import ArrowIcon from "@/components/icons/arrow";
import cn from "clsx";
import Text from "@/components/text/text";
import CircledArrowIcon from "@/components/icons/circledArrow";
import { useAppContext } from "@/lib/stores/app/context";

export default function LandingFaqQuestion({question}: {question: any}) {
  const {
    windowSize,
  } = useAppContext(
    useShallow((s) => ({
      windowSize: s.windowSize,
    })),
  );

  const {
    selectedQuestion,
    selectQuestion,
  } = useQuestionsStore(
    useShallow((s) => ({
      selectedQuestion: s.selectedQuestion,
      selectQuestion: s.selectQuestion,
    })),
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_27px] xs:grid-cols-[1fr_30px] cursor-pointer my-[12px] sm:my-[16px]"
           onClick={() => selectQuestion(question)}>

        <Text align="left" size="lg">{question.question}</Text>
        <div className="w-full h-full flex justify-end">
          <CircledArrowIcon className={cn(selectedQuestion && selectedQuestion._id === question._id ? 'rotate-180' : 'rotate-0', 'transition-transform duration-700 will-change-transform')}
                            size={(windowSize.width ?? 0) >= 470 ? 30 : 27}
          />
        </div>
      </div>

      <LandingFaqQuestionAnswer question={question}/>
      <hr className="border-t-[2px] border-blue-600"/>
    </div>
  );
}