"use client"
import { usePathname } from 'next/navigation'
import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export default function FooterContainer({ children }: ReactNodeProps) {
    const pathname = usePathname()
    return (
        <div className={cn(pathname === '/' ? '' : 'bg-orange-300')}>
            {children}
        </div>
    );
}
