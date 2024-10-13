import { create } from 'zustand';

interface useServiceSegmentsStoreProps {
  selectedServiceSegment: null | undefined | any;
  selectServiceSegment: (serviceSegment: any) => void;
}

const useServiceSegmentsStore = create<useServiceSegmentsStoreProps>((set, get) => ({
  selectedServiceSegment: null,
  selectServiceSegment: (serviceSegment) => {
    const currentSelectedServiceSegment = get().selectedServiceSegment;
    const selectedServiceSegment = currentSelectedServiceSegment && currentSelectedServiceSegment._id === serviceSegment._id ? null : serviceSegment

    set({
      selectedServiceSegment,
    });
  },
}));

export default useServiceSegmentsStore;
