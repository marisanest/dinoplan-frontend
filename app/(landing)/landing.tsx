import Banner from "@/app/components/banner";
import LandingAbout from "@/app/(landing)/about";
import LandingFaq from "@/(landing)/faq";
import {
    PAGE_SECTION_ABOUT_QUERYResult,
    PAGE_SECTION_FAQ_QUERYResult,
    PAGE_SECTION_SERVICE_FEATURES_QUERYResult,
    PAGE_SECTION_SERVICE_MODULES_QUERYResult,
    PAGE_SECTION_SERVICE_SEGMENTS_QUERYResult,
    PAGE_SECTION_START_QUERYResult,
} from "@/lib/types/sanity-types";
import LandingServiceSegments from "@/app/(landing)/serviceSegments";
import LandingServiceFeatures from "@/(landing)/serviceFeatures";
import LandingServiceModules from "@/(landing)/serviceModules";
import LandingStart from "@/(landing)/start";
import RichText from "@/components/text";
import Button from "@/components/buttons";
import LandingEnd from "@/(landing)/end";
import Text from "@/components/text/text";

export type LandingProps = {
    startPageSection: PAGE_SECTION_START_QUERYResult;
    serviceSegmentsPageSection: PAGE_SECTION_SERVICE_SEGMENTS_QUERYResult;
    serviceFeaturesPageSection: PAGE_SECTION_SERVICE_FEATURES_QUERYResult;
    serviceModulesPageSection: PAGE_SECTION_SERVICE_MODULES_QUERYResult;
    aboutPageSection: PAGE_SECTION_ABOUT_QUERYResult;
    faqPageSection: PAGE_SECTION_FAQ_QUERYResult;
    contact: any;
}

export default function Landing({
                                    startPageSection,
                                    serviceSegmentsPageSection,
                                    serviceFeaturesPageSection,
                                    serviceModulesPageSection,
                                    aboutPageSection,
                                    faqPageSection,
                                    contact,
                                }: LandingProps) {

    return (
        <main>
            <LandingStart startPageSection={startPageSection}
                          serviceSegmentsPageSection={serviceSegmentsPageSection} />
            <Banner className="bg-orange !justify-center gap-[2rem]">
                <Text className="!w-fit" >
                    Lasse dich jetzt kostenlos online von unseren Experten beraten.
                </Text>
                <Button link={contact.calendly}
                        size="sm"
                        colors="bright">
                    Termin vereinbaren
                </Button>
            </Banner>
            <LandingServiceSegments serviceSegmentsPageSection={serviceSegmentsPageSection} />
            <LandingServiceFeatures serviceFeaturesPageSection={serviceFeaturesPageSection} />
            <LandingServiceModules serviceModulesPageSection={serviceModulesPageSection} />
            <LandingAbout aboutPageSection={aboutPageSection} />
            <LandingFaq faqPageSection={faqPageSection} />
            <LandingEnd key="end" />
        </main>
    );
}