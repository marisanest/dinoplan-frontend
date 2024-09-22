import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx"

type BannerProps = {
    fixed?: boolean;
    isHeader?: boolean;
}

export default function Banner({ className = "bg-yellow-100", fixed = false, isHeader = false, children }: BannerProps & ReactNodeProps) {
    const compiledClassName = cn('h-20 px-10 rounded-full flex justify-between items-center w-full', className, fixed ? 'z-50 fixed left-0 right-0 top-0' : '')

    return (
        <>
            {isHeader ? (
                <header className={compiledClassName}>
                    {children}
                </header>
            ) : (
                <div className={compiledClassName}>
                    {children}
                </div>
            )}
        </>
    );
}
