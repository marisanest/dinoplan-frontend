import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export type TitleProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "7xl";
    color?: string;
    align?: "left" | "center" | "right";
} & ReactNodeProps

const sizeToClasses: { [key: string]: string } = {
    '7xl': 'text-5xl xs:text-6xl sm:text-7xl font-medium',
    xl: 'text-4xl sm:text-5xl font-medium',
    lg: 'text-2xl sm:text-3xl font-medium',
    md: 'text-xl font-medium',
    sm: 'text-lg font-medium',
    xs: 'text-base font-regular',
}

const alignToClasses: { [key: string]: string } = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right',
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
