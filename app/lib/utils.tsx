export const delay = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));

export function stringDateToDate(formDate: string): Date | null {
    try {
        const [day, month, year] = formDate.split('.')
        return new Date(Date.parse(`${year}-${month}-${day} 00:00:00 GMT`))
    } catch (error) {
        console.error(error)
    }

    return null
}

export function dateToString(date: Date): string {
    return `${date.getUTCDate()}.${zeroPad(date.getUTCMonth()+1)}.${date.getUTCFullYear()}`
}

export function zeroPad(num: number, places: number = 2): string {
    return String(num).padStart(places, '0');
}

export function toMonetary(num: number, places: number = 2): string {
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