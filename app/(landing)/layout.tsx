import Header from "@/components/header";
import {ReactNode} from "react";
import Footer from "@/components/footer";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";

const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    _id, 
    email, 
    calendly,
}`);

const options = { next: { revalidate: 0 } };

export default async function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
    const contact = await client.fetch(CONTACT_QUERY, {}, options);

    return (
      <>
      <Header contact={contact}/>
      {children}
      <Footer contact={contact}/>
      </>
  );
}
