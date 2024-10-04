import {ReactNodeProps} from "@/lib/types/core";
import {LandingAboutBoxCharacteristicProps} from "@/(landing)/about/box/characteristics/characteristic/index";

export default function LandingAboutBoxCharacteristicIcon({characteristic}: LandingAboutBoxCharacteristicProps) {
    return (
        <LandingAboutBoxCharacteristicIconContainer>
            {characteristic.iconComponent}
        </LandingAboutBoxCharacteristicIconContainer>
    );
}

function LandingAboutBoxCharacteristicIconContainer({children}: ReactNodeProps) {
    return (
        <div className="bg-yellow-100 rounded-full w-fit h-fit p-2.5">
            {children}
        </div>
    );
}