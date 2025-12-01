import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Only 2 Units Remain
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-balance leading-tight">
                Luxury Apartments in a Growing Limassol Area
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Settle into a modern apartment in Zakaki, close to the casino resort, mall, and main roads, in a building designed for long‑term living.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="space-y-1">
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-semibold">Patmou, Zakaki Limassol</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-foreground/60">Completion</p>
                  <p className="font-semibold">2027</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-foreground/60">Starting Price</p>
                  <p className="font-semibold">€370,000+</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/apartments">
                <Button size="lg" className="w-full sm:w-auto">
                  View Available Apartments <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="/apartment-frontview.jpg"
                alt="Luxury apartment interior"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sold Success Section */}
      <section className="bg-primary/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-primary">Exclusive Community</p>
            <p className="text-2xl font-serif font-semibold text-foreground">4 of 6 Units Successfully Sold</p>
            <p className="text-foreground/70">Join our carefully curated community of elite residents</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
