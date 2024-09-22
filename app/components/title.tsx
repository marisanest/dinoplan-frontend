import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

export default function Title({className, children}: ReactNodeProps) {
    return (
        <TitleContainer className={className}>
            {children}
        </TitleContainer>
    );
}

function TitleContainer({className, children}: ReactNodeProps) {
    return (
        <div className={cn("flex justify-center items-center w-full text-4xl font-medium text-blue-600 text-center", className)}>
            {children}
        </div>
    );
}
