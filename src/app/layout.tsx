import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tufan Kiraz — Full Stack Developer",
  description:
    "Revark Yazılım kurucusu ve Full Stack Developer. 6 yıllık deneyim, 100+ proje. React, Next.js, ERP/CRM ve SaaS çözümleri.",
  keywords: [
    "Full Stack Developer",
    "Revark Yazılım",
    "React Developer",
    "Next.js",
    ".NET Core",
    "Node.js",
    "ERP",
    "CRM",
    "SaaS",
    "Tufan Kiraz",
    "Ankara",
    "TypeScript",
  ],
  authors: [{ name: "Tufan Kiraz", url: "https://tufankiraz.vercel.app" }],
  creator: "Tufan Kiraz",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tufankiraz.vercel.app",
    title: "Tufan Kiraz — Full Stack Developer",
    description:
      "Revark Yazılım kurucusu. React, Next.js ile ERP/CRM ve SaaS çözümleri geliştiren Full Stack Developer.",
    siteName: "Tufan Kiraz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tufan Kiraz — Full Stack Developer",
    description:
      "Revark Yazılım kurucusu. React, Next.js ile ERP/CRM ve SaaS çözümleri geliştiren Full Stack Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
