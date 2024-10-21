import {ReactNodeProps} from "@/lib/types/core";
import {PortableText} from "next-sanity";
import {LandingProps} from "@/(landing)/landing";

export default function LandingStartTitle({startPageSection}: Pick<LandingProps, 'startPageSection'>) {
    return (
        <LandingStartTitleContainer>
            <PortableText value={startPageSection?.title} />
        </LandingStartTitleContainer>
    );
}

function LandingStartTitleContainer({children}: ReactNodeProps) {
    return (
        <div
            className="text-blue-600 text-7xl font-medium font-afacad pt-[5rem] h-[calc(100dvh-5rem-83px)] flex flex-col justify-center">
            {children}
        </div>
    );
}
