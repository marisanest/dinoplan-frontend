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
import Button from "@/components/buttons";
import Text from "@/components/text/text";
import {AppProvider} from "@/lib/stores/app/context";

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
        <AppProvider startPageSection={startPageSection}
                     serviceSegmentsPageSection={serviceSegmentsPageSection}
                     serviceFeaturesPageSection={serviceFeaturesPageSection}
                     serviceModulesPageSection={serviceModulesPageSection}
                     aboutPageSection={aboutPageSection}
                     faqPageSection={faqPageSection}>
            <main>
                <LandingStart key="start"/>
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
                <LandingServiceSegments key="service-segments" />
                <LandingServiceFeatures serviceFeaturesPageSection={serviceFeaturesPageSection} contact={contact}/>
                <LandingServiceModules />
                <LandingAbout aboutPageSection={aboutPageSection} contact={contact}/>
                <LandingFaq faqPageSection={faqPageSection}/>
            </main>
        </AppProvider>
    );
}