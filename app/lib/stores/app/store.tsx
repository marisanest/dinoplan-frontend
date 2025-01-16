import {createStore} from 'zustand'
import {
  PAGE_SECTION_ABOUT_QUERYResult,
  PAGE_SECTION_FAQ_QUERYResult,
  PAGE_SECTION_SERVICE_FEATURES_QUERYResult,
  PAGE_SECTION_SERVICE_MODULES_QUERYResult,
  PAGE_SECTION_SERVICE_SEGMENTS_QUERYResult,
  PAGE_SECTION_START_QUERYResult, ServiceModule, ServiceSegment
} from "@/lib/types/sanity-types";

export interface AppStoreProps {
  startPageSection: PAGE_SECTION_START_QUERYResult;
  serviceSegmentsPageSection: PAGE_SECTION_SERVICE_SEGMENTS_QUERYResult;
  serviceFeaturesPageSection: PAGE_SECTION_SERVICE_FEATURES_QUERYResult;
  serviceModulesPageSection: PAGE_SECTION_SERVICE_MODULES_QUERYResult;
  aboutPageSection: PAGE_SECTION_ABOUT_QUERYResult;
  faqPageSection: PAGE_SECTION_FAQ_QUERYResult;

  serviceSegments: ServiceSegment[];
  selectedServiceSegmentIndex: number | undefined;
  prevSelectedServiceSegmentIndex: number | undefined;

  serviceModules: ServiceModule[];
  selectedServiceModuleIndex: number | undefined;
  prevSelectedServiceModuleIndex: number;
}

export interface AppStoreActions {
  selectServiceSegment: (serviceSegmentIndex: number) => void;
  selectPrevServiceSegment: () => void;
  selectNextServiceSegment: () => void;

  selectServiceModule: (serviceModuleIndex: number) => void;
}

export interface AppStoreState extends AppStoreProps, AppStoreActions {}

export type AppStore = ReturnType<typeof createAppStore>

export const createAppStore = (initProps: Pick<AppStoreProps, 'startPageSection' | 'serviceSegmentsPageSection' | 'serviceFeaturesPageSection' | 'serviceModulesPageSection' | 'aboutPageSection' | 'faqPageSection'>) => {
  const DEFAULT_PROPS: AppStoreProps = {
    serviceSegments: initProps.serviceSegmentsPageSection?.serviceSegments ? initProps.serviceSegmentsPageSection.serviceSegments.map((s: any) => s?.serviceSegment).filter(Boolean) : [],
    selectedServiceSegmentIndex: 0,
    prevSelectedServiceSegmentIndex: 0,

    serviceModules: initProps.serviceModulesPageSection?.serviceModules ? initProps.serviceModulesPageSection?.serviceModules.map((s: any) => s?.serviceModule).filter(Boolean) : [],
    selectedServiceModuleIndex: 0,
    prevSelectedServiceModuleIndex: 0,

    ...initProps,
  }

  return createStore<AppStoreState>()((set, get) => ({
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


    selectServiceModule: (serviceModuleIndex) => {
      const currentSelectedServiceModuleIndex = get().selectedServiceModuleIndex;

      set({
        selectedServiceModuleIndex: currentSelectedServiceModuleIndex === serviceModuleIndex ? undefined : serviceModuleIndex,
        prevSelectedServiceModuleIndex: currentSelectedServiceModuleIndex,
      });
    },
  }))
}
