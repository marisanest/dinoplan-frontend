import {createStore} from 'zustand'
import {
  ServiceSegment
} from "@/lib/types/sanity-types";

export interface CalculatorStoreProps {
  serviceSegments: ServiceSegment[];
  selectedServiceSegmentIndex: number | undefined;
  prevSelectedServiceSegmentIndex: number | undefined;
  selectedServiceModules: any;
}

export interface CalculatorStoreActions {
  selectServiceSegment: (serviceSegmentIndex: number) => void;
  selectPrevServiceSegment: () => void;
  selectNextServiceSegment: () => void;
  selectServiceModule: (serviceModule: any) => void;
}

export interface CalculatorStoreState extends CalculatorStoreProps, CalculatorStoreActions {}

export type CalculatorStore = ReturnType<typeof createCalculatorStore>

export const createCalculatorStore = (initProps: Pick<CalculatorStoreProps, 'serviceSegments'>) => {
  const DEFAULT_PROPS: CalculatorStoreProps = {
    selectedServiceSegmentIndex: 0,
    prevSelectedServiceSegmentIndex: 0,
    selectedServiceModules: {},
    ...initProps,
    serviceSegments: initProps.serviceSegments ? initProps.serviceSegments.map((s: any) => s.serviceSegment) : [],
  }

  return createStore<CalculatorStoreState>()((set, get) => ({
    ...DEFAULT_PROPS,
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
    selectServiceModule: (serviceModule) => {
      const selectedServiceModules = get().selectedServiceModules;

      if (serviceModule._id in selectedServiceModules) {
        delete selectedServiceModules[serviceModule._id]
      } else {
        selectedServiceModules[serviceModule._id] = serviceModule;
      }
      set({
        selectedServiceModules: {...selectedServiceModules},
      });
    },
  }))
}
