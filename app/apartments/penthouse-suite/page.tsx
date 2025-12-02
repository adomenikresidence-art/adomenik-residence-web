import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"
import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowLeft, Bed, Bath, Maximize, Trees } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Penthouse Suite | Luxury Zakaki Apartments Limassol",
  description: "Luxurious 3-bedroom penthouse suite with private roof garden and stunning Mediterranean views in Zakaki, Limassol.",
  openGraph: {
    title: "Penthouse Suite | Zakaki Limassol",
    description: "Experience premium luxury living at this exclusive 3-bedroom penthouse with a large private roof garden and panoramic views.",
    url: "https://a-domenik-residence.com/apartments/penthouse-suite",
    images: [
      {
        url: "/apartment-frontview.jpg",
        width: 1200,
        height: 630,
        alt: "Penthouse Suite in Zakaki, Limassol"
      }
    ]
  },
  alternates: {
    canonical: "https://a-domenik-residence.com/apartments/penthouse-suite"
  }
}

const apartment = {
  id: "penthouse-suite",
  name: "Penthouse Suite",
  floor: 3,
  bedrooms: 3,
  bathrooms: 2,
  area: 84.1,
  veranda: 22.7,
  roofGarden: 44.6,
  price: "€370,000",
  status: "Available",
  shortDescription: "Luxurious penthouse with expansive roof garden and panoramic Mediterranean views",
  fullDescription: "Experience the pinnacle of luxury living in this exceptional 3rd-floor penthouse with exclusive roof garden access. This residence delivers 84.1m² of meticulously designed interior space complemented by a 22.7m² veranda and an impressive 44.6m² private roof garden. Floor-to-ceiling windows flood the space with natural Mediterranean light, while premium finishes ensure ultimate comfort and sophistication.",
  images: [
    "/apartment-frontview.jpg",
    "/apartments/bedroom.jpg",
    "/apartments/kitchen.jpg",
    "/apartments/living-room.jpg",
    "/apartments/roofgarden.jpg"
  ],
  features: [
    "Floor-to-ceiling windows with Mediterranean views",
    "270-degree panoramic sea and city views",
    "Private 44.6m² roof garden with WC, bathroom, and BBQ area",
    "Provision for jacuzzi installation",
    "Elevator access",
    "Energy-efficient A+",
    "Private storage room",
    "Two covered parking spaces",
    "Fully air-conditioned"
  ]
}

export default function PenthouseSuitePage() {
  return (
    <div className="min-h-screen">
      <div id="top"></div>
      <Navigation />

      {/* Back Button */}
      <section className="pt-24 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/apartments">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={20} />
              Back to All Apartments
            </Button>
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl font-semibold mb-2">{apartment.name}</h1>
          <p className="text-lg text-foreground/70">
            Floor {apartment.floor} • Zakaki, Limassol, Cyprus
          </p>
          <p className="text-4xl font-serif font-semibold text-primary my-4">{apartment.price}</p>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ImageCarousel images={apartment.images} apartmentName={apartment.name} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <Card className="p-6 text-center">
            <Bed size={32} className="text-primary mx-auto mb-3" />
            <p className="text-2xl font-semibold">{apartment.bedrooms}</p>
            <p className="text-sm text-foreground/60">Bedrooms</p>
          </Card>
          <Card className="p-6 text-center">
            <Bath size={32} className="text-primary mx-auto mb-3" />
            <p className="text-2xl font-semibold">{apartment.bathrooms}</p>
            <p className="text-sm text-foreground/60">Bathrooms</p>
          </Card>
          <Card className="p-6 text-center">
            <Maximize size={32} className="text-primary mx-auto mb-3" />
            <p className="text-2xl font-semibold">{apartment.area}m²</p>
            <p className="text-sm text-foreground/60">Interior</p>
          </Card>
          <Card className="p-6 text-center">
            <Maximize size={32} className="text-primary mx-auto mb-3" />
            <p className="text-2xl font-semibold">{apartment.veranda}m²</p>
            <p className="text-sm text-foreground/60">Veranda</p>
          </Card>
          <Card className="p-6 text-center">
            <Trees size={32} className="text-primary mx-auto mb-3" />
            <p className="text-2xl font-semibold">{apartment.roofGarden}m²</p>
            <p className="text-sm text-foreground/60">Roof Garden</p>
          </Card>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-4">About This Residence</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{apartment.fullDescription}</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Features & Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {apartment.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Property Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Price</span>
                  <span className="font-semibold text-primary text-lg">{apartment.price}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Property Type</span>
                  <span className="font-semibold">Luxury Apartment</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Floor</span>
                  <span className="font-semibold">3rd Floor</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Interior Area</span>
                  <span className="font-semibold">{apartment.area}m²</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Veranda</span>
                  <span className="font-semibold">{apartment.veranda}m²</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Roof Garden</span>
                  <span className="font-semibold">{apartment.roofGarden}m²</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Total Area</span>
                  <span className="font-semibold">{(apartment.area + apartment.veranda + apartment.roofGarden).toFixed(1)}m²</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/60">Parking</span>
                  <span className="font-semibold">2 Covered Spaces</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-foreground/60">Status</span>
                  <span className="font-semibold text-green-600">{apartment.status}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-primary-foreground mb-6">
              <h3 className="font-semibold text-lg mb-2">Interested?</h3>
              <p className="text-sm mb-4 opacity-90">
                Schedule a private viewing or contact our sales team for more information.
              </p>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="w-full mt-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
