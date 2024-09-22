"use client"

import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export type ButtonProps = {
    label?: string;
} & ReactNodeProps;

export default function Button({ className, label }: ButtonProps) {
    return (
        <div className={cn("rounded-full h-[60px] px-[2rem] flex justify-center items-center border-[3px] border-blue-600 text-blue-600 text-lg hover:border-red-200 hover:bg-red-200 hover:text-yellow-100 cursor-pointer transition-colors", className)}>
            {label}
        </div>
    );
}

