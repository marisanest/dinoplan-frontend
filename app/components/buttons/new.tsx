import React, {useEffect, useState} from "react";
import cn from "clsx";
import {delay} from "@/lib/utils";
import Link from "@/components/link";
import {LinkType} from "@/lib/types/core";

type ButtonProps = {
    className?: string;
    children?: React.ReactNode;
    size?: 'md' | 'sm' | 'xs';
    unresponsive?: boolean;
    selected?: boolean;
    theme?: 'primary' | 'module' | 'calculate' | 'orange' | 'bright' | 'blue';
    textTheme?: 'small' | 'medium';
    type?: 'div' | 'submit-button';
    onClick?: () => void;
    link?: LinkType;
    disabled?: boolean;
}

const  responsiveSizesToClasses = {
    md: 'h-[45px] sm:h-[60px] border-[2px] sm:border-[3px]',
    sm: 'h-[44px] xs:h-[44px] border-[2px]',
    xs: 'h-[40px] xs:h-[45px] border-[2px]',
}

const sizesToClasses = {
    md: 'h-[60px] border-[3px]',
    sm: 'h-[55px] border-[3px]',
    xs: 'h-[45px] border-[3px]',
}

const responsiveToChildrenClasses = {
    md: 'px-[1rem] sm:px-[2rem]',
    sm: 'px-[16px] sm:px-[24px]',
    xs: 'px-[1rem] sm:px-[1.25rem]',
}

const sizesToChildrenClasses = {
    md: 'px-[2rem]',
    sm: 'px-[26px]',
    xs: 'px-[1.2rem]',
}

export default function Button({
                                   className = "",
                                   children,
                                   size = 'md',
                                   unresponsive = false,
                                   selected = false,
                                   theme = 'primary',
                                   textTheme = 'small',
                                   type = 'div',
                                   onClick = () => {},
                                   link,
                                   disabled = false,
                               }: ButtonProps) {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const resetIsClicked = async () => {
            await delay(100)
            setIsClicked(false);
        }
        if (isClicked) resetIsClicked()
    }, [isClicked]);

    const handleClick = () => {
        if (!disabled) {
            onClick();
            setIsClicked(true);
        }
    }

    let themeClassName = ''
    let onClickClass = ''

    if (theme === 'module') {
        themeClassName = cn(
            selected ? 'border-red-200 bg-red-200 text-yellow-100' : 'border-blue-600 text-blue-600',
            disabled ? '' : 'hover:border-red-200 hover:bg-red-200 hover:text-yellow-100',
        )
        onClickClass = '!border-red-200-faded !bg-red-200-faded'
    } else if (theme === 'calculate') {
        themeClassName = cn(
            'border-red-200 bg-red-200 text-yellow-100',
            disabled ? '' : 'hover:border-red-200-faded hover:bg-red-200-faded',
        )
        onClickClass = '!border-red-200-faded-2 !bg-red-200-faded-2'
    } else if (theme === 'orange') {
            themeClassName = cn(
                'border-orange bg-orange text-yellow-100',
                disabled ? '' : 'hover:bg-orange-faded hover:border-orange-faded',
            )
            onClickClass = '!border-orange-faded-2 !bg-orange-faded-2'
    } else if (theme === 'bright') {
        themeClassName = cn(
            'border-orange-200 bg-orange-200 text-blue-600',
            disabled ? '' : 'hover:border-orange-200-faded hover:bg-orange-200-faded',
        )
        onClickClass = '' // todo
    } else if (theme === 'blue') {
        themeClassName = cn('border-blue bg-blue text-yellow-100', disabled ? '' : 'hover:bg-blue-600-faded hover:border-blue-600-faded')
        onClickClass = ''
    }

    // const textThemeClassName = textTheme === 'small' ? 'text-sm font-medium' : 'text-md'

    const props = {
        className: cn(
            "rounded-full cursor-pointer transition-colors",
            themeClassName,
            // textThemeClassName,
            unresponsive ? sizesToClasses[size] : responsiveSizesToClasses[size],
            isClicked ? onClickClass : '',
            disabled ? 'opacity-30 cursor-default' : 'cursor-pointer',
            className,
        ),
        onClick: handleClick,
        disabled,
    }

    const childrenClassName = cn("h-full flex justify-center items-center", unresponsive ? sizesToChildrenClasses[size] : responsiveToChildrenClasses[size]);

    if (type === 'div') {
        return (
            <DivButton {...props}>
                {
                    link ?
                        (
                            <Link className={childrenClassName} link={link}>
                                {children}
                            </Link>
                        ) : (
                            <div className={childrenClassName}>
                                {children}
                            </div>
                        )
                }
            </DivButton>
        )
    } else if (type === 'submit-button') {
        return (
            <SubmitButton {...props}>
                <div className={childrenClassName}>{children}</div>
            </SubmitButton>
        )
    }
}

function DivButton({className, children, onClick}: {className?: string; children?: React.ReactNode, onClick?: () => void}) {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
}

function SubmitButton({className, children, onClick, disabled}: {className?: string; children?: React.ReactNode, onClick?: () => void, disabled: boolean}) {
    return (
        <button type="submit" className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}