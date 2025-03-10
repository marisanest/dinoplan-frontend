import {useEffect} from "react";

export const delay = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));

export function toMonetary(num: number): string {
    const [euros, cents] = String(num).split('.')

    return `${euros},${typeof cents === "string" ? cents.padEnd(2, '0') : '00'}`;
}

export const RESPONSIVE_SIZE_BREAKPOINT_LG = 1245
export const RESPONSIVE_SIZE_BREAKPOINT_MD = 1150
export const RESPONSIVE_SIZE_BREAKPOINT_SM = 1045
export const RESPONSIVE_SIZE_BREAKPOINT_S = 980
export const RESPONSIVE_SIZE_BREAKPOINT_SS = 820
export const RESPONSIVE_SIZE_BREAKPOINT_XS = 470
export const RESPONSIVE_SIZE_BREAKPOINT_XXS = 405

export function getResponsiveSizeIdentifier(width: number | null | undefined): string | null {
    if (width === null || width === undefined) {
        return null
    } else if (width >= RESPONSIVE_SIZE_BREAKPOINT_LG) {
        return 'lg'
    } else if (width >= RESPONSIVE_SIZE_BREAKPOINT_MD && width < RESPONSIVE_SIZE_BREAKPOINT_LG) {
        return 'md'
    } else if (width >= RESPONSIVE_SIZE_BREAKPOINT_SM && width < RESPONSIVE_SIZE_BREAKPOINT_MD) {
        return 'sm'
    } else if (width >= RESPONSIVE_SIZE_BREAKPOINT_S && width < RESPONSIVE_SIZE_BREAKPOINT_SM) {
        return 's'
    } else if (width >= RESPONSIVE_SIZE_BREAKPOINT_SS && width < RESPONSIVE_SIZE_BREAKPOINT_S) {
        return 'ss'
    } else if (width >= RESPONSIVE_SIZE_BREAKPOINT_XS && width < RESPONSIVE_SIZE_BREAKPOINT_SS) {
        return 'xs'
    } else if (width >= RESPONSIVE_SIZE_BREAKPOINT_XXS && width < RESPONSIVE_SIZE_BREAKPOINT_XS) {
        return 'xxs'
    } else {
        return 'xxxs'
    }
}

export function useOutsideClickHandler(refs: any[], onOutsideClick: () => void) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            let isOutsideClick = true

            refs.forEach(ref => {
                if (ref?.current && ref.current.contains(event.target))
                    isOutsideClick = false
            })

            if (isOutsideClick)
                onOutsideClick()
        }

        document.addEventListener("pointerdown", handleClickOutside);
        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, [refs]);
}