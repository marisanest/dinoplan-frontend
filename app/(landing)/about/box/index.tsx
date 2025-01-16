import LandingAboutBoxImage from "@/(landing)/about/box/image";
import LandingAboutBoxPersonalFeatures from "@/(landing)/about/box/personalFeatures";
import LandingAppointmentButton from "@/(landing)/components/appointmentButton";

export default function LandingAboutBox() {
    return (
        <div className="w-full bg-orange-200 rounded-3xl py-y-section px-x-s flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center ss:grid ss:grid-cols-2 ss:gap-x-sm">
                <LandingAboutBoxPersonalFeatures key="personalFeatures"/>
                <LandingAboutBoxImage key="image"/>
            </div>
            <div className="w-fit pt-y-paragraph">
                <LandingAppointmentButton key="appointment-button"/>
            </div>
        </div>
    );
}