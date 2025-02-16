import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import CalculatorStart from "@/rechner/start/components/start";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

export const metadata: Metadata = getMetadata(
  "Dinoplan | Rechner - Start",
  "Berechne jetzt deinen Beitrag!",
);

export default async function CalculatorStartPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  return <CalculatorStart />;
}
