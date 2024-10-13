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

export type LandingProps = {
    startPageSection: PAGE_SECTION_START_QUERYResult;
    serviceSegmentsPageSection: PAGE_SECTION_SERVICE_SEGMENTS_QUERYResult;
    serviceFeaturesPageSection: PAGE_SECTION_SERVICE_FEATURES_QUERYResult;
    serviceModulesPageSection: PAGE_SECTION_SERVICE_MODULES_QUERYResult;
    aboutPageSection: PAGE_SECTION_ABOUT_QUERYResult;
    faqPageSection: PAGE_SECTION_FAQ_QUERYResult;
}

export default function Landing({startPageSection, serviceSegmentsPageSection, serviceFeaturesPageSection, serviceModulesPageSection, aboutPageSection, faqPageSection}: LandingProps) {
    return (
        <main>
            <LandingStart startPageSection={startPageSection} />
            <Banner className="bg-orange"></Banner>
            <LandingServiceSegments serviceSegmentsPageSection={serviceSegmentsPageSection} />
            <LandingServiceFeatures serviceFeaturesPageSection={serviceFeaturesPageSection} />
            <LandingServiceModules serviceModulesPageSection={serviceModulesPageSection} />
            <LandingAbout aboutPageSection={aboutPageSection} />
            <LandingFaq faqPageSection={faqPageSection} />
        </main>

    );
}