import {ReactNodeProps} from "@/lib/types/core";
import LandingAboutBoxImage from "@/(landing)/about/box/image";
import LandingAboutBoxPersonalFeatures from "@/(landing)/about/box/personalFeatures";
import AppointmentButton from "@/components/buttons/appointment";
import {LandingProps} from "@/(landing)/landing";

export default function LandingAboutBox({aboutPageSection}: Pick<LandingProps, 'aboutPageSection'>) {
    return (
        <LandingAboutBoxContainer>
            <div className="grid grid-cols-2 gap-sm">
                <LandingAboutBoxPersonalFeatures key="personalFeatures" aboutPageSection={aboutPageSection} />
                <LandingAboutBoxImage key="image" aboutPageSection={aboutPageSection} />
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