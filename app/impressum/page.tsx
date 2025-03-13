import Imprint from "@/impressum/components/imprint";
import {defineQuery} from "groq";
import {sanityClient} from "@/lib/sanity/client";
import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

const options = { next: { revalidate: 3600 } };

export const metadata: Metadata = getMetadata(
    "Dinoplan | Impressum"
);

const IMPRINT_QUERY = defineQuery(`*[_type == "pageSectionsImprint"][0] {
    _id,
    title,
    text,
}`);

export default async function ImprintPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const imprintPageSection = await sanityClient.fetch(IMPRINT_QUERY, {}, options);

  return <Imprint imprintPageSection={imprintPageSection} />;
}