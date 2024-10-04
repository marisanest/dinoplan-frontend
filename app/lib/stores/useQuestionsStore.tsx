import { create } from 'zustand';
import {QuestionType} from "@/lib/types/core";

export type UseQuestionsStoreProps = {
  selectedQuestion: null | undefined | QuestionType;
  selectQuestion: (service: QuestionType) => void;
}

const useQuestionsStore = create<UseQuestionsStoreProps>((set, get) => ({
  selectedQuestion: null,
  selectQuestion: (service) => {
    const selectedQuestion = get().selectedQuestion;
    const nextSelectedQuestion = selectedQuestion && selectedQuestion.id === service.id ? null : service

    set({
      selectedQuestion: nextSelectedQuestion,
    });
  },
}));

export default useQuestionsStore;
