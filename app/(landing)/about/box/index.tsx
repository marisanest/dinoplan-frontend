import {ReactNodeProps} from "@/lib/types/core";
import LandingAboutBoxImage from "@/(landing)/about/box/image";
import LandingAboutBoxCharacteristics from "@/(landing)/about/box/characteristics";
import AppointmentButton from "@/components/buttons/appointment";

export default function LandingAboutBox() {
    return (
        <LandingAboutBoxContainer>
            <div className="grid grid-cols-2 gap-sm">
                <LandingAboutBoxCharacteristics key="characteristics" />
                <LandingAboutBoxImage key="image" />
            </div>
            <div className="w-fit">
                <AppointmentButton className="mt-3" />
            </div>
        </LandingAboutBoxContainer>
    );
}

function LandingAboutBoxContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full bg-orange-200 rounded-3xl py-y-s px-x-s flex flex-col items-center">
            {children}
        </div>
    );
}