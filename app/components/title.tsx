import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export type TitleProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
    align?: "left" | "center" | "right";
} & ReactNodeProps

const sizeToClasses: { [key: string]: string } = {
    xl: 'text-5xl font-medium',
    lg: 'text-3xl font-medium',
    md: 'text-xl font-medium',
    sm: 'text-lg font-medium',
    xs: 'text-base font-regular',
}

const alignToClasses: { [key: string]: string } = {
    left: 'justify-start',
    center: 'justify-center text-center',
    right: 'justify-end',
}

export default function Title({className, children, size = 'xl', color = 'text-blue-600', align = 'center'}: TitleProps) {
    return (
        <TitleContainer className={cn(className, sizeToClasses[size], color, alignToClasses[align])}>
            {children}
        </TitleContainer>
    );
}

function TitleContainer({className, children}: ReactNodeProps) {
    return (
        <div className={cn("flex items-center w-full !font-afacad", className)}>
            {children}
        </div>
    );
}
