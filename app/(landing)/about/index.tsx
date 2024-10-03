import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import Description from "@/app/components/description";
import LandingAboutBox from "@/(landing)/about/box";

export default function LandingAbout() {
    return (
        <LandingAboutContainer>
            <Title key="title">Wir sind Dinoplan</Title>
            <Description key="description" className="my-y-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Mauris viverra volutpat consequat. Maecenas non iaculis dolor.<br/>
                Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.
            </Description>
            <LandingAboutBox key="box" />
        </LandingAboutContainer>
    );
}

function LandingAboutContainer({children}: ReactNodeProps) {
    return (
        <div className="bg-yellow-100 flex flex-col items-center my-y-m">
            <div className="w-sm max-w-sm">{children}</div>
        </div>
    );
}