import {ReactNodeProps} from "@/lib/types/core";

export default function LandingStartTitle() {
    return (
        <LandingStartTitleContainer>
            <h1>Dinoplan.</h1>
            <h2>
                Der Plan für dich
                <br/>
                und dein Kind.
            </h2>
        </LandingStartTitleContainer>
    );
}

function LandingStartTitleContainer({children}: ReactNodeProps) {
    return (
        <div className="text-blue-600 text-7xl font-medium flex flex-col h-[85dvh] justify-center font-afacad">
            {children}
        </div>
    );
}
