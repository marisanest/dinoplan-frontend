"use client"

import {
    createContext,
    useContext,
    useRef,
    PropsWithChildren,
} from 'react';

import { useStore } from 'zustand'
import {AppStore, AppStoreProps, AppStoreState, createAppStore} from "@/lib/stores/app/store";

type AppProviderProps = PropsWithChildren<Pick<AppStoreProps, 'startPageSection' | 'serviceSegmentsPageSection' | 'serviceFeaturesPageSection' | 'serviceModulesPageSection' | 'aboutPageSection' | 'faqPageSection'>>
const AppContext = createContext<AppStore | null>(null)

export const AppProvider = ({children, ...props}: AppProviderProps) =>{

    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = createAppStore({...props});
    }

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