import {ReactNodeProps} from "@/lib/types/core";
import LandingAboutBoxImage from "@/(landing)/about/box/image";
import LandingAboutBoxPersonalFeatures from "@/(landing)/about/box/personalFeatures";
import {LandingProps} from "@/(landing)/landing";
import LandingAboutBoxAppointmentButton from "@/(landing)/about/box/appointmentButton";

export default function LandingAboutBox({aboutPageSection, contact}: Pick<LandingProps, 'aboutPageSection' | 'contact'>) {
    return (
        <LandingAboutBoxContainer>
            <div className="w-full flex flex-col justify-center items-center ss:grid ss:grid-cols-2 ss:gap-x-sm">
                <LandingAboutBoxPersonalFeatures key="personalFeatures" aboutPageSection={aboutPageSection} />
                <LandingAboutBoxImage key="image" aboutPageSection={aboutPageSection} />
            </div>
            <div className="w-fit pt-y-paragraph">
                <LandingAboutBoxAppointmentButton contact={contact} />
            </div>
        </LandingAboutBoxContainer>
    );
}

function LandingAboutBoxContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full bg-orange-200 rounded-3xl py-y-section px-x-s flex flex-col items-center">
            {children}
        </div>
    );
}