"use client"

import {
  createContext,
  useContext,
  useRef,
  PropsWithChildren, useEffect
} from "react";

import { useStore } from 'zustand'
import {AppStore, AppStoreProps, AppStoreState, createAppStore} from "@/lib/stores/app/store";
import {useWindowSize, useOrientation} from "@uidotdev/usehooks";

type AppProviderProps = PropsWithChildren<Pick<AppStoreProps, 'startPageSection' | 'serviceSegmentsPageSection' | 'serviceFeaturesPageSection' | 'serviceModulesPageSection' | 'aboutPageSection' | 'faqPageSection' | 'contact'>>
const AppContext = createContext<AppStore | null>(null)

export const AppProvider = ({children, ...props}: AppProviderProps) =>{
  const windowSize = useWindowSize()

    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = createAppStore({windowSize, ...props});
    }

  useEffect(() => {
    storeRef?.current?.getState().setWindowSize(windowSize)
  }, [windowSize]);

    return (
        <AppContext.Provider value={storeRef.current}>
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext<T>(selector: (state: AppStoreState) => T): T {
    const store = useContext(AppContext)

    if (!store) {
        throw new Error(
            'useAppContext must be used within an AppContext.Provider'
        );
    }

    return useStore(store, selector)
}