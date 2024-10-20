import cn from "clsx";
import CheckmarkIcon from "@/app/components/icons/checkmark";
import {ReactNodeProps} from "@/lib/types/core";

export default function CheckmarkDot({ className = 'bg-orange border-orange', strokeColor = '#F7F2EA' }: ReactNodeProps) {
    return (
        <div
            className={cn("min-w-[2rem] w-[2rem] min-h-[2rem] h-[2rem] rounded-full p-[0.3rem] border-[2px]", className )}>
            <CheckmarkIcon strokeColor={strokeColor}/>
        </div>
    );
}
