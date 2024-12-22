import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tob.codes",
  description: "Ciao! Mi chiamo Tobia Bartolomei.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
