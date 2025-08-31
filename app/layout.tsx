import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joy Football Academy",
  description: "Touching lives through Football — Joy Football Academy empowers young footballers through training, education, and excellence.",
  keywords: ["Football Academy", "Soccer Training", "Youth Football South Africa", "Treverton Academy", "Joy Football Academy"],
  authors: [{ name: "Joy Football Academy" }],
  creator: "Joy Football Academy",
  publisher: "Joy Football Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brocodedevsza.github.io"),
  alternates: {
    canonical: "/jf-academy/",
  },
  openGraph: {
    title: "Joy Football Academy",
    description: "Touching lives through Football — Developing young players for elite football and life beyond.",
    url: "https://brocodedevsza.github.io/jf-academy/",
    siteName: "Joy Football Academy",
    images: [
      {
        url: "/jf-academy/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joy Football Academy - Touching lives through Football",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Football Academy",
    description: "Touching lives through Football.",
    images: ["/jf-academy/images/og-image.jpg"],
    creator: "@joyfootballacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/jf-academy/favicon.ico" />
        <link rel="apple-touch-icon" href="/jf-academy/apple-touch-icon.png" />
        <meta name="theme-color" content="#D7263D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} bg-[#A7D8F5] text-[#0B2239] min-h-screen antialiased flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
