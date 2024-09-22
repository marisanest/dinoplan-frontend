import {ReactNodeProps} from "@/lib/types/core";
import LandingDinoSegments from "@/app/(landing)/dino/segments";
import LandingDinoTopContainer from "@/app/(landing)/dino/topContainer";
import LandingDinoSegmentDescription from "@/app/(landing)/dino/segment/description";
import Title from "@/app/components/title";
import Description from "@/app/components/description";

export default function LandingDino() {
    return (
        <LandingDinoContainer>
            <LandingDinoTopContainer key="top">
                <Title key="title">
                    Das Rundum-sorglos-Paket<br/>
                    für dich und dein Kind
                </Title>
                <Description className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Mauris viverra volutpat consequat. Maecenas non iaculis dolor.<br/>
                    Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.<br/>
                    Aenean ullamcorper lobortis turpis,<br/>
                    sit amet fermentum quam tempor ac.
                </Description>
                <LandingDinoSegments key="segments" />
            </LandingDinoTopContainer>
            <LandingDinoSegmentDescription />
        </LandingDinoContainer>
    );
}

function LandingDinoContainer({children}: ReactNodeProps) {
    return (
        <div className="bg-yellow-100 flex flex-col items-center">
            <div className="my-20 w-sm max-w-sm">
                {children}
            </div>
        </div>
    );
}
