import { create } from 'zustand';
import {persist} from "zustand/middleware";

export type useCustomerStoreProps = {
  id: string | undefined;
  childName: string | undefined;
  childDateOfBirth: Date | undefined;
  email: string | undefined;
  update: (data: any) => void;
}

const useCustomerStore = create(
    persist(
        (set, _) => ({
          id: undefined,
          childName: undefined,
          childDateOfBirth: undefined,
          email: undefined,
          update: (data: any) => set({...data})
        }),
        {
          name: 'customerStore',
        },
    )
);

export default useCustomerStore;
