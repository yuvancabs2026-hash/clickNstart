import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlassNav from "@/components/GlassNav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getGlobalData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0e7490",
  width: "device-width",
  initialScale: 1,
};

/** Default metadata — expanded for Phase 2 (SEO). */
// export const metadata: Metadata = {
//   metadataBase: new URL("https://yuvancabs.com"),
//   title: {
//     default: "YuvanCabs Bengaluru - Premium Wheelchair Taxi",
//     template: "%s | YuvanCabs",
//   },
//   description:
//     "Bengaluru's first automated wheelchair taxi with a hydraulic lift. Safe, dignified, and hygienic travel for hospital visits and city travel.",
//   keywords: [
//     "wheelchair taxi bengaluru",
//     "accessible transport",
//     "hydraulic lift taxi",
//     "disability transport bangalore",
//     "hospital discharge transport",
//     "wheelchair cab bangalore",
//   ],
//   openGraph: {
//     title: "YuvanCabs Bengaluru - Premium Wheelchair Taxi",
//     description: "Bengaluru's first automated wheelchair taxi with a hydraulic lift. Safe, dignified, and hygienic travel for hospital visits and city travel.",
//     url: "https://yuvancabs.com",
//     siteName: "YuvanCabs",
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "YuvanCabs Bengaluru - Premium Wheelchair Taxi",
//     description: "Bengaluru's first automated wheelchair taxi with a hydraulic lift. Safe, dignified, and hygienic travel for hospital visits and city travel.",
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://clicknstart.in"),

  title: {
    default: "Click N Start Bengaluru - Premium Wheelchair Taxi",
    template: "%s | Click N Start",
  },

  description:
    "Bengaluru's first automated wheelchair taxi with a hydraulic lift. Safe, dignified, and hygienic travel for hospital visits and city travel.",

  keywords: [
    "wheelchair taxi bengaluru",
    "accessible transport",
    "hydraulic lift taxi",
    "disability transport bangalore",
    "hospital discharge transport",
    "wheelchair cab bangalore",
  ],

  // ✅ ICONS (this is what you need)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  // ✅ OPEN GRAPH (for WhatsApp, LinkedIn, etc.)
  openGraph: {
    title: "Click N Start Bengaluru - Premium Wheelchair Taxi",
    description:
      "Bengaluru's first automated wheelchair taxi with a hydraulic lift.",
    url: "https://clicknstart.in",
    siteName: "Click N Start",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png", // 👈 use this as OG image (or better: custom banner later)
        width: 512,
        height: 512,
        alt: "Click N Start Wheelchair Taxi",
      },
    ],
  },

  // ✅ TWITTER CARDS
  twitter: {
    card: "summary_large_image",
    title: "Click N Start Bengaluru - Premium Wheelchair Taxi",
    description:
      "Safe, dignified wheelchair-accessible transport in Bengaluru.",
    images: ["/android-chrome-512x512.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Click N Start Bengaluru",
  url: "https://clicknstart.in",
  logo: "https://clicknstart.in/icon.svg",
  description: "Bengaluru's premium wheelchair accessible taxi service with automated hydraulic lifts.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8105825544",
    contactType: "customer service",
    areaServed: "Bengaluru",
    availableLanguage: ["en", "kn", "hi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = getGlobalData();

  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20 flex flex-col min-h-screen`}
      >
        <GlassNav data={globalData.nav} />
        <div className="grow">
          {children}
        </div>
        <Footer data={globalData.footer} />
        <WhatsAppFAB data={globalData.whatsapp} />
      </body>
    </html>
  );
}
