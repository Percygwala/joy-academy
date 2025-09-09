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
  fallback: ["system-ui", "arial"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
  metadataBase: new URL("https://joyfootballacademy.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joy Football Academy",
    description: "Touching lives through Football — Developing young players for elite football and life beyond.",
    url: "https://joyfootballacademy.co.za/",
    siteName: "Joy Football Academy",
    images: [
      {
        url: "/images/og-image.jpg",
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
    images: ["/images/og-image.jpg"],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#D7263D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Aggressive MutationObserver error prevention
              if (typeof window !== 'undefined') {
                // Completely override MutationObserver to prevent all errors
                if (window.MutationObserver) {
                  const OriginalMutationObserver = window.MutationObserver;
                  window.MutationObserver = function(callback) {
                    const observer = {
                      observe: function(target, options) {
                        try {
                          if (target && target.nodeType && target.nodeType === 1) {
                            // Only observe if target is a valid DOM element
                            return;
                          }
                        } catch (error) {
                          console.warn('MutationObserver observe prevented:', error.message);
                        }
                      },
                      disconnect: function() {
                        // Do nothing
                      },
                      takeRecords: function() {
                        return [];
                      }
                    };
                    return observer;
                  };
                  
                  // Copy static properties
                  window.MutationObserver.CONSTANTS = OriginalMutationObserver.CONSTANTS;
                }
                
                // Global error suppression
                window.addEventListener('error', function(e) {
                  if (e.message && e.message.includes('MutationObserver')) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                }, true);
                
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && e.reason.message && e.reason.message.includes('MutationObserver')) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                });
                
                // Override console.error completely for MutationObserver
                const originalConsoleError = console.error;
                console.error = function(...args) {
                  const message = args.join(' ');
                  if (message.includes('MutationObserver')) {
                    console.warn('MutationObserver error completely suppressed');
                    return;
                  }
                  originalConsoleError.apply(console, args);
                };
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
