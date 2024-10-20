import {ReactNodeProps} from "@/lib/types/core";
import CircleIcon from "@/components/icons/circle";
import HeartIcon from "@/components/icons/heart";
import FlexibilityIcon from "@/components/icons/flexibility";

export default function LandingAboutBoxPersonalFeatureIcon({index}) {
    let icon;
    if (index === 0) {
        icon =  <HeartIcon />;
    } else if (index === 1) {
        icon = <CircleIcon />;
    } else {
        icon = <FlexibilityIcon />
    }

    return (
        <LandingAboutBoxPersonalFeatureIconContainer>
            {icon}
        </LandingAboutBoxPersonalFeatureIconContainer>
    );
}

function LandingAboutBoxPersonalFeatureIconContainer({children}: ReactNodeProps) {
    return (
        <div className="bg-yellow-100 rounded-full w-fit h-fit p-2.5">
            {children}
        </div>
    );
}