import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export default function Description({className, children}: ReactNodeProps) {
    return (
        <DescriptionContainer className={className}>
            {children}
        </DescriptionContainer>
    );
}

function DescriptionContainer({className, children}: ReactNodeProps) {
    return (
        <div className={cn("flex justify-center items-center w-full text-blue-600 font-light text-sm text-center", className)}>
            {children}
        </div>
    );
}
