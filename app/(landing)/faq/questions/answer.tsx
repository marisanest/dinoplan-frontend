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
             style={{height: selectedQuestion && selectedQuestion._id === question._id ? `${height}px` : '0px'}}
        >
            <div ref={el => setHeight(el?.clientHeight ?? 0)}
                 className="w-full pb-[1.2rem] grid grid-cols-[1fr_28px]"
            >
                <Text size="md" align="left">
                    <PortableText value={question.answer}/>
                </Text>
                <div/>
            </div>
        </div>
    );
}