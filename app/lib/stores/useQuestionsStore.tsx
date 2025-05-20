import { create } from 'zustand';

export type UseQuestionsStoreProps = {
  selectedQuestion: null | undefined | any;
  selectQuestion: (question: any) => void;
}

const useQuestionsStore = create<UseQuestionsStoreProps>((set, get) => ({
  selectedQuestion: null,
  selectQuestion: (question) => {
    const selectedQuestion = get().selectedQuestion;
    const nextSelectedQuestion = selectedQuestion && selectedQuestion._id === question._id ? null : question

    set({
      selectedQuestion: nextSelectedQuestion,
    });
  },
}));

export default useQuestionsStore;
