import { createStore } from 'zustand'

export interface WindowSizeProps {
  width: number | undefined;
  height: number | undefined;
}

export interface WindowSizePropsActions {

}

export interface WindowSizeState extends WindowSizeProps, WindowSizePropsActions {}

export type WindowSizeStore = ReturnType<typeof createWindowSizeStore>

export const createWindowSizeStore = (initProps?: Partial<WindowSizeProps>) => {
  const DEFAULT_PROPS: WindowSizeProps = {
    width: undefined,
    height: undefined,
  }

  return createStore<WindowSizeState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
  }))
}