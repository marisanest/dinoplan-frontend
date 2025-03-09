"use client"
import { usePathname } from 'next/navigation'
import {ReactNodeProps} from "@/lib/types/core";

export default function FooterContainer({ children }: ReactNodeProps) {
    const pathname = usePathname()
    let bgColor = ""

    if (pathname.includes('rechner/') || pathname.includes('kalender')) {
        bgColor = 'bg-orange-400'
    } else if (pathname.includes('impressum') || pathname.includes('datenschutz')) {
        bgColor = 'bg-orange-300'
    }

    return (
        <footer className={bgColor}>
            {children}
        </footer>
    );
}
