import {ReactNodeProps} from "@/lib/types/core";
import LandingStartTitle from "@/app/(landing)/start/title";
import LandingStartDescription from "@/app/(landing)/start/description";
import LandingStartBackground from "@/app/(landing)/start/background";

export default function LandingStart() {
    return (
        <LandingStartContainer>
            <div className="relative z-10">
                <LandingStartTitle/>
                <LandingStartDescription/>
            </div>
            <LandingStartBackground key="background" />
        </LandingStartContainer>
    );
}

function LandingStartContainer({children}: ReactNodeProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between">
            <div className="w-screen h-[100dvh] bg-orange-200 rounded-bl-[90px] px-20">
                {children}
            </div>
        </div>
    );
}
