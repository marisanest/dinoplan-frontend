import cn from "clsx";
import CheckmarkIcon from "@/app/components/icons/checkmark";
import {ReactNodeProps} from "@/lib/types/core";

export default function CheckmarkDot({ className = 'bg-orange border-orange', strokeColor = '#F7F2EA' }: ReactNodeProps) {
    return (
        <div
            className={cn("min-w-[1.75rem] w-[1.75rem] min-h-[1.75rem] h-[1.75rem] rounded-full p-[0.175rem] border-[2px]", className )}>
            <CheckmarkIcon strokeColor={strokeColor}/>
        </div>
    );
}
