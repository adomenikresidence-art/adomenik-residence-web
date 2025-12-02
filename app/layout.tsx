import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://a-domenik-residence.com'),
  title: {
    default: "Luxury Apartments in Zakaki, Limassol | Premium Cyprus Real Estate",
    template: "%s | Luxury Zakaki Apartments Limassol"
  },
  description: "Discover exclusive luxury apartments in Zakaki, Limassol, Cyprus. Only 2 boutique residences remaining in this premium development. LEED-certified, world-class amenities, prime location.",
  keywords: [
    "luxury apartments Zakaki",
    "Limassol real estate",
    "Cyprus property",
    "Zakaki apartments for sale",
    "premium residences Limassol",
    "luxury living Cyprus",
    "Zakaki Limassol property",
    "high-end apartments Cyprus",
    "seafront apartments Limassol",
    "investment property Cyprus"
  ],
  authors: [{ name: "A. DomeNik Residence" }],
  creator: "A. Domenik Residence",
  publisher: "A. Domenik Residence",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://a-domenik-residence.com",
    siteName: "Luxury Zakaki Apartments Limassol",
    title: "Luxury Apartments in Zakaki, Limassol | Premium Cyprus Real Estate",
    description: "Exclusive boutique luxury apartments in Zakaki, Limassol. Only 2 units remaining. Premium materials, LEED-certified, world-class amenities.",
    images: [
      {
        url: "/apartment-frontview.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury apartment interior in Zakaki, Limassol"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Apartments in Zakaki, Limassol | Premium Cyprus Real Estate",
    description: "Exclusive boutique luxury apartments in Zakaki, Limassol. Only 2 units remaining.",
    images: ["/luxury-modern-apartment-interior-with-floor-to-cei.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://a-domenik-residence.com"
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  generator: 'v0.app',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        
        {/* Canonical & Geo Meta */}
        <link rel="canonical" href="https://a-domenik-residence.com" />
        <meta name="geo.region" content="CY-04" />
        <meta name="geo.placename" content="Zakaki, Limassol" />
        <meta name="geo.position" content="34.684944;33.027703" />
        <meta name="ICBM" content="34.684944, 33.027703" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Luxury Zakaki Apartments Limassol",
              "description": "Exclusive luxury apartments in Zakaki, Limassol, Cyprus",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zakaki",
                "addressRegion": "Limassol",
                "addressCountry": "CY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.684944",
                "longitude": "33.027703"
              },
              "url": "https://a-domenik-residence.com",
              "priceRange": "370000-380000€"
            })
          }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
