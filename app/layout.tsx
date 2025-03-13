import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import 'react-phone-number-input/style.css'
import "./styles/tailwind.css";
import "./styles/globals.css";
import Header from "@/components/header";
import {ReactNode} from "react";
import localFont from 'next/font/local';
import Footer from "@/components/footer";
import {defineQuery} from "groq";
import {sanityClient} from "@/lib/sanity/client";
import {getSession} from "@/lib/signIn";
import OverlayMenu from "@/components/overlayMenu";
// import { Analytics } from '@vercel/analytics/next';
import {getMetadata} from "@/lib/metadata";

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

export const metadata: Metadata = getMetadata();

const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    _id, 
    email, 
}`);

const options = { next: { revalidate: 3600 } };

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
    const session = await getSession();
    return (
      <>
          {session.hasAccess ? <AuthenticatedLayout>{children}</AuthenticatedLayout> : <UnauthenticatedLayout>{children}</UnauthenticatedLayout>}
      </>
  );
}

async function AuthenticatedLayout({
                              children,
                          }: Readonly<{
    children: ReactNode;
}>) {
    const contact = await sanityClient.fetch(CONTACT_QUERY, {}, options);

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
        <BasicBodyLayout>
            <OverlayMenu contact={contact} />
            <Header />
            {children}
            <Footer contact={contact} />
        </BasicBodyLayout>
        </html>
    );
}



function UnauthenticatedLayout({children}: Readonly<{children: ReactNode;}>) {
    return (
        <html lang="de">
        <BasicBodyLayout>{children}</BasicBodyLayout>
        </html>
    );
}


function BasicBodyLayout({children}: Readonly<{children: ReactNode;}>) {
    return (
        <body className={`${nunito.variable} ${afacad.variable}`}>
        {children}
        {/*<Analytics key="analytics" />*/}
        </body>
    );
}
