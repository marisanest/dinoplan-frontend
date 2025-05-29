import Imprint from "@/impressum/components/imprint";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";
import { sanityClient } from "@/lib/sanity/client";
import { CONTACT_QUERY } from "@/lib/sanity/queries/contact";

export const metadata: Metadata = getMetadata(
    "Dinoplan | Impressum"
)

const options = { next: { revalidate: 300 } };

export default async function ImprintPage() {
  const contact = await sanityClient.fetch(CONTACT_QUERY, {}, options);

  return <Imprint contact={contact} />;
}