import Privacy from "@/datenschutz/components/privacy";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";
import { sanityClient } from "@/lib/sanity/client";
import { CONTACT_QUERY } from "@/lib/sanity/queries/contact";

export const metadata: Metadata = getMetadata(
    "Dinoplan | Datenschutz"
);

const options = { next: { revalidate: 300 } };

export default async function PrivacyPage() {
  const contact = await sanityClient.fetch(CONTACT_QUERY, {}, options);

  return <Privacy contact={contact} />;
}