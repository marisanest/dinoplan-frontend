import "./styles/tailwind.css";
import "./styles/globals.css";
import {ReactNode} from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
    return (
      <html lang="de">
      <body>
      {children}
      </body>
      </html>
  );
}
