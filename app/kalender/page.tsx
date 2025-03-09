import {getSession} from "@/lib/signIn";
import {redirect} from "next/navigation";
import Calendar from "@/kalender/components/calendar";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";

const options = { next: { revalidate: 3600 } };

const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    _id, 
    calendly,
}`);

export default async function LandingPage() {
  const session = await getSession();
  if (!session.hasAccess) {
    redirect('/login')
  }

  const contact = await client.fetch(CONTACT_QUERY, {}, options);

  return (
      <Calendar contact={contact}/>
  );
}