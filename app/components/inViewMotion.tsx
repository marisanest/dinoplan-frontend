"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {useInView} from 'motion/react'
import {useRef} from "react";
import cn from "clsx";

export default function InViewMotion({children}: ReactNodeProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {margin: "10000000px 0px 0px 0px"})

    return (
        <div ref={ref}
             className={cn(
                 "mt-[100px] mb-[-120px] opacity-0 transition-[margin,opacity] duration-1000",
                 isInView ? "!mt-0 !mb-0 opacity-100" : "!mt-[100px] !mb-[-120px] opacity-0"
             )}
        >
            {children}
        </div>
    );
}