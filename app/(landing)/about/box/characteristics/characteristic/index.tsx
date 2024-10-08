import {Characteristic, ReactNodeProps} from "@/lib/types/core";
import Title from "@/components/title";
import RichText from "@/components/text";
import LandingAboutBoxCharacteristicIcon from "@/(landing)/about/box/characteristics/characteristic/icon";

export type LandingAboutBoxCharacteristicProps = {
    characteristic: Characteristic;
}

export default function LandingAboutBoxCharacteristic({characteristic}: LandingAboutBoxCharacteristicProps) {
    return (
        <LandingAboutBoxCharacteristicContainer>
            <LandingAboutBoxCharacteristicIcon characteristic={characteristic} />
            <div>
                <Title key="title" size="sm" align="left">{characteristic.title}</Title>
                <RichText key="description" className="mt-2" size="sm" align="left" trustedHtml={characteristic.description} />
            </div>
        </LandingAboutBoxCharacteristicContainer>
    );
}

function LandingAboutBoxCharacteristicContainer({children}: ReactNodeProps) {
    return (
        <div className="flex gap-6">
            {children}
        </div>
    );
}