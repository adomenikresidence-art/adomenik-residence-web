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
  bedrooms: 2,
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
      "/apartments/roofgarden.jpg",
      "/floor-plans/0.jpg",
      "/floor-plans/1.jpg",
      "/floor-plans/2.jpg",
      "/floor-plans/3.jpg",
      "/floor-plans/4.jpg",
      "/floor-plans/5.jpg",
      "/floor-plans/6.jpg",
      "/floor-plans/7.jpg",
      "/floor-plans/8.jpg",
      "/floor-plans/9.jpg",
      "/floor-plans/10.jpg",
      "/floor-plans/11.jpg",
      "/floor-plans/12.jpg",
      "/floor-plans/13.jpg",
      "/floor-plans/14.jpg"
    ],
  features: [
    "Floor-to-ceiling windows with Mediterranean views",
    "270-degree panoramic sea and city views",
    "Private 44.6m² roof garden with WC, bathroom, and BBQ area",
    "Provision for jacuzzi installation",
    "Elevator access",
    "Energy-efficient A+",
    "Private storage room",
    "One covered parking spaces",
    "Fully air-conditioned",
    "Provision for photovoltaic solar panels"
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
                  <span className="font-semibold">1 Covered Space</span>
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

      {/* Other Available Apartment Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold mb-12 text-center">Compare with Other Available Residence</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Current Apartment Card */}
            <Card className="p-8 text-center border-2 border-primary/20">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                This Residence
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-6">{apartment.name}</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-4xl font-serif font-semibold text-primary">{apartment.price}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-foreground/60">Interior</span>
                    <p className="font-semibold">{apartment.area}m²</p>
                  </div>
                  <div>
                    <span className="text-foreground/60">Roof Garden</span>
                    <p className="font-semibold">{apartment.roofGarden}m²</p>
                  </div>
                </div>
              </div>
              <Link href={`/apartments/${apartment.id}#top`}>
                <Button size="lg" className="w-full">View Full Details</Button>
              </Link>
            </Card>

            {/* Other Apartment Card */}
            <Card className="p-8 text-center border-2 border-gray-200">
              <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Other Available
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-6">
                {apartment.id === "penthouse-suite" ? "Rooftop Suite" : "Penthouse Suite"}
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-4xl font-serif font-semibold">
                    {apartment.id === "penthouse-suite" ? "€380,000" : "€370,000"}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-foreground/60">Interior</span>
                    <p className="font-semibold">
                      {apartment.id === "penthouse-suite" ? "83.8m²" : "84.1m²"}
                    </p>
                  </div>
                  <div>
                    <span className="text-foreground/60">Roof Garden</span>
                    <p className="font-semibold">
                      {apartment.id === "penthouse-suite" ? "53.3m²" : "44.6m²"}
                    </p>
                  </div>
                </div>
              </div>
              <Link 
                href={apartment.id === "penthouse-suite" ? "/apartments/grand-corner-residence#top" : "/apartments/penthouse-suite#top"}
              >
                <Button size="lg" variant="outline" className="w-full">View Details</Button>
              </Link>
            </Card>
          </div>

          {/* Comparison Highlights */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-semibold text-lg mb-3 text-primary">
                {apartment.roofGarden > 50 
                  ? `Largest roof garden (${apartment.roofGarden}m²)` 
                  : `Spacious roof garden (${apartment.roofGarden}m²)`}
              </h4>
              <p className="text-foreground/70 text-sm">
                {apartment.roofGarden > 50 
                  ? `Enjoy the development's largest private outdoor space at ${apartment.roofGarden}m²` 
                  : `Generous ${apartment.roofGarden}m² private outdoor area`}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-semibold text-lg mb-3 text-primary">
                {apartment.price === "€370,000" ? 'Best Value Option' : 'Premium Choice'}
              </h4>
              <p className="text-foreground/70 text-sm">
                {apartment.price === "€370,000" 
                  ? `€10,000 less than alternative with comparable premium features`
                  : 'Largest outdoor space justifies premium positioning'}
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
