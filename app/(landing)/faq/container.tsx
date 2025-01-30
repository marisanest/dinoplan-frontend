"use client"

import {Element, scroller} from 'react-scroll';
import {ReactNode, useEffect} from "react";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {delay} from "@/lib/utils";

export default function LandingFaqContainer({children}: {children: ReactNode}) {
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const search = searchParams.get('scrollToFaq')

    useEffect(() => {
        const handleScroll = async () => {
            await delay(1000)
            scroller.scrollTo('faq', {
                duration: 1500,
                smooth: true,
                offset: -(72 + 72),
            })

            router.replace(pathname, {scroll: false})
        }

        if (search === '1') {
            handleScroll()
        }
    })

    return (
        <Element name="faq">
            {children}
        </Element>
    );
}