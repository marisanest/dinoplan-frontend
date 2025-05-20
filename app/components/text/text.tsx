import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export type TextProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "blue" | "yellow" | "red" | "none";
    align?: "left" | "center" | "right";
    isFlexCol?: boolean;
} & ReactNodeProps

const sizeToClasses: { [key: string]: string } = {
    xs: 'font-normal text-xs',
    sm: 'font-normal text-sm',
    md: 'font-normal text-sm sm:text-base',
    lg: 'font-normal text-base sm:text-lg',
    xl: 'font-normal text-[18px]',
}

const alignToClasses: { [key: string]: string } = {
    left: 'justify-start items-center text-left',
    center: 'justify-center text-center items-center',
    right: 'justify-end items-center text-right',
}

const alignToClassesFlexCol: { [key: string]: string } = {
    left: 'items-start justify-center text-left',
    center: 'items-center justify-center text-center',
    right: 'items-end justify-center text-right',
}

const colorToClasses: { [key: string]: string } = {
    blue: 'text-blue-600',
    yellow: 'text-yellow-100',
    red: 'text-red-500',
}

export default function Text({className, children, size = 'lg', color = 'blue', align = 'center', isFlexCol = false}: TextProps) {
    return (
        <div className={cn("flex w-full", className, sizeToClasses[size], colorToClasses[color], isFlexCol ? alignToClassesFlexCol[align] : alignToClasses[align], isFlexCol && 'flex-col')}>
            {children}
        </div>
    );
}
