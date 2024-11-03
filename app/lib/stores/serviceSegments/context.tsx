import { createContext, PropsWithChildren } from 'react'
import {
  createServiceSegmentsStore,
  ServiceSegmentsProps, ServiceSegmentsState,
  ServiceSegmentsStore
} from "@/lib/stores/serviceSegments/store";
import { useRef } from 'react'
import { useContext } from 'react'
import { useStore } from 'zustand'

type ServiceSegmentsProviderProps = PropsWithChildren<Partial<ServiceSegmentsProps>>
export const Context = createContext<ServiceSegmentsStore | null>(null)

export function ServiceSegmentsProvider({ children, ...props }: ServiceSegmentsProviderProps) {
  const storeRef = useRef<ServiceSegmentsStore>()
  if (!storeRef.current) {
    storeRef.current = createServiceSegmentsStore(props)
  }
  return (
      <Context.Provider value={storeRef.current}>
        {children}
      </Context.Provider>
  )
}

export function useServiceSegmentsContext<T>(selector: (state: ServiceSegmentsState) => T): T {
  const store = useContext(Context)
  if (!store) throw new Error('Missing ServiceSegmentsContext.Provider in the tree')
  return useStore(store, selector)
}