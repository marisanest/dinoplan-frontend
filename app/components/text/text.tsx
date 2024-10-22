import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export type TextProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "blue" | "yellow";
    align?: "left" | "center" | "right";
    isFlexCol?: boolean;
} & ReactNodeProps

const sizeToClasses: { [key: string]: string } = {
    xs: 'font-normal text-xs',
    sm: 'font-light text-sm',
    md: 'font-light text-md',
    lg: 'font-normal text-lg',
    xl: 'font-normal text-xl',
}

const alignToClasses: { [key: string]: string } = {
    left: 'justify-start items-center',
    center: 'justify-center text-center items-center',
    right: 'justify-end items-center',
}

const alignToClassesFlexCol: { [key: string]: string } = {
    left: 'items-start justify-center',
    center: 'items-center justify-center text-center',
    right: 'items-end justify-center',
}

const colorToClasses: { [key: string]: string } = {
    blue: 'text-blue-600',
    yellow: 'text-yellow-100 ',
}

export default function Text({className, children, size = 'lg', color = 'blue', align = 'center', isFlexCol = false}: TextProps) {
    return (
        <TextContainer className={cn(className, sizeToClasses[size], colorToClasses[color], isFlexCol ? alignToClassesFlexCol[align] : alignToClasses[align], isFlexCol && 'flex-col')}>
            {children}
        </TextContainer>
    );
}

function TextContainer({className, children}: ReactNodeProps) {
    return (
        <div className={cn("flex w-full", className)}>
            {children}
        </div>
    );
}
