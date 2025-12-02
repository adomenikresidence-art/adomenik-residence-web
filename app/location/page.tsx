import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { MapPin, Train, Utensils, Palette, Waves, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Location - Zakaki, Limassol | Prime Cyprus Real Estate Location",
  description: "Discover prime Zakaki location in Limassol, Cyprus. Walking distance to Mediterranean seafront, Lady's Mile Beach, Limassol Marina. Premium lifestyle with world-class amenities nearby.",
  keywords: "Zakaki Limassol, Zakaki location, Limassol seafront, Lady's Mile Beach, Limassol Marina, Cyprus coastal living, prime Limassol location",
  openGraph: {
    title: "Location - Zakaki, Limassol | Prime Seafront Location",
    description: "Prime Zakaki location near Mediterranean seafront, Lady's Mile Beach, and Limassol Marina.",
    url: "https://a-domenik-residence.com/location",
    images: [
      {
        url: "/urban-walking-street-neighborhood.jpg",
        width: 1200,
        height: 630,
        alt: "Zakaki neighborhood, Limassol, Cyprus"
      }
    ]
  },
  alternates: {
    canonical: "https://a-domenik-residence.com/location"
  }
}

export default function LocationPage() {
  const neighborhoods = [
    {
      category: "Coastal Living",
      icon: Waves,
      locations: [
        "Lady's Mile Beach (1.5 km)",
        "Limassol Marina (4 km)",
        "Mediterranean Seafront Promenade",
        "Beach clubs and water sports",
      ],
    },
    {
      category: "Dining & Cuisine",
      icon: Utensils,
      locations: [
        "Traditional Cypriot tavernas",
        "International fine dining",
        "Seafront restaurants",
        "Gourmet coffee shops",
      ],
    },
    {
      category: "Shopping & Retail",
      icon: ShoppingBag,
      locations: [
        "My Mall Limassol (3 km)",
        "Ermes Department Store (nearby)",
        "Local boutiques and shops",
        "Farmers' markets",
      ],
    },
    {
      category: "Culture & Recreation",
      icon: Palette,
      locations: [
        "Limassol Old Town (5 km)",
        "Limassol Castle",
        "Municipal Gardens",
        "Cultural festivals year-round",
      ],
    },
    {
      category: "Transportation Hub",
      icon: Train,
      locations: [
        "Main coastal highway access",
        "Bus routes to city center",
        "Larnaca Airport (60 km)",
        "Paphos Airport (60 km)",
      ],
    },
  ]

  const attractions = [
    {
      name: "City of Dreams Mediterranean",
      distance: "3 km",
      description:
        "Luxury integrated resort with world-class casino, entertainment venues, fine dining restaurants, and exclusive hospitality experiences.",
    },
    {
      name: "Lady's Mile Beach",
      distance: "1.5 km",
      description: "Pristine Mediterranean beach with golden sand, perfect for swimming and water sports.",
    },
    {
      name: "Limassol Marina",
      distance: "4 km",
      description: "Luxury marina with designer boutiques, gourmet restaurants, and exclusive yachting facilities.",
    },
    {
      name: "Zakaki Marsh Nature Reserve",
      distance: "2 km",
      description: "Protected wetland area, ideal for bird watching and nature walks.",
    },
    {
      name: "My Mall Limassol",
      distance: "3 km",
      description: "Major shopping center with international brands, cinema, and dining options.",
    },
    {
      name: "Limassol Old Town",
      distance: "5 km",
      description: "Historic district with medieval castle, traditional markets, and authentic tavernas.",
    },
    {
      name: "Limassol City Center",
      distance: "4 km",
      description: "Business district, government offices, and commercial hub of the city.",
    },
  ]

  const schools = [
    { name: "The Heritage Private School", distance: "2.5 km", type: "K-12 (British Curriculum)" },
    { name: "The Grammar School Limassol", distance: "5 km", type: "K-12 (British Curriculum)" },
    { name: "American Academy Limassol", distance: "6 km", type: "K-12 (American Curriculum)" },
    { name: "Cyprus University of Technology", distance: "7 km", type: "Higher Education" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Zakaki, Limassol",
            "description": "Prime coastal neighborhood in Limassol, Cyprus, near Lady's Mile Beach and Limassol Marina",
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
            }
          })
        }}
      />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Prime Coastal Location
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-balance">Zakaki, Limassol</h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Situated in one of Limassol's most desirable coastal neighborhoods, our development offers unparalleled 
              access to pristine beaches, luxury marinas, international schools, and Mediterranean lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-muted">
            <iframe
              title="A. DomeNik Residence Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6622.427204711227!2d33.002722!3d34.390444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzI1LjYiTiAzM8KwMDAnMDkuOCJF!5e0!3m2!1sen!2s!4v1701150000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-6 text-center space-y-1">
            <p className="text-xl font-semibold">A. DomeNik Residence</p>
            <p className="text-foreground/80">Patmou, Zakaki, Limassol 3081, Cyprus</p>
            <p className="text-sm text-foreground/60">34.39256° N, 33.00098 E</p>
          </div>
        </div>
      </section>


      {/* Neighborhood Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold mb-12 text-center">Zakaki Neighborhood Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, idx) => {
              const Icon = neighborhood.icon
              return (
                <Card key={idx} className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">{neighborhood.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {neighborhood.locations.map((location, locIdx) => (
                      <li key={locIdx} className="flex items-start gap-3 text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-center">Nearby Attractions</h2>
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Everything you need is within minutes. From pristine Mediterranean beaches to world-class shopping, 
            Zakaki offers the perfect balance of coastal tranquility and urban convenience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-semibold flex-1">{attraction.name}</h3>
                  <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full ml-2">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-foreground/70">{attraction.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-center">Educational Excellence</h2>
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Zakaki is surrounded by prestigious international schools offering British, American, and IB curricula, 
            making it ideal for families seeking quality education in Cyprus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schools.map((school, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{school.name}</h3>
                    <p className="text-sm text-foreground/60 mt-1">{school.type}</p>
                  </div>
                  <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    {school.distance}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility & Transportation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-center">Connectivity & Transportation</h2>
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Zakaki's strategic location provides excellent connectivity throughout Cyprus and internationally, 
            with easy access to both major airports and coastal highways.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-serif text-xl font-semibold mb-3">Local Transport</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>Bus routes to city center: 15 min</li>
                <li>Limassol Old Town: 10 min drive</li>
                <li>Easy walking/cycling paths</li>
                <li>Taxi services available 24/7</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-serif text-xl font-semibold mb-3">Air Travel</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>Larnaca Airport: 60 km (45 min)</li>
                <li>Paphos Airport: 60 km (50 min)</li>
                <li>Direct flights to major EU cities</li>
                <li>VIP airport transfer services</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-serif text-xl font-semibold mb-3">Road Access</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>Coastal A1 Highway: Direct access</li>
                <li>Nicosia Capital: 80 km (1 hour)</li>
                <li>Secure underground parking</li>
                <li>EV charging infrastructure</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Coastal Living */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-semibold mb-6">Mediterranean Coastal Living</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prime Seafront Location</h3>
                  <p className="text-foreground/70">
                    Just 1.5 km from Lady's Mile Beach, one of Limassol's most beautiful beaches with crystal-clear 
                    Mediterranean waters and stunning sunset views.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Walkable & Safe Neighborhood</h3>
                  <p className="text-foreground/70">
                    Quiet residential area with tree-lined streets, dedicated pedestrian paths, and excellent safety 
                    record, perfect for families and professionals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Year-Round Mediterranean Climate</h3>
                  <p className="text-foreground/70">
                    Enjoy 280+ days of sunshine annually with mild winters and warm summers, perfect for outdoor 
                    activities and al fresco dining throughout the year.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">International Community</h3>
                  <p className="text-foreground/70">
                    Zakaki is home to expatriates from around the world, offering a cosmopolitan atmosphere while 
                    maintaining authentic Cypriot charm and hospitality.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-muted">
              <img
                src="/urban-walking-street-neighborhood.jpg"
                alt="Zakaki coastal neighborhood, Limassol, Cyprus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
