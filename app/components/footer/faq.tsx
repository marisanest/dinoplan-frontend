"use client"

import Text from "@/components/text/text";
import { Link } from 'react-scroll';

export default function FooterFaq() {
    return (
        <Link
            className="cursor-pointer hidden ss:inline-block"
            to="faq"
            spy={true}
            smooth={true}
            offset={-(72+72)}
            duration={700}
        >
            <Text className="hover:text-blue-600-faded transition-colors" size="md">Fragen?</Text>
        </Link>
    );
}
