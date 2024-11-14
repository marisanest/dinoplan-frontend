import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";
import CalculatorCalculation from "@/rechner/berechnung/components/calculation";

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

export default async function CalculatorCalculationPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const customerId = cookies().get('customerId')?.value
  if (!customerId) {
    redirect('/rechner/start')
  }

  const query = defineQuery(`*[_type == "customer" && _id == "${customerId}"][0]{
    childName,
    childDateOfBirth,
  }`);

  const customer = await client.fetch(query, {}, options);

  if (!customer) {
    redirect('/rechner/start')
  }

  const pageSectionsServiceSegments = await client.fetch(PAGE_SECTION_SERVICE_SEGMENTS_QUERY, {}, options);
  const costCalculation = await client.fetch(COST_CALCULATION_QUERY, {}, options);
  const contact = await client.fetch(CONTACT_QUERY, {}, options);

  return <CalculatorCalculation serviceSegments={pageSectionsServiceSegments.serviceSegments}
                                customer={customer}
                                costCalculation={costCalculation} contact={contact} />;
}
