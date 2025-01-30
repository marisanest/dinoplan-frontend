"use client"

import {
    createContext,
    useContext,
    useRef,
    PropsWithChildren,
} from 'react';

import { useStore } from 'zustand'
import {CalculatorStore, CalculatorStoreProps, CalculatorStoreState, createCalculatorStore} from "@/lib/stores/calculator/store";

type CalculatorProviderProps = PropsWithChildren<Pick<CalculatorStoreProps, 'serviceSegments'>>
const CalculatorContext = createContext<CalculatorStore | null>(null)

export const CalculatorProvider = ({children, ...props}: CalculatorProviderProps) =>{

    const storeRef = useRef<CalculatorStore>()
    if (!storeRef.current) {
        storeRef.current = createCalculatorStore({...props});
    }

    return (
        <CalculatorContext.Provider value={storeRef.current}>
            {children}
        </CalculatorContext.Provider>
    );
};

export function useCalculatorContext<T>(selector: (state: CalculatorStoreState) => T): T {
    const store = useContext(CalculatorContext)

    if (!store) {
        throw new Error(
            'useCalculatorContext must be used within an CalculatorContext.Provider'
        );
    }

    return useStore(store, selector)
}