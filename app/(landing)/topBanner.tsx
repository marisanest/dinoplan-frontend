import Banner from "@/app/components/banner";
import Button from "@/components/buttons";
import Text from "@/components/text/text";

export type LandingTopBannerProps = {
    contact: any;
}

export default function LandingTopBanner({contact}: LandingTopBannerProps) {
    return (
        <Banner key="banner" className="relative z-10 bg-orange">
            <div className="flex w-full h-full justify-center items-center gap-[1rem]">
                <Text className="!w-fit" size="md">
                    Lasse dich jetzt kostenlos online von unseren Experten beraten.
                </Text>
                <Button link={contact.calendly} size="xs" colors="bright">
                    <Text size="md">Termin vereinbaren</Text>
                </Button>
            </div>
        </Banner>
    );
}