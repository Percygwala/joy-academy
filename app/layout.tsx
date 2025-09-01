import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
// import Partners from "@/components/site/Partners";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/jf-academy/favicon.ico" />
        <link rel="apple-touch-icon" href="/jf-academy/apple-touch-icon.png" />
        <meta name="theme-color" content="#D7263D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent MutationObserver errors
              if (typeof window !== 'undefined') {
                // Override MutationObserver to prevent errors
                if (window.MutationObserver) {
                  const OriginalMutationObserver = window.MutationObserver;
                  window.MutationObserver = function(callback) {
                    return new OriginalMutationObserver(function(mutations, observer) {
                      try {
                        callback(mutations, observer);
                      } catch (error) {
                        // Silently handle any errors
                        console.warn('MutationObserver error handled:', error.message);
                      }
                    });
                  };
                  
                  // Copy prototype methods
                  window.MutationObserver.prototype = OriginalMutationObserver.prototype;
                  window.MutationObserver.CONSTANTS = OriginalMutationObserver.CONSTANTS;
                }
                
                // Global error handler
                window.addEventListener('error', function(e) {
                  if (e.message && e.message.includes('MutationObserver')) {
                    e.preventDefault();
                    return false;
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} bg-[#A7D8F5] text-[#0B2239] min-h-screen antialiased flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        {/* <Partners /> */}
        <Footer />
      </body>
    </html>
  );
}
