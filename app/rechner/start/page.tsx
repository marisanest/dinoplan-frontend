import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import CalculatorStart from "@/rechner/start/components/start";

export default async function CalculatorStartPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  return <CalculatorStart />;
}
