import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Available Apartments | Luxury Zakaki Limassol Residences",
  description: "Browse 2 available luxury apartments in Zakaki, Limassol. 3-4 bedroom residences with private roof gardens from €370,000. Mediterranean views, premium finishes.",
  keywords: "apartments for sale Zakaki, luxury penthouses Limassol, Cyprus property for sale, Zakaki real estate, roof garden apartments Cyprus",
  openGraph: {
    title: "Available Luxury Apartments | Zakaki Limassol",
    description: "2 exclusive luxury apartments available in Zakaki, Limassol. Premium residences with roof gardens from €370,000.",
    url: "https://a-domenik-residence.com/apartments",
    images: [
      {
        url: "/apartment-frontview.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury apartment exterior in Zakaki, Limassol"
      }
    ]
  },
  alternates: {
    canonical: "https://a-domenik-residence.com/apartments"
  }
}

export default function ApartmentsPage() {
  const apartments = [
    {
      id: "penthouse-suite",
      name: "Penthouse Suite",
      floor: "3rd Floor",
      bedrooms: 3,
      bathrooms: 2,
      sqm: "84.1",
      veranda: "22.7",
      roofGarden: "44.6",
      price: "€370,000",
      status: "Available",
      image: "/apartment-frontview.jpg",
      features: [
        "Floor-to-ceiling windows with Mediterranean views",
        "Private 44.6m² roof garden",
        "22.7m² covered veranda with lounge area",
        "Elevator access",
      ],
    },
    {
      id: "grand-corner-residence",
      name: "Rooftop Suite",
      floor: "3rd Floor",
      bedrooms: 3,
      bathrooms: 2,
      sqm: "83.8",
      veranda: "22.6",
      roofGarden: "53.3",
      price: "€380,000",
      status: "Available",
      image: "/apartment-frontview.jpg",
      features: [
        "270-degree panoramic sea and city views",
        "53.3m² private roof garden",
        "22.6m² covered veranda",
      ],
    }
  ]

  return (
    <div className="min-h-screen">
      <div id="top"></div>
      <Navigation />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": apartments.map((apt, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Apartment",
                "name": apt.name,
                "description": `${apt.bedrooms} bedroom luxury apartment in Zakaki, Limassol`,
                "numberOfRooms": apt.bedrooms,
                "floorSize": {
                  "@type": "QuantitativeValue",
                  "value": apt.sqm,
                  "unitCode": "MTK"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Zakaki",
                  "addressRegion": "Limassol",
                  "addressCountry": "CY"
                }
              }
            }))
          })
        }}
      />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              2 Units Available in Zakaki
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-balance">Available Apartments</h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Discover our exclusive collection of luxury residences in Zakaki, Limassol. Each thoughtfully designed 
              to offer the pinnacle of sophisticated Mediterranean living with private roof gardens, stunning views, and premium finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apt) => (
              <Card
                key={apt.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={apt.image || "/placeholder.svg"}
                    alt={`${apt.name} - Luxury apartment in Zakaki, Limassol`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      apt.status === "Available" ? "bg-green-500/90 text-white" : "bg-gray-500/90 text-white"
                    }`}
                  >
                    {apt.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-semibold mb-2">{apt.name}</h3>
                    <p className="text-sm text-foreground/60 mb-4">{apt.floor}</p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                      <div>
                        <p className="text-foreground/60">Bedrooms</p>
                        <p className="font-semibold">{apt.bedrooms}</p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Bathrooms</p>
                        <p className="font-semibold">{apt.bathrooms}</p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Interior</p>
                        <p className="font-semibold">{apt.sqm}m²</p>
                      </div>
                    </div>

                    {/* Roof Garden Info for Available Units */}
                    {apt.status === "Available" && apt.roofGarden && (
                      <div className="bg-primary/5 rounded-lg p-3 mb-4">
                        <p className="text-sm font-semibold text-primary">
                          + {apt.roofGarden}m² Private Roof Garden
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold mb-3 text-sm">Key Features</h4>
                    <ul className="space-y-2">
                      {apt.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-foreground/80">
                          <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-border pt-4 mt-4">
                    {apt.status === "Available" ? (
                      <Link href={`/apartments/${apt.id}`} passHref>
                        <Button className="w-full">
                          View Details
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className="w-full"
                        disabled
                        variant="outline"
                      >
                        Sold Out
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl font-semibold">Interested in a Private Tour?</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our sales team would love to show you these exceptional residences in Zakaki and discuss the perfect 
            apartment for your Mediterranean lifestyle in Limassol.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg">Contact Our Sales Team</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
