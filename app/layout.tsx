import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./styles/tailwind.css";
import "./styles/globals.css";
import Header from "@/components/header";
import {ReactNode} from "react";
import localFont from 'next/font/local';
import Footer from "@/components/footer";
import {defineQuery} from "groq";
import {client} from "@/lib/sanity/client";

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
    display: 'swap',
})
const afacad = localFont({
    src: [
        {
            path: './assets/fonts/afacad/Afacad-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './assets/fonts/afacad/Afacad-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: './assets/fonts/afacad/Afacad-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './assets/fonts/afacad/Afacad-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './assets/fonts/afacad/Afacad-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './assets/fonts/afacad/Afacad-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: './assets/fonts/afacad/Afacad-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './assets/fonts/afacad/Afacad-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
    ],
    variable: '--font-afacad'
})

export const metadata: Metadata = {
    title: "Dinoplan",
    description: "Dinoplan",
    openGraph: {
        type: "website",
        url: "https://dinoplan.de",
        title: "Dinoplan",
        description: "",
        siteName: "Dinoplan",
        images: [{
            url: "https://dinoplan.de/ogn.png",
        }],
    },
};

const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    _id, 
    email, 
    calendly,
}`);

const options = { next: { revalidate: 0 } };

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
    const contact = await client.fetch(CONTACT_QUERY, {}, options);

    console.log(contact)
    return (
      <html lang="de">
      <head>
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>

          <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico"/>

          <link rel="manifest" href="/manifest.json"/>
      </head>
      <body className={`${nunito.variable} ${afacad.variable}`}>
      <Header contact={contact}/>
      {children}
      <Footer contact={contact}/>
      </body>
      </html>
  );
}
