import {defineQuery} from "groq";
import {sanityClient} from "@/lib/sanity/client";
import Privacy from "@/datenschutz/components/privacy";
import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

const options = { next: { revalidate: 3600 } };

export const metadata: Metadata = getMetadata(
    "Dinoplan | Datenschutz"
);

const PRIVACY_QUERY = defineQuery(`*[_type == "pageSectionsPrivacy"][0] {
    _id,
    title,
    text,
}`);

export default async function PrivacyPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const privacyPageSection = await sanityClient.fetch(PRIVACY_QUERY, {}, options);

  return <Privacy privacyPageSection={privacyPageSection} />;
}