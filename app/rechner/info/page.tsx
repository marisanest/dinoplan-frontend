import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import CalculatorInfo from "@/rechner/info/components/info";
import {cookies} from "next/headers";

export default async function CalculatorInfoPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const customerId = cookies().get('customerId')?.value
  if (!customerId) {
    redirect('/rechner/start')
  }

  return <CalculatorInfo />;
}
