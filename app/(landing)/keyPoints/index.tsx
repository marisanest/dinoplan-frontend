import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import Description from "@/app/components/description";
import LandingKeyPointsPoints from "@/app/(landing)/keyPoints/points";

export default function LandingKeyPoints() {
    return (
        <LandingKeyPointsContainer>
            <Title>Was wichtig ist, bist du!</Title>
            <Description className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Mauris viverra volutpat consequat. Maecenas non iaculis dolor.<br/>
                Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.
            </Description>
            <LandingKeyPointsPoints key="points" />
        </LandingKeyPointsContainer>
    );
}

function LandingKeyPointsContainer({children}: ReactNodeProps) {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[870px] min-w-[870px] max-w-[870px]">
                {children}
            </div>
        </div>
    );
}
