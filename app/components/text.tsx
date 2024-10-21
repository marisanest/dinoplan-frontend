import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export type TextProps = {
    trustedHtml: string | TrustedHTML | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
    align?: "left" | "center" | "right";
} & ReactNodeProps

const sizeToClasses: { [key: string]: string } = {
    xs: 'font-normal text-xs',
    sm: 'font-normal text-sm',
    md: 'font-light text-md',
    lg: 'font-normal text-lg',
    xl: 'font-normal text-xl',
}

const alignToClasses: { [key: string]: string } = {
    left: 'justify-start',
    center: 'justify-center text-center',
    right: 'justify-end',
}

export default function RichText({className, trustedHtml, size = 'lg', color = 'text-blue-600', align = 'center'}: TextProps) {
    return (
        <RichTextContainer
            className={cn(className, sizeToClasses[size], color, alignToClasses[align])}
            trustedHtml={trustedHtml}
        />
    );
}

function RichTextContainer({className, trustedHtml}: Pick<TextProps, 'trustedHtml'> & ReactNodeProps) {
    return (
        <p className={cn("flex items-center w-full", className)} dangerouslySetInnerHTML={{ __html: trustedHtml ?? '' }} />
    );
}
