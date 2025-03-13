import { createStore } from 'zustand'
import {RefObject} from "react";
import {WindowSizeType} from "@/lib/types/core";

export interface InfoBoxProps {
  windowSize: WindowSizeType;
  isInfoBoxOpen: boolean;
  toggleRef: null | RefObject<any>;
  infoBoxText: any | null | undefined;
}

export interface InfoBoxPropsActions {
  setWindowSize: (newWindowSize: WindowSizeType) => void;
  closeInfoBox: () => void;
  openInfoBox: () => void;
  toggleInfoBoxIsOpen: () => void;
  setToggleRef: (toggleRef: RefObject<any>) => void;
  setInfoBoxText: (text: any) => void;
}

export interface InfoBoxState extends InfoBoxProps, InfoBoxPropsActions {}

export type InfoBoxStore = ReturnType<typeof createInfoBoxStore>

export const createInfoBoxStore = (initProps?: Partial<InfoBoxProps>) => {
  const DEFAULT_PROPS: InfoBoxProps = {
    windowSize: {width: null, height: null},
    isInfoBoxOpen: false,
    toggleRef: null,
    infoBoxText: undefined,
  }

  return createStore<InfoBoxState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setWindowSize: (windowSize) => set({ windowSize }),
    closeInfoBox: () => set({ isInfoBoxOpen: false }),
    openInfoBox: () => set({ isInfoBoxOpen: true }),
    toggleInfoBoxIsOpen: () => set(({isInfoBoxOpen}) => ({isInfoBoxOpen: !isInfoBoxOpen})),
    setToggleRef: (toggleRef) => set({ toggleRef }),
    setInfoBoxText: (infoBoxText) => set({infoBoxText}),
  }))
}