import {redirect} from "next/navigation";
import {getSession} from "@/lib/signIn";

/*
pending besser nutzen
gewählte bausteine an sanity übermitteln
smoothes ausklappen der bausteine
 */

export default async function CalculatorPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  redirect('/rechner/start')
}
