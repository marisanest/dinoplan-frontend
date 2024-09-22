import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import Description from "@/app/components/description";
import LandingKeyPointsPoints from "@/app/(landing)/keyPoints/points";
import AppointmentButton from "@/app/components/buttons/appointment";

export default function LandingKeyPoints() {
    return (
        <LandingKeyPointsContainer>
            <Title>Was wichtig ist, bist du!</Title>
            <Description className="mt-y-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Mauris viverra volutpat consequat. Maecenas non iaculis dolor.<br/>
                Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.
            </Description>
            <LandingKeyPointsPoints key="points" />
            <AppointmentButton className="mt-y-m" />
        </LandingKeyPointsContainer>
    );
}

function LandingKeyPointsContainer({children}: ReactNodeProps) {
    return (
        <div className="flex items-center justify-center mb-y-m">
            <div className="w-sm max-w-sm flex flex-col px-x-sm items-center justify-center">
                {children}
            </div>
        </div>
    );
}
