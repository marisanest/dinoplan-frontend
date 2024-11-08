import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx"

type BannerProps = {
    fixed?: boolean;
    isHeader?: boolean;
    isFooter?: boolean;
}

export default function Banner({ className = "bg-yellow-100", fixed = false, isHeader = false, isFooter = false, children }: BannerProps & ReactNodeProps) {
    className = cn('w-[100dvw] max-w-[100dvw] overflow-x-hidden flex justify-center rounded-full', className, fixed ? 'z-50 fixed left-0 right-0 top-0' : '')

    if (isHeader) {
        return (
            <header className={className}>
                <div className="sm:w-md sm:max-w-md h-banner flex justify-between items-center">
                    {children}
                </div>
            </header>
    )
    } else if (isFooter) {
        return (
            <div className={className}>
                <div className="sm:w-md sm:max-w-md h-banner flex justify-between items-center">
                    {children}
                </div>
            </div>
    )
    } else {
        return (
            <div className={className}>
                <div className="sm:w-md sm:max-w-md h-banner">
                    {children}
                </div>
            </div>
        )
    }
}
