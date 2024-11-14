import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx"

type BannerProps = {
    isHeader?: boolean;
    isFooter?: boolean;
}

export default function Banner({ className = "bg-yellow-100", isHeader = false, isFooter = false, children }: BannerProps & ReactNodeProps) {
    className = cn('w-[100dvw] max-w-[100dvw] overflow-x-hidden flex justify-center rounded-full', className)

    if (isHeader) {
        return (
            <header className={cn(className, 'z-50 fixed left-0 right-0 top-0')}>
                <div className="w-full sm:w-md sm:max-w-md h-banner flex justify-between items-center px-x-xs">
                    {children}
                </div>
            </header>
    )
    } else if (isFooter) {
        return (
            <div className={className}>
                <div className="w-full sm:w-md sm:max-w-md h-banner flex justify-between items-center px-x-xs">
                    {children}
                </div>
            </div>
    )
    } else {
        return (
            <div className={className}>
                <div className="w-full sm:w-md sm:max-w-md h-banner px-x-xs">
                    {children}
                </div>
            </div>
        )
    }
}
