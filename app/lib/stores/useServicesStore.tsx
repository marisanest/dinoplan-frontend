import { create } from 'zustand';
import {ServiceType} from "@/lib/types/core";

export type UseServicesStoreProps = {
  selectedService: null | undefined | ServiceType;
  selectService: (service: ServiceType) => void;
}

const useServicesStore = create<UseServicesStoreProps>((set, get) => ({
  selectedService: null,
  selectService: (service) => {
    const selectedService = get().selectedService;
    const nextSelectedService = selectedService && selectedService.id === service.id ? null : service

    set({
      selectedService: nextSelectedService,
    });
  },
}));

export default useServicesStore;
