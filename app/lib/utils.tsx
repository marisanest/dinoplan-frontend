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