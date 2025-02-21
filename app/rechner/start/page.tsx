import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import CalculatorStart from "@/rechner/start/components/start";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";
import {cookies} from "next/headers";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";

export const metadata: Metadata = getMetadata(
  "Dinoplan | Rechner - Start",
  "Berechne jetzt deinen Beitrag!",
);

const options = { next: { revalidate: 3600 } };
const revalidate = 3600

export default async function CalculatorStartPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const customerId = cookies().get('customerId')?.value
  let customer;

  if (customerId) {
    const customerQuery = defineQuery(`*[_type == "customer" && _id == "${customerId}"][0]{
    _id,
    childName,
    childAge,
  }`);

    customer = await client.fetch(customerQuery, {}, options);
  }

  return <CalculatorStart customer={customer} />;
}