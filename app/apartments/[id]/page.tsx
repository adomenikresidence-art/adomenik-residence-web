// FILE: app/apartments/[id]/page.tsx

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowLeft, Bed, Bath, Maximize, Trees } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ImageCarousel from "@/components/image-carousel"
export const dynamicParams = true

// Apartment data
const apartmentsData = {
  "penthouse-suite": {
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
      "Private 44.6m² roof garden with WC, bathroom, and a BBQ area for your enjoyment",
      "The rooftop features a provision for jacuzzi installation.",
      "Elevator access",
      "Energy-efficient A+",
      "Private storage room",
      "Two covered parking spaces",
      "Fully air-conditioned for your comfort"
    ]
  },
  "grand-corner-residence": {
    id: "grand-corner-residence",
    name: "Rooftop Suite",
    floor: 3,
    bedrooms: 2,
    bathrooms: 2,
    area: 83.8,
    veranda: 22.6,
    roofGarden: 53.3,
    price: "€380,000",
    status: "Available",
    shortDescription: "Spacious corner residence with the largest roof garden and 270-degree panoramic views",
    fullDescription: "This exceptional residence redefines luxury Mediterranean living. Situated on the 3rd floor with prime corner positioning for maximum natural light and views, this 2-bedroom residence offers 83.8m² of premium living space, a 22.6m² veranda, and the development's largest private roof garden at 53.3m². The corner location ensures unparalleled privacy and brightness, while the expansive roof garden creates endless possibilities for outdoor entertaining and relaxation under the Cyprus sun.",
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
      "Private 53.3m² roof garden with WC, bathroom, and a BBQ area for your enjoyment",
      "The rooftop features a provision for jacuzzi installation.",
      "Energy-efficient A+",
      "Private storage room",
      "Two covered parking spaces",
      "Fully air-conditioned for your comfort"
    ]
  }
}

type ApartmentId = keyof typeof apartmentsData

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const apartment = apartmentsData[params.id as ApartmentId]
  
  if (!apartment) {
    return {
      title: "Apartment Not Found"
    }
  }

  return {
    title: `${apartment.name} | Luxury Zakaki Apartments Limassol`,
    description: `${apartment.shortDescription}. ${apartment.bedrooms} bedrooms, ${apartment.bathrooms} bathrooms, ${apartment.area}m² + ${apartment.roofGarden}m² roof garden. ${apartment.price}`,
    keywords: `${apartment.name}, Zakaki apartment for sale, Limassol luxury property, roof garden apartment Cyprus, ${apartment.bedrooms} bedroom Limassol`,
    openGraph: {
      title: `${apartment.name} | Zakaki Limassol`,
      description: apartment.shortDescription,
      url: `https://a-domenik-residence.com/apartments/${params.id}`,
      images: [
        {
          url: apartment.images[0],
          width: 1200,
          height: 630,
          alt: `${apartment.name} in Zakaki, Limassol`
        }
      ]
    },
    alternates: {
      canonical: `https://a-domenik-residence.com/apartments/${params.id}`
    }
  }
}

export async function generateStaticParams() {
  return [
    { id: 'penthouse-suite' },
    { id: 'grand-corner-residence' }
  ]
}


export default function ApartmentDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  console.log('Apartment ID requested:', params.id);
  const apartment = apartmentsData[params.id as ApartmentId]
  console.log('Apartment data:', apartment);

  // If apartment doesn't exist, show 404
  if (!apartment) {
    notFound()
  }

  // Get the other available apartment for comparison
  const otherApartment = Object.values(apartmentsData).find(apt => apt.id !== apartment.id)

  return (
    <>
      {/* Scroll to top anchor */}
      <div id="top"></div>
      
      <div className="min-h-screen">
        <Navigation />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Apartment",
              "name": apartment.name,
              "description": apartment.fullDescription,
              "numberOfRooms": apartment.bedrooms,
              "numberOfBathroomsTotal": apartment.bathrooms,
              "floorSize": {
                "@type": "QuantitativeValue",
                "value": apartment.area,
                "unitCode": "MTK"
              },
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
              "image": apartment.images,
              "amenityFeature": apartment.features.map(feature => ({
                "@type": "LocationFeatureSpecification",
                "name": feature
              }))
            })
          }}
        />

        {/* Back Button */}
        <section className="pt-24 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/apartments#top">
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="inline-block bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {apartment.status}
                </div>
                <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-2">
                  {apartment.name}
                </h1>
                <p className="text-lg text-foreground/70">
                  Floor {apartment.floor} • Zakaki, Limassol, Cyprus
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-4xl font-serif font-semibold text-primary mb-2">
                  {apartment.price}
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full md:w-auto">
                    Schedule Viewing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ImageCarousel images={apartment.images} apartmentName={apartment.name} />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
          </div>
        </section>

        {/* Description */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Description */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-semibold mb-4">About This Residence</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {apartment.fullDescription}
                  </p>
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

              {/* Sidebar */}
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
                      // use the same base style as the first, but maybe outlined
                      variant="secondary"
                      className="w-full mt-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Contact Sales Team
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Other Available Apartment Comparison */}
        {otherApartment && (
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
                  <h3 className="font-serif text-2xl font-semibold mb-6">{otherApartment.name}</h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-4xl font-serif font-semibold">{otherApartment.price}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-foreground/60">Interior</span>
                        <p className="font-semibold">{otherApartment.area}m²</p>
                      </div>
                      <div>
                        <span className="text-foreground/60">Roof Garden</span>
                        <p className="font-semibold">{otherApartment.roofGarden}m²</p>
                      </div>
                    </div>
                  </div>
                  <Link href={`/apartments/${otherApartment.id}#top`}>
                    <Button size="lg" variant="outline" className="w-full">View Details</Button>
                  </Link>
                </Card>
              </div>

              {/* Comparison Highlights */}
              <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h4 className="font-semibold text-lg mb-3 text-primary">
                    {apartment.roofGarden > otherApartment.roofGarden 
                      ? `Larger roof garden (${apartment.roofGarden}m²)` 
                      : `Smaller roof garden (${apartment.roofGarden}m²)`}
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    {apartment.roofGarden > otherApartment.roofGarden 
                      ? `Enjoy ${Math.abs(apartment.roofGarden - otherApartment.roofGarden).toFixed(1)}m² more outdoor space` 
                      : `Compact design with focused outdoor area`}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h4 className="font-semibold text-lg mb-3 text-primary">
                    {parseInt(apartment.price.replace(/[^0-9]/g, '')) < parseInt(otherApartment.price.replace(/[^0-9]/g, ''))
                      ? 'More affordable option'
                      : 'Premium priced residence'}
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    {parseInt(apartment.price.replace(/[^0-9]/g, '')) < parseInt(otherApartment.price.replace(/[^0-9]/g, ''))
                      ? `€${Math.abs(parseInt(apartment.price.replace(/[^0-9]/g, '')) - parseInt(otherApartment.price.replace(/[^0-9]/g, ''))).toLocaleString()} less than alternative`
                      : 'Best value for enhanced features'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  )

}



