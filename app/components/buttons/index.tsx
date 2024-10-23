import {LinkType, ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import Link from "@/components/link";

export type ButtonProps = {
    size?: 'base' | 'sm';
    colors?: 'default' | 'red' | 'blue' | 'orange' | 'bright';
    link?: LinkType;
    onClick?: () => void;
    unresponsive?: boolean;
} & ReactNodeProps;

const colorsToClasses = {
    default: 'border-blue-600 text-blue-600 hover:border-red-200 hover:bg-red-200 hover:text-yellow-100',
    red: 'border-red-200 bg-red-200 text-yellow-100 hover:border-red-200-faded hover:bg-red-200-faded',
    blue: 'border-blue bg-blue text-yellow-100',
    orange: 'border-orange bg-orange text-yellow-100 hover:bg-orange-faded hover:border-orange-faded',
    bright: 'border-orange-200 bg-orange-200 text-blue-600 hover:border-orange-200-faded hover:bg-orange-200-faded'
}

const  responsiveSizesToClasses = {
    base: 'h-[45px] sm:h-[60px] border-[2px] sm:border-[3px] text-base sm:text-lg',
    sm: 'h-[55px] border-[3px] text-lg',
}

const sizesToClasses = {
    base: 'h-[60px] border-[3px] text-base',
    sm: 'h-[55px] border-[3px] text-lg',
}

const responsiveToChildrenClasses = {
    base: 'px-[1rem] sm:px-[2rem]',
    sm: 'px-[2rem]',
}

const sizesToChildrenClasses = {
    base: 'px-[2rem]',
    sm: 'px-[2rem]',
}

export default function Button({ className, children, size = 'base', colors = 'default', link, onClick, unresponsive = false }: ButtonProps) {
    const containerClassName = cn(
        "rounded-full cursor-pointer transition-colors",
        unresponsive ? sizesToClasses[size] : responsiveSizesToClasses[size],
        colorsToClasses[colors],
        className
    )
    const childrenClassName = cn("h-full flex justify-center items-center", unresponsive ? sizesToChildrenClasses[size] : responsiveToChildrenClasses[size]);

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