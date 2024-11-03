import { create } from 'zustand';

interface useOverlayMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    toggleOpen: () => void;
}

const useOverlayMenu = create<useOverlayMenuProps>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
    toggleOpen: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
}));

export default useOverlayMenu;
