import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {defineQuery} from "groq";
import {sanityClient} from "@/lib/sanity/client";
import CalculatorCalculation from "@/rechner/berechnung/components/calculation";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

export const metadata: Metadata = getMetadata(
  "Dinoplan | Rechner - Berechnung",
  "Berechne jetzt deinen Beitrag!",
);

const options = { next: { revalidate: 0 } };

const PAGE_SECTION_SERVICE_SEGMENTS_QUERY = defineQuery(`*[_type == "pageSectionsServiceSegments"][0] {
    serviceSegments[] {
        serviceSegment->{
           _id,
           dinoPrefix,
           illustration {
       
             asset->{
               url,
               metadata {
                 dimensions {
                    width,
                    height,
                 }
               }
             }
           },
           serviceModules[] {
             serviceModule-> {
               _id,
               name,
               costCalculationDescription,
               costCalculationForFinancialInvestment,
               costPerMonthForInsurance,
             }
           }  
        }
    }
}`);

const COST_CALCULATION_QUERY = defineQuery(`*[_type == "costCalculation"] | order(_createdAt desc)[0] {
    inflationRate,
    interestRate,
    generalNote,
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
    _id,
    childName,
    childAge,
    serviceModules,
  }`);

  const customer = await sanityClient.fetch(query, {}, options);

  if (!customer) {
    redirect('/rechner/start')
  }

  const [pageSectionsServiceSegments, costCalculation] = await Promise.all([
    sanityClient.fetch(PAGE_SECTION_SERVICE_SEGMENTS_QUERY, {}, options),
    sanityClient.fetch(COST_CALCULATION_QUERY, {}, options)
  ])

  return <CalculatorCalculation serviceSegments={pageSectionsServiceSegments.serviceSegments}
                                customer={customer}
                                costCalculation={costCalculation} />;
}
