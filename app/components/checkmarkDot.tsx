import cn from "clsx";
import CheckmarkIcon from "@/app/components/icons/checkmark";

export type CheckmarkDot = {
    backgroundColor?: string;
}

export default function CheckmarkDot({ backgroundColor = 'bg-orange' }: CheckmarkDot) {
    return (
        <div
            className={cn("min-w-[2rem] w-[2rem] min-h-[2rem] h-[2rem] rounded-full p-[0.2rem]", backgroundColor )}>
            <CheckmarkIcon/>
        </div>
    );
}
