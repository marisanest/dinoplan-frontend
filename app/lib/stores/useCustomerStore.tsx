import { create } from 'zustand';

export type useCustomerStoreProps = {
  id: string | undefined;
  childName: string | undefined;
  childDateOfBirth: Date | undefined;
  email: string | undefined;
  update: (data: any) => void;
}

const useCustomerStore = create<useCustomerStoreProps>(
    (set, _) => ({
      id: undefined,
      childName: undefined,
      childDateOfBirth: undefined,
      email: undefined,
      update: (data: any) => set({...data})
    }),
);

export default useCustomerStore;
