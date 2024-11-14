import {redirect} from "next/navigation";
import {getSession} from "@/lib/signIn";

export default async function CalculatorPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  redirect('/rechner/start')
}
