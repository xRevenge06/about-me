import type { Metadata } from "next";
import { Instrument_Serif, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tufan Kiraz — Full Stack Developer",
  description:
    "Freelance full-stack geliştirici. İşletmeler için ERP, CRM ve özel web sistemleri. Ankara. 2020’den beri.",
  keywords: [
    "Tufan Kiraz",
    "Revark Yazılım",
    "Full Stack Developer",
    "ERP",
    "CRM",
    "Next.js",
    "Ankara",
  ],
  authors: [{ name: "Tufan Kiraz", url: "https://tufankiraz.vercel.app" }],
  creator: "Tufan Kiraz",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tufankiraz.vercel.app",
    title: "Tufan Kiraz — Full Stack Developer",
    description: "Freelance full-stack geliştirici. ERP, CRM ve özel web sistemleri. Ankara.",
    siteName: "Tufan Kiraz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tufan Kiraz — Full Stack Developer",
    description: "Freelance full-stack geliştirici. ERP, CRM ve özel web sistemleri. Ankara.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
