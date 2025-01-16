import Banner from "@/app/components/banner";
import Text from "@/components/text/text";
import LandingTopBannerAppointmentButton from "@/(landing)/topBanner/appointmentButton";

export default function LandingTopBanner() {
    return (
        <Banner key="banner" className="relative z-10 bg-orange">
            <div className="flex w-full h-full justify-center items-center gap-[1rem]">
                <Text key="texr" className="!w-fit" size="md">
                    Lasse dich jetzt kostenlos online von unseren Experten beraten.
                </Text>

                <LandingTopBannerAppointmentButton key="appontment-button" />
            </div>
        </Banner>
    );
}