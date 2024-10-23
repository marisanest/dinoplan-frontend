import Imprint from "@/impressum/components/imprint";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";
import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";

const options = { next: { revalidate: 0 } };

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

  const imprintPageSection = await client.fetch(IMPRINT_QUERY, {}, options);

  return <Imprint imprintPageSection={imprintPageSection} />;
}