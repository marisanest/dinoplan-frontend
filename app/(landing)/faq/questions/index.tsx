import {QuestionType, ReactNodeProps} from "@/lib/types/core";
import LandingFaqQuestion from "@/(landing)/faq/questions/question";

const questions: QuestionType[] = [
    {
        id: 1,
        question: "Was unterscheidet uns von anderen?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra volutpat consequat. Maecenas non iaculis dolor. Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.",
    },
    {
        id: 2,
        question: "Was ist, wenn ich bereits Versicherungen für mein Kind habe?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Mauris viverra volutpat consequat. Maecenas non iaculis dolor. Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.",
    },
    {
        id: 3,
        question: "Was kostet ein Beratungstermin?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Mauris viverra volutpat consequat. Maecenas non iaculis dolor.<br/>Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.",
    },
    {
        id: 4,
        question: "Gibt es zusätliche Kosten, wenn ich mich für ein Paket entscheide?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Mauris viverra volutpat consequat. Maecenas non iaculis dolor.<br/>Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.",
    },
]

export default function LandingFaqQuestions() {
    return (
        <LandingFaqQuestionsContainer>
            {questions.map((question: QuestionType) => <LandingFaqQuestion key={question.id} question={question} />)}
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