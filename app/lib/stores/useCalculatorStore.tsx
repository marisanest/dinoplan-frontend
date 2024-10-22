import { create } from 'zustand';

interface useCalculatorStoreProps {
  selectedServiceSegment: null | undefined | any;
  selectedServiceModules: any;
  selectServiceSegment: (serviceSegment: any) => void;
  selectServiceModule: (serviceModule: any) => void;
}

const useCalculatorStore = create<useCalculatorStoreProps>((set, get) => ({
  selectedServiceSegment: null,
  selectedServiceModules: {},
  selectServiceSegment: (serviceSegment) => {
    const currentSelectedServiceSegment = get().selectedServiceSegment;
    const selectedServiceSegment = currentSelectedServiceSegment && currentSelectedServiceSegment._id === serviceSegment._id ? null : serviceSegment

    set({
      selectedServiceSegment,
    });
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
}));

export default useCalculatorStore;
