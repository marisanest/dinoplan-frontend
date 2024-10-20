import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./styles/tailwind.css";
import "./styles/globals.css";
import Header from "@/app/components/header/header";
import {ReactNode} from "react";
import localFont from 'next/font/local';
import Footer from "@/components/footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${afacad.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
