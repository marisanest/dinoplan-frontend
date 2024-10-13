import { create } from 'zustand';
import {ServiceModule} from "@/lib/types/sanity-types";

export type useServiceModulesStoreProps = {
  selectedServiceModule: null | undefined | ServiceModule;
  selectServiceModule: (serviceModule: ServiceModule) => void;
}

const useServiceModulesStore = create<useServiceModulesStoreProps>((set, get) => ({
  selectedServiceModule: null,
  selectServiceModule: (serviceModule) => {
    const currentSelectedServiceModule = get().selectedServiceModule;
    const selectedServiceModule = currentSelectedServiceModule && currentSelectedServiceModule._id === serviceModule._id ? null : serviceModule

    set({
      selectedServiceModule,
    });
  },
}));

export default useServiceModulesStore;
