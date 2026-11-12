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

export const metadata: Metadata = {
  metadataBase: new URL("https://clicknstart.in"),
  title: {
    default: "Wheelchair Taxi in Bengaluru & Chennai | Click N Start",
    template: "%s | Click N Start",
  },
  description:
    "Book wheelchair-accessible cabs in Bengaluru and Chennai. Click N Start offers hydraulic-lift transport for hospital visits, dialysis, airport transfers, and everyday travel.",
  keywords: [
    "wheelchair taxi Bengaluru",
    "wheelchair taxi Bangalore",
    "wheelchair cab Bengaluru",
    "wheelchair cab Bangalore",
    "accessible taxi Bengaluru",
    "accessible cab Bangalore",
    "wheelchair taxi Chennai",
    "wheelchair cab Chennai",
    "accessible taxi Chennai",
    "hydraulic lift taxi",
    "wheelchair van with lift",
    "hospital transport for wheelchair users",
    "dialysis transport wheelchair",
    "wheelchair taxi for hospital appointments",
    "non emergency medical transport",
    "wheelchair airport taxi",
    "senior citizen accessible cab",
    "mobility assistance taxi",
    "wheelchair transportation service",
    "accessible medical appointment transport",
  ],
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

  openGraph: {
    title: "Wheelchair Taxi in Bengaluru & Chennai | Click N Start",
    description:
      "Wheelchair-accessible cabs with a hydraulic lift for hospital visits, dialysis, airport transfers, and everyday rides in Bengaluru and Chennai.",
    url: "https://clicknstart.in",
    siteName: "Click N Start",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Click N Start Wheelchair Taxi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wheelchair Taxi in Bengaluru & Chennai | Click N Start",
    description:
      "Safe, dignified wheelchair-accessible transport for hospital visits and daily travel.",
    images: ["/android-chrome-512x512.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Click N Start",
  url: "https://clicknstart.in",
  logo: "https://clicknstart.in/icon.svg",
  description: "Wheelchair-accessible taxi service with hydraulic lifts in Bengaluru and Chennai.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8197814490",
    contactType: "customer service",
    areaServed: ["Bengaluru", "Chennai"],
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
