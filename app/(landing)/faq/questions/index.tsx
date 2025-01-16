"use client"

import LandingFaqQuestion from "@/(landing)/faq/questions/question";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingFaqQuestions() {
    const faqPageSection = useAppContext(useShallow((s) => s.faqPageSection));

    return (
        <div className="w-full py-y-paragraph px-[2rem] ss:px-[6rem]">
            {faqPageSection?.questions?.map((question) => <LandingFaqQuestion key={question.question?._id}
                                                                              question={question.question}/>)}
        </div>
    );
}