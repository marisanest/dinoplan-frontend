"use client"

import {createContext, PropsWithChildren, useEffect} from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { useStore } from 'zustand'
import {createInfoBoxStore, InfoBoxProps, InfoBoxState, InfoBoxStore} from "@/lib/stores/infoBox/store";
import {useWindowSize} from "@uidotdev/usehooks";

type InfoBoxProviderProps = PropsWithChildren<Partial<InfoBoxProps>>
export const Context = createContext<InfoBoxStore | null>(null)

export function InfoBoxProvider({ children, ...props }: InfoBoxProviderProps) {
  const storeRef = useRef<InfoBoxStore>()
  const windowSize = useWindowSize()

  if (!storeRef.current) {
    storeRef.current = createInfoBoxStore({...props, windowSize});
  }

  useEffect(() => {
    storeRef?.current?.getState().setWindowSize(windowSize)
  }, [windowSize]);

  return (
      <Context.Provider value={storeRef.current}>
        {children}
      </Context.Provider>
  )
}

export function useInfoBoxContext<T>(selector: (state: InfoBoxState) => T): T {
  const store = useContext(Context)
  if (!store) throw new Error('Missing InfoBox.Provider in the tree')
  return useStore(store, selector)
}