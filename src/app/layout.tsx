import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://tufankiraz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tufan Kiraz · Freelance Full-Stack Developer",
  description:
    "Freelance full-stack developer building ERP, CRM and custom web systems for businesses. Based in Ankara, delivering since 2020. 100+ projects shipped.",
  keywords: [
    "Tufan Kiraz",
    "Full-Stack Developer",
    "ERP",
    "CRM",
    "Web Applications",
    "Next.js",
    "React",
    "Ankara",
    "Freelance Developer",
  ],
  authors: [{ name: "Tufan Kiraz", url: SITE_URL }],
  creator: "Tufan Kiraz",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: SITE_URL,
    title: "Tufan Kiraz · Freelance Full-Stack Developer",
    description:
      "ERP, CRM and custom web systems for businesses. Based in Ankara, delivering since 2020.",
    siteName: "Tufan Kiraz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tufan Kiraz · Freelance Full-Stack Developer",
    description: "ERP, CRM and custom web systems for businesses. Based in Ankara.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
