import Banner from "@/app/components/banner";
import Text from "@/components/text/text";
import LandingTopBannerAppointmentButton from "@/(landing)/topBanner/appointmentButton";

export default function LandingTopBanner() {
    return (
        <div className="relative z-10 w-full" style={{background: 'linear-gradient(180deg, rgba(247,242,234,1) 50%, rgba(255,255,250,1) 51%)'}}>
            <Banner key="banner" className="bg-orange">
                <div className="flex w-full h-full justify-center items-center gap-[1rem]">
                    <Text key="text" className="!w-fit" size="md">
                        Lasse dich jetzt kostenlos online von unseren Experten beraten.
                    </Text>

                    <LandingTopBannerAppointmentButton key="appontment-button" />
                </div>
            </Banner>
        </div>
    );
}