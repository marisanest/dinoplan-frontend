import Landing from "@/app/(landing)/landing"
import {client} from "@/lib/sanity/client";
import {defineQuery} from "groq";

const options = { next: { revalidate: 0 } };

const PAGE_SECTION_START_QUERY = defineQuery(`*[_type == "pageSectionsStart"][0] {
    _id, 
    title, 
    subTitle,
    illustration,
}`);

const PAGE_SECTION_SERVICE_SEGMENTS_QUERY = defineQuery(`*[_type == "pageSectionsServiceSegments"][0] {
    _id, 
    title, 
    description, 
    serviceSegments[] {
        serviceSegment-> {
           _id,
           name,
           dinoPrefix,
           dinoIllustration,
           description,
           serviceModules[] {
              serviceModule-> {
                _id,
                name,
              }
           }
        }
    }
}`);

const PAGE_SECTION_SERVICE_FEATURES_QUERY = defineQuery(`*[_type == "pageSectionsServiceFeatures"][0] {
    _id, 
    title, 
    description, 
    serviceFeatures[] {
        serviceFeature-> {
           _id,
           name,
           illustration,
        }
    }
}`);


const PAGE_SECTION_SERVICE_MODULES_QUERY = defineQuery(`*[_type == "pageSectionsServiceModules"][0] {
    _id, 
    title, 
    serviceModules[] {
        serviceModule-> {
           _id,
           name,
           illustration,
           name,
           example,
        }
    }
}`);

const PAGE_SECTION_ABOUT_QUERY = defineQuery(`*[_type == "pageSectionsAbout"][0] {
    _id, 
    title, 
    description,
    personalFeatures[] {
        personalFeature-> {
           _id,
           name,
           description,
        }
    },
    illustration,
}`);

const PAGE_SECTION_FAQ_QUERY = defineQuery(`*[_type == "pageSectionsFaq"][0] {
    _id, 
    title, 
    subTitle,
    questions[] {
        question-> {
           _id,
           question,
           answer,
        }
    },
    illustration,
}`);

export default async function LandingPage() {
  const startPageSection = await client.fetch(PAGE_SECTION_START_QUERY, {}, options);
  const serviceSegmentsPageSection = await client.fetch(PAGE_SECTION_SERVICE_SEGMENTS_QUERY, {}, options);
  const serviceFeaturesPageSection = await client.fetch(PAGE_SECTION_SERVICE_FEATURES_QUERY, {}, options);
  const serviceModulesPageSection = await client.fetch(PAGE_SECTION_SERVICE_MODULES_QUERY, {}, options);
  const aboutPageSection = await client.fetch(PAGE_SECTION_ABOUT_QUERY, {}, options);
  const faqPageSection = await client.fetch(PAGE_SECTION_FAQ_QUERY, {}, options);

  return (
      <Landing startPageSection={startPageSection}
               serviceSegmentsPageSection={serviceSegmentsPageSection}
               serviceFeaturesPageSection={serviceFeaturesPageSection}
               serviceModulesPageSection={serviceModulesPageSection}
               aboutPageSection={aboutPageSection}
               faqPageSection={faqPageSection} />
  );
}