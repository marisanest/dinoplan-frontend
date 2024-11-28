import { createStore } from 'zustand'

export interface ServiceSegmentsProps {
  serviceSegments: any[];
  selectedServiceSegmentIndex: number | undefined;
  prevSelectedServiceSegmentIndex: number | undefined;
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
    serviceSegments: [],
    selectedServiceSegmentIndex: undefined,
    prevSelectedServiceSegmentIndex: undefined,
  }

  return createStore<ServiceSegmentsState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,

    selectServiceSegment: (serviceSegmentIndex) => {
      const currentSelectedServiceSegmentIndex = get().selectedServiceSegmentIndex;

      set({
        selectedServiceSegmentIndex: currentSelectedServiceSegmentIndex === serviceSegmentIndex ? undefined : serviceSegmentIndex,
        prevSelectedServiceSegmentIndex: currentSelectedServiceSegmentIndex,
      });
    },
    selectPrevServiceSegment: () => {
      const currentSelectedServiceSegmentIndex = get().selectedServiceSegmentIndex;
      let setProps;

      if (currentSelectedServiceSegmentIndex === undefined) {
        setProps = {
          selectedServiceSegmentIndex: get().serviceSegments.length - 1,
          prevSelectedServiceSegmentIndex: 0,
        };
      } else {
        setProps = {
          selectedServiceSegmentIndex: currentSelectedServiceSegmentIndex === 0 ? get().serviceSegments.length - 1 : currentSelectedServiceSegmentIndex - 1,
          prevSelectedServiceSegmentIndex: currentSelectedServiceSegmentIndex,
        };
      }

      set(setProps);
    },
    selectNextServiceSegment: () => {
      const currentSelectedServiceSegmentIndex = get().selectedServiceSegmentIndex;
      let setProps;

      if (currentSelectedServiceSegmentIndex === undefined) {
        setProps = {
          selectedServiceSegmentIndex: 1,
          prevSelectedServiceSegmentIndex: 0,
        };
      } else {
        setProps = {
          selectedServiceSegmentIndex: currentSelectedServiceSegmentIndex === get().serviceSegments.length - 1 ? 0 : currentSelectedServiceSegmentIndex + 1,
          prevSelectedServiceSegmentIndex: currentSelectedServiceSegmentIndex,
        };
      }

      set(setProps);
    },
  }))
}