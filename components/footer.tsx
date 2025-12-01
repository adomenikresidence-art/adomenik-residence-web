import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">A. DomeNik Residence</h3>
            <p className="text-sm text-background/80">
              Boutique luxury living with premium materials and unrivaled location.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/apartments" className="hover:text-primary transition-colors">
                  Available Apartments
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-primary transition-colors">
                  The Project
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-primary transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">Sales Inquiries</p>
            <p className="text-sm text-background/80">
              <a href="mailto:adomenikresidence@gmail.com" className="hover:text-primary transition-colors">
                adomenikresidence@gmail.com
              </a>
            </p>
            <p className="text-sm text-background/80">
              <a href="tel:+35799405417" className="hover:text-primary transition-colors">
                +357 99405417
              </a>
            </p>
          </div>
        </div>
        
        {/* Bottom Section with Copyright and Developer Credit */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} A. DomeNik Residence. All rights reserved.
            </p>
            
            {/* Developer Credit */}
            <p className="text-center md:text-right">
              Developed by{" "}
              <a 
                href="https://www.foryoudigitalsolutions.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                For You Digital Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
