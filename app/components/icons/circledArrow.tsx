import {ReactNodeProps} from "@/lib/types/core";

export type ArrowIconProps = {
  strokeColor?: string;
  circleColor?: string;
  size?: number;
} & ReactNodeProps

export default function CircledArrowIcon({ className, circleColor = '#FAA19F', strokeColor = '#294290', size = 27 }: ArrowIconProps) {
    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="17" fill={circleColor}/>
        <path d="M17 22L24 15" stroke={strokeColor} strokeWidth="3" strokeLinecap="round"/>
        <path d="M17 22L10 15" stroke={strokeColor} strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
}
