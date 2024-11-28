import cn from "clsx";
import CheckmarkIcon from "@/app/components/icons/checkmark";
import {ReactNodeProps} from "@/lib/types/core";

type CheckmarkDot = {
    strokeColor?: string;
} & ReactNodeProps;

export default function CheckmarkDot({ className = 'bg-orange border-orange', strokeColor = '#F7F2EA' }: CheckmarkDot) {
    return (
        <div className={cn("min-w-[1.6rem] w-[1.6rem] min-h-[1.6rem] h-[1.6rem] sm:min-w-[1.75rem] sm:min-h-[1.75rem] sm:w-[1.75rem] sm:h-[1.75rem] rounded-full p-[0.075rem] xs:p-[0.175rem] border-[2px]", className )}>
            <CheckmarkIcon strokeColor={strokeColor} />
        </div>
    );
}
