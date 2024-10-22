import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx"

type BannerProps = {
    fixed?: boolean;
    isHeader?: boolean;
    isFooter?: boolean;
}

export default function Banner({ className = "bg-yellow-100", fixed = false, isHeader = false, isFooter = false, children }: BannerProps & ReactNodeProps) {
    className = cn('h-[5.5rem] px-[4rem] rounded-full flex justify-between items-center w-full', className, fixed ? 'z-50 fixed left-0 right-0 top-0' : '')

    if (isHeader) {
        return (
            <header className={className}>
                {children}
            </header>
        )
    } else if (isFooter) {
        return (
            <footer className={className}>
                {children}
            </footer>
        )
    } else {
        return (
            <div className={className}>
            {children}
            </div>
        )
    }
}
