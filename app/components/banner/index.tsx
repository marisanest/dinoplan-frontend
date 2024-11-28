import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx"

type BannerProps = {
    isHeader?: boolean;
    isFooter?: boolean;
}

export default function Banner({ className = "bg-yellow-100", isHeader = false, isFooter = false, children }: BannerProps & ReactNodeProps) {
    className = cn('w-[100dvw] max-w-[100dvw] overflow-x-hidden flex justify-center rounded-full px-x-outer', className)
    const innerClassName = "w-full max-w-md min-h-banner h-banner flex justify-between items-center"

    if (isHeader) {
        return (
            <header className={cn(className, 'z-50 fixed left-0 right-0 top-0')}>
                <div className={innerClassName}>
                    {children}
                </div>
            </header>
    )
    } else if (isFooter) {
        return (
            <div className={className}>
                <div className={innerClassName}>
                    {children}
                </div>
            </div>
    )
    } else {
        return (
            <div className={className}>
                <div className={innerClassName}>
                    {children}
                </div>
            </div>
        )
    }
}
