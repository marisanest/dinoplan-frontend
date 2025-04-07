import Calendar from "@/kalender/components/calendar";
import {sanityClient} from "@/lib/sanity/client";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";
import {CONTACT_QUERY} from "@/lib/sanity/queries/contact";

const options = { next: { revalidate: 3600 } };

export const metadata: Metadata = getMetadata(
    "Dinoplan | Kalender",
    "Vereinbare jetzt einen Termin!",
);

export default async function LandingPage() {
  const contact = await sanityClient.fetch(CONTACT_QUERY, {}, options);

  return <Calendar contact={contact}/>;
}