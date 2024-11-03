import { createContext, PropsWithChildren } from 'react'

import { useRef } from 'react'
import { useContext } from 'react'
import { useStore } from 'zustand'
import {createWindowSizeStore, WindowSizeProps, WindowSizeState, WindowSizeStore} from "@/lib/stores/windowSize/store";

type WindowSizeProviderProps = PropsWithChildren<Partial<WindowSizeProps>>
export const Context = createContext<WindowSizeStore | null>(null)

export function WindowSizeProvider({ children, ...props }: WindowSizeProviderProps) {
  const storeRef = useRef<WindowSizeStore>()
  if (!storeRef.current) {
    storeRef.current = createWindowSizeStore(props)
  }
  return (
      <Context.Provider value={storeRef.current}>
        {children}
      </Context.Provider>
  )
}

export function useWindowSizeContext<T>(selector: (state: WindowSizeState) => T): T {
  const store = useContext(Context)
  if (!store) throw new Error('Missing WindowSize.Provider in the tree')
  return useStore(store, selector)
}