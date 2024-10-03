import {Characteristic, ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import RichText from "@/components/text";

export type LandingAboutBoxCharacteristicProps = {
    characteristic: Characteristic;
}


export default function LandingAboutBoxCharacteristic({characteristic}: LandingAboutBoxCharacteristicProps) {
    return (
        <LandingAboutBoxCharacteristicContainer>
            <Title key="title" size="sm" align="left">{characteristic.title}</Title>
            <RichText key="description" className="mt-2" size="sm" align="left" trustedHtml={characteristic.description} />
        </LandingAboutBoxCharacteristicContainer>
    );
}

function LandingAboutBoxCharacteristicContainer({children}: ReactNodeProps) {
    return (
        <div>
            {children}
        </div>
    );
}