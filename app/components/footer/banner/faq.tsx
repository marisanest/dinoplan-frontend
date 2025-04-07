"use client"

import Text from "@/components/text/text";
// @ts-ignore
import { Link } from 'react-scroll';
import { usePathname } from 'next/navigation'
import InternalLink from "@/components/link/internal";

export default function FooterBannerFaq() {
    const pathname = usePathname()
    const text = <Text key="text" className="hover:text-brown-200 transition-colors" size="md">Fragen?</Text>

    if (pathname !== '/') {
        return (
            <InternalLink key="internal-link"
                          className="inline-block"
                          href="/?scrollToFaq=1"
                          scroll>
                {text}
            </InternalLink>
        )
    } else {
        return (
        <Link key="scroll-link"
              className="cursor-pointer inline-block"
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