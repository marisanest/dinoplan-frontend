'use client';

import BurgerIcon from "@/components/icons/burger";
import useOverlayMenu from "@/lib/stores/useOverlayMenuStore";
import {useShallow} from "zustand/react/shallow";

export default function HeaderBurgerIcon() {
    const { toggleOpen, isOpen } = useOverlayMenu(
        useShallow((state) => ({
            toggleOpen: state.toggleOpen,
            isOpen: state.isOpen,
        })),
    );

    return (
        <div className="flex ss:hidden h-full items-center">
            <BurgerIcon isActive={isOpen} toggleActive={toggleOpen}/>
        </div>
    );
}
