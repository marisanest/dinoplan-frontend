import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import CalculatorInfo from "@/rechner/info/components/info";
import {cookies} from "next/headers";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";

const options = { next: { revalidate: 0 } };

export default async function CalculatorInfoPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const customerId = cookies().get('customerId')?.value
  if (!customerId) {
    redirect('/rechner/start')
  }

  const customerQuery = defineQuery(`*[_type == "customer" && _id == "${customerId}"][0]{
    _id,
    childDateOfBirth,
    email,
    consentsToThePrivacyPolicy,
  }`);

  const customer = await client.fetch(customerQuery, {}, options);

  if (!customer) {
    redirect('/rechner/start')
  }

  return <CalculatorInfo customer={customer} />;
}