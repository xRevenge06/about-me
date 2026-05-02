import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tufan Kiraz — Full Stack Developer",
  description:
    "19 yaşında Ankara tabanlı Full Stack Developer. React, Next.js, .NET Core, Node.js ile SaaS ve web uygulamaları geliştiriyorum. Freelance projeler için müsaittir.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    ".NET Core",
    "Node.js",
    "SaaS",
    "Tufan Kiraz",
    "Ankara",
    "Freelance",
    "Web Developer",
  ],
  authors: [{ name: "Tufan Kiraz", url: "https://tufankiraz.vercel.app" }],
  creator: "Tufan Kiraz",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tufankiraz.vercel.app",
    title: "Tufan Kiraz — Full Stack Developer",
    description:
      "React, Next.js, .NET Core ve Node.js ile SaaS ve web uygulamaları geliştiren Full Stack Developer.",
    siteName: "Tufan Kiraz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tufan Kiraz — Full Stack Developer",
    description:
      "React, Next.js, .NET Core ve Node.js ile SaaS ve web uygulamaları geliştiren Full Stack Developer.",
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
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
