import type { Metadata } from "next";
import "./globals.css";

import { SpeedInsights } from '@vercel/speed-insights/next';

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
        <SpeedInsights />
      </body>
    </html>
  );
}
