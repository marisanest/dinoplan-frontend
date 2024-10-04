import {ReactNodeProps} from "@/lib/types/core";

export type ArrowIconProps = {
    color?: string;
} & ReactNodeProps

export default function ArrowIcon({ className, color = '#294290' }: ArrowIconProps) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={17.197*0.9} height={11.102*0.9} viewBox="0 0 17.197 11.102">
            <g transform="translate(2.121 8.981) rotate(-90)">
                <path d="M0,0" transform="translate(2.314 6.629)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="3"/>
                <path d="M0,0,6.86,6.328" transform="translate(0 6.629)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="3"/>
                <path d="M0,6.629,6.86,0" fill="none" stroke={color} strokeLinecap="round" strokeWidth="3"/>
            </g>
        </svg>
    );
}
