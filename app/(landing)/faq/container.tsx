"use client"

import {Element} from 'react-scroll';
import {ReactNode} from "react";

export default function LandingFaqContainer({children}: {children: ReactNode}) {
    return (
        <Element name="faq">
            {children}
        </Element>
    );
}