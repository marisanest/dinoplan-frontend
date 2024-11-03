import { createStore } from 'zustand'

export interface ServiceSegmentsProps {
  isInitial: boolean;
  showServiceSegmentDetails: boolean;
  serviceSegments: any[];
  selectedServiceSegmentIndex: number | undefined;
  prevSelectedServiceSegmentIndex: number;
}

export interface ServiceSegmentsActions {
  selectServiceSegment: (serviceSegmentIndex: number) => void;
  selectPrevServiceSegment: () => void;
  selectNextServiceSegment: () => void;
}

export interface ServiceSegmentsState extends ServiceSegmentsProps, ServiceSegmentsActions {}

export type ServiceSegmentsStore = ReturnType<typeof createServiceSegmentsStore>

export const createServiceSegmentsStore = (initProps?: Partial<ServiceSegmentsProps>) => {
  const DEFAULT_PROPS: ServiceSegmentsProps = {
    isInitial: true,
    showServiceSegmentDetails: false,
    serviceSegments: [],
    selectedServiceSegmentIndex: 0,
    prevSelectedServiceSegmentIndex: 0
  }

  return createStore<ServiceSegmentsState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,

    selectServiceSegment: (serviceSegmentIndex) => {
      const currentSelectedServiceSegmentIndex = get().selectedServiceSegmentIndex;
      const isInitial = get().isInitial;

      set({
        isInitial: false,
        showServiceSegmentDetails: isInitial ? true : currentSelectedServiceSegmentIndex !== serviceSegmentIndex,
        selectedServiceSegmentIndex: isInitial ? serviceSegmentIndex : (currentSelectedServiceSegmentIndex === serviceSegmentIndex ? undefined : serviceSegmentIndex),
        prevSelectedServiceSegmentIndex: currentSelectedServiceSegmentIndex,
      });
    },
    selectPrevServiceSegment: () => {
      const currentSelectedServiceSegmentIndex = get().selectedServiceSegmentIndex;
      if (currentSelectedServiceSegmentIndex === undefined) return;

      set({
        isInitial: false,
        selectedServiceSegmentIndex: currentSelectedServiceSegmentIndex === 0 ? get().serviceSegments.length - 1 : currentSelectedServiceSegmentIndex - 1,
        prevSelectedServiceSegmentIndex: currentSelectedServiceSegmentIndex,
      });
    },
    selectNextServiceSegment: () => {
      const currentSelectedServiceSegmentIndex = get().selectedServiceSegmentIndex;
      if (currentSelectedServiceSegmentIndex === undefined) return;

      set({
        isInitial: false,
        selectedServiceSegmentIndex: currentSelectedServiceSegmentIndex === get().serviceSegments.length - 1 ? 0 : currentSelectedServiceSegmentIndex + 1,
        prevSelectedServiceSegmentIndex: currentSelectedServiceSegmentIndex,
      });
    },
  }))
}