import {LinkType, ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import Link from "@/components/link";

export type ButtonProps = {
    size?: 'base' | 'sm';
    colors?: 'default' | 'red' | 'blue' | 'orange';
    link?: LinkType;
    type?: string
    disabled?: boolean;
    onClick?: () => void;
} & ReactNodeProps;

const colorsToClasses = {
    default: 'border-blue-600 text-blue-600 hover:border-red-200 hover:bg-red-200 hover:text-yellow-100',
    red: 'border-red-200 bg-red-200 text-yellow-100 hover:border-red-200-faded hover:bg-red-200-faded',
    blue: 'border-blue bg-blue text-yellow-100 hover:bg-blue-600-faded hover:border-blue-600-faded',
    orange: 'border-orange bg-orange text-yellow-100 hover:bg-orange-faded hover:border-orange-faded',
}

const sizesToClasses = {
    base: 'h-[60px] border-[3px] text-lg',
    sm: 'h-[55px] border-[3px] text-lg',
}

export default function FormButton({ className, children, size = 'base', colors = 'default', link, type = 'submit', disabled = false, onClick }: ButtonProps) {
    const containerClassName = cn(
        "rounded-full border-[3px] text-lg cursor-pointer transition-colors",
        sizesToClasses[size],
        colorsToClasses[colors],
        className
    )
    const childrenClassName = "px-[2rem] flex justify-center items-center";

    if (link) {
        children = <Link className={childrenClassName} link={link}>{children}</Link>
    } else {
        children = <div className={childrenClassName}>{children}</div>
    }

    if (onClick) {
        return <ButtonOnClickContainer className={containerClassName} type={type} disabled={disabled} onClick={onClick}>{children}</ButtonOnClickContainer>
    } else {
        return <ButtonPlainContainer className={containerClassName} type={type} disabled={disabled} >{children}</ButtonPlainContainer>
    }
}

function ButtonOnClickContainer({ className, children, type, disabled, onClick }: {onClick: () => void} & ReactNodeProps) {
    return (
        <button className={className} onClick={onClick} disabled={disabled} type={type} >
            {children}
        </button>
    );
}

function ButtonPlainContainer({ className, children, type, disabled }: ReactNodeProps) {
    return (
        <button className={className} type={type} disabled={disabled} >
            {children}
        </button>
    );
}
