import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/tailwind.css";
import "./styles/globals.css";
import Header from "@/app/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinoplan",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
