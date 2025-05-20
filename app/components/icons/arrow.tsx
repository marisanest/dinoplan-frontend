import {ReactNodeProps} from "@/lib/types/core";

export type ArrowIconProps = {
  strokeColor?: string;
  scale?: number;
} & ReactNodeProps

export default function ArrowIcon({ className, strokeColor = '#294290', scale = 0.7 }: ArrowIconProps) {
    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width={scale * 18} height={scale * 11} viewBox="0 0 18 11" fill="none">
        <path d="M9 2L2 9" stroke={strokeColor} strokeWidth="3" strokeLinecap="round"/>
        <path d="M9 2L16 9" stroke={strokeColor} strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
}
