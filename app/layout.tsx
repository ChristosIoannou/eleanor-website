import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

/*
 * The Wix site sets its display face to Neue Haas Grotesk Display Pro, a
 * commercially licensed Monotype family we can't redistribute. Arimo stands in:
 * it is a grotesque with real 800/900 weights, so the display type can be heavy
 * without synthetic thickening. Arimo is the fallback if this reads worse.
 */
const neueHaasSubstitute = Archivo({
  variable: "--font-neue-haas",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Eleanor Cousins Brown",
  description: "Poet, writer and editor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${neueHaasSubstitute.variable} antialiased`}
    >
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important}`}</style>
        </noscript>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
