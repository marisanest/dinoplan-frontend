import {LinkType, ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import Link from "@/components/link";

export type ButtonProps = {
    size?: 'base' | 'sm';
    colors?: 'default' | 'red' | 'blue' | 'orange';
    link?: LinkType;
    onClick?: () => void;
} & ReactNodeProps;

const colorsToClasses = {
    default: 'border-blue-600 text-blue-600 hover:border-red-200 hover:bg-red-200 hover:text-yellow-100',
    red: 'border-red-200 bg-red-200 text-yellow-100 hover:border-red-200-faded hover:bg-red-200-faded',
    blue: 'border-blue bg-blue text-yellow-100',
    orange: 'border-orange bg-orange text-yellow-100',
}

const sizesToClasses = {
    base: 'h-[60px] border-[3px] text-lg',
    sm: 'h-[50px] border-[3px] text-lg',
}

const sizesToChildrenClasses = {
    base: 'px-[2rem]',
    sm: 'px-[1rem]',
}

export default function Button({ className, children, size = 'base', colors = 'default', link, onClick }: ButtonProps) {
    const containerClassName = cn(
        "rounded-full cursor-pointer transition-colors",
        sizesToClasses[size],
        colorsToClasses[colors],
        className
    )
    const childrenClassName = cn("h-full flex justify-center items-center", sizesToChildrenClasses[size]);

    if (link) {
        children = <Link className={childrenClassName} link={link} >{children}</Link>
    } else {
        children = <div className={childrenClassName}>{children}</div>
    }

    if (onClick) {
        return <ButtonOnClickContainer className={containerClassName} onClick={onClick}>{children}</ButtonOnClickContainer>
    } else {
        return <ButtonPlainContainer className={containerClassName}>{children}</ButtonPlainContainer>
    }
}

function ButtonOnClickContainer({ className, children, onClick }: {onClick: () => void} & ReactNodeProps) {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
}

function ButtonPlainContainer({ className, children }: ReactNodeProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
