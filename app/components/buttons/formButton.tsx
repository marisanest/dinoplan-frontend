import {LinkType, ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import Link from "@/components/link";

export type ButtonProps = {
    colors?: 'default' | 'red' | 'blue' | 'orange';
    link?: LinkType;
    type: string
    disabled: boolean;
    onClick?: () => void;
} & ReactNodeProps;

const colorsToClasses = {
    default: 'border-blue-600 text-blue-600 hover:border-red-200 hover:bg-red-200 hover:text-yellow-100',
    red: 'border-red-200 bg-red-200 text-yellow-100 hover:border-red-200-faded hover:bg-red-200-faded',
    blue: 'border-blue bg-blue text-yellow-100',
    orange: 'border-orange bg-orange text-yellow-100',
}

export default function FormButton({ className, children, colors = 'default', link, type, disabled = false, onClick }: ButtonProps) {
    const containerClassName = cn(
        "rounded-full h-[60px] border-[3px] text-lg cursor-pointer transition-colors",
        colorsToClasses[colors],
        className
    )
    const childrenClassName = "px-[2rem] h-full flex justify-center items-center";

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
