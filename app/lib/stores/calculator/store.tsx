import {createStore} from 'zustand'
import {
  CostCalculation,
  Customer,
  ServiceSegment
} from "@/lib/types/sanity-types";
import {WindowSizeType} from "@/lib/types/core";

export interface CalculatorStoreProps {
  windowSize: WindowSizeType;

  customer: Customer | undefined;
  costCalculation: CostCalculation | undefined;

  serviceSegments: ServiceSegment[];
  selectedServiceSegmentIndex: number | undefined;
  prevSelectedServiceSegmentIndex: number | undefined;
  selectedServiceModules: any;
}

export interface CalculatorStoreActions {
  setWindowSize: (windowSize: WindowSizeType) => void;
  setCustomer: (customer: Customer) => void;
  selectServiceSegment: (serviceSegmentIndex: number) => void;
  selectPrevServiceSegment: () => void;
  selectNextServiceSegment: () => void;
  selectServiceModule: (serviceModule: any) => void;
}

export interface CalculatorStoreState extends CalculatorStoreProps, CalculatorStoreActions {}

export type CalculatorStore = ReturnType<typeof createCalculatorStore>

export const createCalculatorStore = (initProps: CalculatorStoreProps) => {
  const DEFAULT_PROPS: CalculatorStoreProps = {
    windowSize: {width: null, height: null},
    customer: undefined,
    costCalculation: undefined,
    selectedServiceSegmentIndex: 0,
    prevSelectedServiceSegmentIndex: 0,
    selectedServiceModules: {},
    serviceSegments: [],
  }

  return createStore<CalculatorStoreState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    serviceSegments: initProps.serviceSegments ? extractCostPerMonthForInsurance(initProps.serviceSegments.map((s: any) => s.serviceSegment)) : [],
    setWindowSize: (windowSize: WindowSizeType) => set({windowSize}),
    setCustomer: (customer: Customer) => set({customer}),
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

function extractCostPerMonthForInsurance(serviceSegments: any) {

  serviceSegments.map((serviceSegment: any) => {
    serviceSegment.serviceModules.map((serviceModule: any) => {
      const costPerMonthForInsurance = {}
      if (serviceModule.serviceModule.costPerMonthForInsurance) {
        Object.entries(serviceModule.serviceModule.costPerMonthForInsurance).forEach(([key, cost]) => {
          const age = key.split('_')[1]
          costPerMonthForInsurance[age] = cost
        })

        serviceModule.serviceModule.extractedCostPerMonthForInsurance = costPerMonthForInsurance
      }
    })
  })

  return serviceSegments
}

