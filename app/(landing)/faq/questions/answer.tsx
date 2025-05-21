import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";
import {useState} from "react";

export default function LandingFaqQuestionAnswer({question}: { question: any }) {
    const { selectedQuestion } = useQuestionsStore(
        useShallow((state) => ({
            selectedQuestion: state.selectedQuestion,
        })),
    );
    const [height, setHeight] = useState<number>(0)

    return (
        <div className="transition-[height] duration-700 overflow-y-hidden"
             style={{height: selectedQuestion && selectedQuestion._id === question._id ? `${height}px` : '0px'}}>
            <div ref={el => setHeight(el?.clientHeight ?? 0)}
                 className="w-full grid grid-cols-[1fr_27px] xs:grid-cols-[1fr_30px] gap-x-[16px] pb-[20px]">
                <Text className="gap-y-[16px]" size="md" align="left" isFlexCol={true} >
                    <PortableText value={question.answer}/>
                </Text>
                <div/>
            </div>
        </div>
    );
}