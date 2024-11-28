import cn from "clsx";
import {ReactNodeProps} from "@/lib/types/core";
import ArrowIcon from "@/components/icons/arrow";

export default function Dot({ className = 'bg-orange border-orange', children }: ReactNodeProps) {
    return (
        <div
            className={cn("min-w-[1.75rem] w-[1.75rem] min-h-[1.75rem] h-[1.75rem] rounded-full p-[0.175rem] border-[2px]", className)}>
            {children}
        </div>

    // <div
    //     className="cursor-pointer border-red-200 bg-red-200 flex justify-center items-center min-w-[1.75rem] w-[1.75rem] min-h-[1.75rem] h-[1.75rem] rounded-full p-[0.175rem] border-[2px]"
    //     onClick={selectNextServiceSegment}>
    //     <ArrowIcon className="-rotate-90" scale={0.8}/>
    // </div>
    );
}
