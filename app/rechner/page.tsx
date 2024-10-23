import Calculator from "@/rechner/components";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";
import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";

const options = { next: { revalidate: 0 } };

const PAGE_SECTION_SERVICE_SEGMENTS_QUERY = defineQuery(`*[_type == "pageSectionsServiceSegments"][0] {
    serviceSegments[] {
        serviceSegment->{
           _id,
           dinoPrefix,
           illustration {
             'height': asset->metadata.dimensions.height,
             'width': asset->metadata.dimensions.width,
             asset->{
               url,
             }
           },
           serviceModules[] {
             serviceModule-> {
               _id,
               name,
               costCalculationForFinancialInvestment,
               costPerMonthForInsurance,
             }
           }  
        }
    }
}`);

const COST_CALCULATION_QUERY = defineQuery(`*[_type == "costCalculation"][0] {
    inflationRate,
    interestRate,
}`);

const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    calendly,
}`);

export default async function CalculatorPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const pageSectionsServiceSegments = await client.fetch(PAGE_SECTION_SERVICE_SEGMENTS_QUERY, {}, options);
  const costCalculation = await client.fetch(COST_CALCULATION_QUERY, {}, options);
  const contact = await client.fetch(CONTACT_QUERY, {}, options);

  return <Calculator serviceSegments={pageSectionsServiceSegments.serviceSegments} costCalculation={costCalculation} contact={contact} />;
}
