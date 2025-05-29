import CalculatorStart from "@/rechner/start/components/start";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";
import {cookies} from "next/headers";
import {defineQuery} from "groq";
import {sanityClient} from "@/lib/sanity/client";

export const metadata: Metadata = getMetadata(
  "Dinoplan | Rechner - Start",
  "Berechne jetzt deinen Beitrag!",
);

const options = { next: { revalidate: 300 } };

export default async function CalculatorStartPage() {
  const customerId = cookies().get('customerId')?.value
  let customer;

  if (customerId) {
    const customerQuery = defineQuery(`*[_type == "customer" && _id == "${customerId}"][0]{
    _id,
    childName,
    childAge,
  }`);

    customer = await sanityClient.fetch(customerQuery, {}, options);
  }

  return <CalculatorStart customer={customer} />;
}