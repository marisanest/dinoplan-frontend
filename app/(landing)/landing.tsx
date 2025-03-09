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
import {AppProvider} from "@/lib/stores/app/context";
import LandingTopBanner from "@/(landing)/topBanner";
import {InfoBoxProvider} from "@/lib/stores/infoBox/context";
import InfoBox from "@/components/infoBox";

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
                     faqPageSection={faqPageSection}
                     contact={contact}>
            <InfoBoxProvider>
                <main>
                    <LandingStart key="start"/>
                    <LandingTopBanner key="top-banner" />
                    <LandingServiceSegments key="segments" />
                    <LandingServiceFeatures key="features"/>
                    <LandingServiceModules key="modules" />
                    <LandingAbout key="about"/>
                    <LandingFaq key="faq"/>
                    <InfoBox/>
                </main>
            </InfoBoxProvider>
        </AppProvider>
    );
}