// FILE PATH: app/project/page.tsx

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Building2, Leaf, Users, Award, ShieldCheck} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Project | Luxury Zakaki Apartments Limassol Cyprus",
  description: "Discover our visionary luxury development in Zakaki, Limassol. LEED Gold certified, 52 floors, award-winning architecture. €850M investment in Cyprus's premier residential project.",
  keywords: "Zakaki development, Limassol luxury project, LEED certified Cyprus, sustainable apartments Limassol, luxury residences Zakaki",
  openGraph: {
    title: "The Project | Luxury Zakaki Apartments Limassol",
    description: "LEED Gold certified luxury development in Zakaki, Limassol. 52 floors of architectural excellence.",
    url: "https://yourdomain.com/project",
    images: [
      {
        url: "/apartment-angleview1.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury apartment building in Zakaki, Limassol"
      }
    ]
  },
  alternates: {
    canonical: "https://yourdomain.com/project"
  }
}

export default function ProjectPage() {
  const highlights = [
  {
    icon: Building2,
    title: "Architectural Excellence",
    description:
      "Contemporary design with clean lines, practical layouts, and quality materials selected for the Mediterranean climate in Zakaki, Limassol.",
  },
  {
    icon: Leaf,
    title: "Energy Efficiency A+",
    description:
      "Energy Performance Certificate (EPC) A+ with enhanced insulation, full air-conditioning provision, and photovoltaic-ready infrastructure.",
  },
  {
    icon: Users,
    title: "Quiet Residential Location",
    description:
      "Located in a calm residential street of Zakaki, close to the casino resort, mall, schools, and main road network without the noise of the city center.",
  },
  {
    icon: ShieldCheck, // or any other icon you prefer
    title: "High-Quality Construction",
    description:
      "Reinforced concrete frame, modern thermal-insulated brickwork, and high-spec aluminum doors and windows designed for durability and comfort.",
  },
]


  const timeline = [
    {
      year: "2025",
      event: "Project Conceptualization",
      description: "Visionary design and planning phase begins with master architects specializing in Mediterranean luxury.",
    },
    {
      year: "2026",
      event: "Ground Breaking",
      description: "Construction begins on the state-of-the-art residential tower in prime Zakaki location.",
    },
    {
      year: "2026",
      event: "Tower Completion",
      description: "Building structure completed with premium interior finishings underway throughout the year.",
    },
    {
      year: "2027",
      event: "Grand Opening",
      description: "Welcome to the pinnacle of luxury Mediterranean living in Limassol, Cyprus.",
    },
  ]

  const amenities = [
    "24/7 Concierge Service",
    "Fine Dining Mediterranean Restaurant",
    "Luxury Spa & Wellness Center",
    "Olympic-Size Infinity Pool",
    "State-of-the-Art Fitness Center",
    "Yoga and Meditation Studios",
    "Private Cinema",
    "Temperature-Controlled Wine Cellar",
    "Business Center with Sea Views",
    "Modern Co-Working Spaces",
    "Valet Parking Service",
    "Professional Pet Care Services",
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
            "@type": "RealEstateProject",
            "name": "Luxury Zakaki Apartments Project",
            "description": "LEED Gold certified luxury residential development in Zakaki, Limassol, Cyprus",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Zakaki",
              "addressRegion": "Limassol",
              "addressCountry": "CY"
            },
            "numberOfFloors": 52,
            "numberOfRooms": 6,
            "amenityFeature": amenities.map(amenity => ({
              "@type": "LocationFeatureSpecification",
              "name": amenity
            }))
          })
        }}
      />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Development Overview - Zakaki, Limassol
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-balance">The Project</h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              A visionary development redefining luxury living in Zakaki, Limassol through innovative architecture,
              Mediterranean sustainability, and uncompromising quality in Cyprus's most prestigious location.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-muted">
            <img
              src="/apartment-angleview2.jpg"
              alt="Luxury apartment building in Zakaki, Limassol, Cyprus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold mb-12 text-center">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-sm text-foreground/70">{highlight.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold mb-12 text-center">
            Development Timeline
          </h2>

          <div className="relative">
            {/* Horizontal line across timeline (desktop) */}
            <div className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  {/* Bullet always aligned on same row */}
                  <div className="relative flex items-center justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  </div>

                  {/* Timeline content */}
                  <p className="text-lg font-serif font-semibold text-primary">
                    {item.year}
                  </p>
                  <h3 className="font-semibold text-lg mt-2">{item.event}</h3>
                  <p className="text-sm text-foreground/70 mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


  

      {/* Project Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl font-serif font-semibold text-primary">3</p>
              <p className="text-foreground/80 font-medium">Total Floors</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-serif font-semibold text-primary">6</p>
              <p className="text-foreground/80 font-medium">Residences</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-serif font-semibold text-primary">Α+</p>
              <p className="text-foreground/80 font-medium">Εnergy Εfficiency</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-serif font-semibold text-primary">Yes</p>
              <p className="text-foreground/80 font-medium">Provision for photovoltaic solar panels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-muted">
              <img src="/luxury-apartment-interior-design-elegant-finishes.jpg" alt="Luxury interior design in Zakaki apartment, Limassol" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-4xl font-semibold mb-4">Mediterranean Design Philosophy</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Every detail has been meticulously crafted to create an environment where form meets function in perfect 
                  harmony with Cyprus's Mediterranean climate. Our design philosophy emphasizes clean lines, natural materials, 
                  abundant natural light, and seamless indoor-outdoor living.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sustainable Luxury</h3>
                  <p className="text-foreground/70">
                    Advanced building systems reduce energy consumption by 40% compared to conventional buildings, 
                    perfectly adapted for Cyprus's climate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Premium Materials</h3>
                  <p className="text-foreground/70">
                    Sourced from Mediterranean and international suppliers, each material is selected for durability, 
                    aesthetics, and sustainability in coastal environments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart Technology</h3>
                  <p className="text-foreground/70">
                    Fully integrated smart home systems provide residents with ultimate control, convenience, and 
                    energy efficiency tailored for Mediterranean living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
