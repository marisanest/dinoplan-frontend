import {LinkType, ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import Link from "@/components/link";

export type ButtonProps = {
    colors?: 'default' | 'red';
    link?: LinkType;
    onClick?: () => void;
} & ReactNodeProps;

const colorsToClasses = {
    default: 'border-blue-600 text-blue-600 hover:border-red-200 hover:bg-red-200 hover:text-yellow-100',
    red: 'border-red-200 bg-red-200 text-yellow-100 hover:border-red-200-faded hover:bg-red-200-faded',
}

export default function Button({ className, children, colors = 'default', link, onClick }: ButtonProps) {
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
