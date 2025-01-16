import LandingAppointmentButton from "@/(landing)/components/appointmentButton";
import LandingServiceFeaturesTitle from "@/(landing)/serviceFeatures/title";
import LandingServiceFeaturesDescription from "@/(landing)/serviceFeatures/description";
import LandingServiceFeaturesList from "@/(landing)/serviceFeatures/list";

export default function LandingServiceFeatures() {
    return (
        <div className="w-full flex justify-center px-x-outer pb-y-block">
            <div className="w-full max-w-sm flex flex-col items-center">
                <LandingServiceFeaturesTitle key="title"/>
                <LandingServiceFeaturesDescription key="description"/>
                <LandingServiceFeaturesList key="list"/>
                <LandingAppointmentButton key="appointment-button"/>
            </div>
        </div>
    );
}