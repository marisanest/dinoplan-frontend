import {LinkType, ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import Link from "@/components/link";

export type ButtonProps = {
    size?: 'md' | 'sm' | 'xs';
    color?: 'default' | 'red' | 'blue' | 'orange' | 'bright';
    link?: LinkType;
    type?: string
    disabled?: boolean;
    onClick?: () => void;
    unresponsive?: boolean;
} & ReactNodeProps;

const colorToClasses = {
    default: {
        enabled: 'border-blue-600 text-blue-600 hover:border-red-200 hover:bg-red-200 hover:text-yellow-100',
        disabled: 'border-red-200 bg-red-200 text-yellow-100',
    },
    red: {
        enabled: 'border-red-200 bg-red-200 text-yellow-100 hover:border-red-200-faded hover:bg-red-200-faded',
        disabled: 'border-red-200-faded bg-red-200-faded text-yellow-100',
    },
    blue: {
        enabled: 'border-blue bg-blue text-yellow-100 hover:bg-blue-600-faded hover:border-blue-600-faded',
        disabled: 'bg-blue-600-faded border-blue-600-faded text-yellow-100',
    },
    orange: {
        enabled: 'border-orange bg-orange text-yellow-100 hover:bg-orange-faded hover:border-orange-faded',
        disabled: 'bg-orange-faded border-orange-faded text-yellow-100',
    },
    bright: {
        enabled: 'border-orange-200 bg-orange-200 text-blue-600 hover:border-orange-200-faded hover:bg-orange-200-faded',
        disabled: 'border-orange-200-faded bg-orange-200-faded text-blue-600',
    },
}

const  responsiveSizesToClasses = {
    md: 'h-[45px] sm:h-[60px] border-[2px] sm:border-[3px]',
    sm: 'h-[48px] xs:h-[48px] border-[2px]',
    xs: 'h-[40px] xs:h-[45px] border-[2px]',
}

const sizesToClasses = {
    md: 'h-[60px] border-[3px]',
    sm: 'h-[55px] border-[3px]',
    xs: 'h-[45px] border-[3px]',
}

const responsiveToChildrenClasses = {
    md: 'px-[1rem] sm:px-[2rem]',
    sm: 'px-[1rem] sm:px-[1.5rem]',
    xs: 'px-[1rem] sm:px-[1.25rem]',
}

const sizesToChildrenClasses = {
    md: 'px-[2rem]',
    sm: 'px-[1.75rem]',
    xs: 'px-[1.2rem]',
}


export default function FormButton({ className, children, size = 'md', color = 'default', link, type = 'submit', disabled = false, onClick, unresponsive = false }: ButtonProps) {
    const containerClassName = cn(
        "rounded-full border-[3px] text-lg cursor-pointer transition-colors",
        unresponsive ? sizesToClasses[size] : responsiveSizesToClasses[size],
        colorToClasses[color][disabled ? 'disabled' : 'enabled'],
        className
    )

    const childrenClassName = cn("h-full flex justify-center items-center", unresponsive ? sizesToChildrenClasses[size] : responsiveToChildrenClasses[size]);

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
