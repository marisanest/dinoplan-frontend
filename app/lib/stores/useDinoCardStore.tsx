import { create } from 'zustand';
import {DinoSegmentType} from "@/lib/types/core";

interface useDinoSegmentStoreProps {
  selectedSegment: null | undefined | DinoSegmentType;
  selectSegment: (segment: DinoSegmentType) => void;
}

const useDinoSegmentStore = create<useDinoSegmentStoreProps>((set, get) => ({
  selectedSegment: null,
  selectSegment: (segment) => {
    const selectedSegment = get().selectedSegment;
    const nextSelectedSegment = selectedSegment && selectedSegment.id === segment.id ? null : segment

    set({
      selectedSegment: nextSelectedSegment,
    });
  },
}));

export default useDinoSegmentStore;
