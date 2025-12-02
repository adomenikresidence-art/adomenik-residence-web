import type { Metadata } from "next"
import ContactPageClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us | Luxury Zakaki Apartments Limassol Cyprus",
  description: "Contact our sales team for luxury apartments in Zakaki, Limassol. Schedule viewings, investment inquiries, Cyprus relocation assistance. +357 99 405 417. Open Mon-Sat.",
  keywords: [
    "contact Zakaki apartments",
    "Limassol property contact",
    "Cyprus real estate inquiry",
    "schedule apartment viewing Limassol",
    "Zakaki sales office",
    "Cyprus property investment contact",
    "Limassol apartment sales",
    "relocation to Cyprus assistance"
  ],
  openGraph: {
    title: "Contact Us | Luxury Zakaki Apartments Limassol",
    description: "Get in touch with our sales team. Schedule viewings, investment inquiries, Cyprus relocation assistance.",
    url: "https://a-domenik-residence.com/contact",
    type: "website",
    images: [
      {
        url: "/luxury-modern-apartment-interior-with-floor-to-cei.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Zakaki luxury apartments sales office"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Luxury Zakaki Apartments",
    description: "Schedule viewings and inquiries for luxury apartments in Zakaki, Limassol, Cyprus."
  },
  alternates: {
    canonical: "https://a-domenik-residence.com/contact"
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function ContactPage() {
  return <ContactPageClient />
}
