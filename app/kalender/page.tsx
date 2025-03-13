import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import Calendar from "@/kalender/components/calendar";
import {defineQuery} from "groq";
import {sanityClient} from "@/lib/sanity/client";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

const options = { next: { revalidate: 3600 } };

export const metadata: Metadata = getMetadata(
    "Dinoplan | Kalender",
    "Vereinbare jetzt einen Termin!",
);

const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    _id, 
    calendly,
}`);

export default async function LandingPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const contact = await sanityClient.fetch(CONTACT_QUERY, {}, options);

  return (
      <Calendar contact={contact}/>
  );
}