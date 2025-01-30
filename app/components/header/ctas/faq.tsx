"use client"

import Text from "@/components/text/text";
// @ts-ignore
import { Link } from 'react-scroll';
import { usePathname } from 'next/navigation'
import InternalLink from "@/components/link/internal";


export default function HeaderCtasFaq() {
    const pathname = usePathname()
    const text = <Text key="text" className="hover:text-blue-600-faded transition-colors" size="md">Fragen?</Text>

    if (pathname !== '/') {
        return (
            <InternalLink key="internal-link" className="hidden ss:inline-block" href="/?scrollToFaq=1" scroll>
                {text}
            </InternalLink>
        )
    } else {
        return (
            <Link
                key="scroll-link"
                className="cursor-pointer hidden ss:inline-block"
                to="faq"
                smooth={true}
                offset={-(72+72)}
                duration={1500}
            >
                {text}
            </Link>
        );
    }
}
