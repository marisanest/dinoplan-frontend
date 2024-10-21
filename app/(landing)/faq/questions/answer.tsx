import {ReactNodeProps} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import useQuestionsStore from "@/lib/stores/useQuestionsStore";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export default function LandingFaqQuestionAnswer({question}) {
    const { selectedQuestion } = useQuestionsStore(
        useShallow((state) => ({
            selectedQuestion: state.selectedQuestion,
        })),
    );

    if (!selectedQuestion || selectedQuestion._id !== question._id) return null;

    return (
        <LandingFaqQuestionAnswerContainer>
            <Text size="md" align="left">
                <PortableText value={question.answer} />
            </Text>
            <div />
        </LandingFaqQuestionAnswerContainer>
    );
}

function LandingFaqQuestionAnswerContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full my-[1.2rem] grid grid-cols-[1fr_28px]">
            {children}
        </div>
    );
}