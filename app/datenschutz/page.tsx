import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";
import Privacy from "@/datenschutz/components/privacy";
import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";

const options = { next: { revalidate: 0 } };

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

  const privacyPageSection = await client.fetch(PRIVACY_QUERY, {}, options);

  return <Privacy privacyPageSection={privacyPageSection} />;
}