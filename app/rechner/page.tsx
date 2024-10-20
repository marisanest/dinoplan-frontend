import Calculator from "@/rechner/components";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";

const options = { next: { revalidate: 0 } };

const SERVICE_SEGMENTS_QUERY = defineQuery(`*[_type == "serviceSegment"] {
     _id,
     dinoPrefix,
     illustration,
     serviceModules[] {
      serviceModule-> {
        _id,
        name,
        costCalculationForFinancialInvestment,
        costPerMonthForInsurance,
      }
    }    
}`);

export default async function CalculatorPage() {
  const serviceSegments = await client.fetch(SERVICE_SEGMENTS_QUERY, {}, options);

  return <Calculator serviceSegments={serviceSegments} />;
}
