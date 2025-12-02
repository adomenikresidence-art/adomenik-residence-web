"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ChevronDown } from "lucide-react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg(null)
    setSubmitting(true)

    try {
      const res = await fetch("/.netlify/functions/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
      })
    } catch (err: any) {
      console.error(err)
      setErrorMsg(err.message || "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }


  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+357 99 405 417"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["adomenikresidence@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["A. DomeNik Residence", "Patmou Zakaki, Limassol 3081, Cyprus"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "Penthouse Suite" },
    { value: "viewing", label: "Rooftop Suite" },
    { value: "other", label: "Other" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ContactPage Structured Data (SEO only, not visible) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact DomeNik Residence Zakaki Limassol",
            "url": "https://a-domenik-residence.com/contact",
            "mainEntity": {
              "@type": "Residence",
              "name": "DomeNik Residence Zakaki Limassol",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "DomeNik Residence, Patmou Street",
                "addressLocality": "Zakaki",
                "addressRegion": "Limassol",
                "postalCode": "3081",
                "addressCountry": "CY",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.39256,
                "longitude": 33.00098,
              },
              "provider": {
                "@type": "RealEstateAgent",
                "name": "DomeNik Residence Sales Office",
                "telephone": "+357-99-405-417",
                "email": "adomenikresidence@gmail.com",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    "opens": "09:00",
                    "closes": "18:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "10:00",
                    "closes": "16:00",
                  },
                ],
                "areaServed": {
                  "@type": "City",
                  "name": "Limassol",
                  "containedInPlace": {
                    "@type": "Country",
                    "name": "Cyprus",
                  },
                },
              },
            },
          }),
        }}
      />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Get In Touch - Zakaki, Limassol
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Have questions about our luxury apartments in Zakaki, Limassol? Our
              dedicated sales team is ready to assist you with property viewings,
              investment opportunities, and Cyprus relocation inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIdx) => (
                        <p key={detailIdx} className="text-sm text-foreground/70">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-4xl font-semibold">Send us a Message</h2>
            <p className="text-lg text-foreground/80">
              Complete the form below and our Zakaki sales team will respond within
              24 hours.
            </p>
          </div>

          <Card className="p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold">Thank You!</h3>
                <p className="text-foreground/70 text-center">
                  Your message has been received. Our Limassol team will be in touch
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                itemScope
                itemType="https://schema.org/ContactForm"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+357 99 000 000"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium mb-2"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-required="true"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us more about your inquiry regarding our Zakaki luxury apartments..."
                    aria-required="true"
                  />
                </div>

                <Button size="lg" className="w-full" type="submit">
                  Send Message
                </Button>

                <p className="text-xs text-foreground/60 text-center">
                  We respect your privacy. Your information will only be used to
                  respond to your inquiry about our Zakaki, Limassol properties.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Visible FAQ section for users */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-foreground/80 text-center mb-10 max-w-2xl mx-auto">
            Key information about availability, payments, and how to reserve the remaining apartments in Zakaki, Limassol.
          </p>

          <div className="space-y-4">
            {/* FAQ item 1 */}
            <details className="group border border-border rounded-xl bg-background/60">
              <summary className="flex items-center justify-between px-4 md:px-6 py-4 cursor-pointer list-none">
                <span className="font-semibold text-sm md:text-base text-foreground">
                  Can I schedule a viewing of the Zakaki apartments?
                </span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-transform group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-5 pt-1 text-sm md:text-base text-foreground/80 border-t border-border/60">
                The project is currently under development and physical viewings are not yet available. 
                You can contact our sales team to receive detailed plans, specifications, and updates about 
                the two remaining apartments for sale in Zakaki, Limassol.
              </div>
            </details>

            {/* FAQ item 2 */}
            <details className="group border border-border rounded-xl bg-background/60">
              <summary className="flex items-center justify-between px-4 md:px-6 py-4 cursor-pointer list-none">
                <span className="font-semibold text-sm md:text-base text-foreground">
                  What payment and financing options are available for buying the apartments in Cyprus?
                </span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-transform group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-5 pt-1 text-sm md:text-base text-foreground/80 border-t border-border/60">
                Purchases can be supported by standard banking channels in Cyprus, including major local banks such as 
                Bank of Cyprus, and Eurobank. Buyers can work with their preferred Cypriot bank to arrange financing, subject to that bank’s own eligibility and compliance checks.
              </div>
            </details>

            {/* FAQ item 3 */}
            <details className="group border border-border rounded-xl bg-background/60">
              <summary className="flex items-center justify-between px-4 md:px-6 py-4 cursor-pointer list-none">
                <span className="font-semibold text-sm md:text-base text-foreground">
                  Can I pay from a Russian bank when buying property in Cyprus?
                </span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-transform group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-5 pt-1 text-sm md:text-base text-foreground/80 border-t border-border/60">
                Due to EU sanctions and the strict compliance policies of Cypriot and EU banks, payments originating from Russian banks 
                or routed through Russian payment systems are generally not accepted or are very likely to be blocked. Buyers should arrange 
                payments through compliant banks in Cyprus or other EU jurisdictions and are advised to seek individual guidance from their 
                bank or legal adviser before initiating any transfer.
              </div>
            </details>

            {/* FAQ item 4 */}
            <details className="group border border-border rounded-xl bg-background/60">
              <summary className="flex items-center justify-between px-4 md:px-6 py-4 cursor-pointer list-none">
                <span className="font-semibold text-sm md:text-base text-foreground">
                  Are the Zakaki apartments available for rent or investment schemes?
                </span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-transform group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-5 pt-1 text-sm md:text-base text-foreground/80 border-t border-border/60">
                The Zakaki units are offered strictly as apartments for sale and are not part of a rental program or separate investment scheme. 
                At this stage, only two apartments remain available for purchase.
              </div>
            </details>

            {/* FAQ item 5 */}
            <details className="group border border-border rounded-xl bg-background/60">
              <summary className="flex items-center justify-between px-4 md:px-6 py-4 cursor-pointer list-none">
                <span className="font-semibold text-sm md:text-base text-foreground">
                  How can I reserve one of the remaining Zakaki apartments for sale?
                </span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-transform group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-5 pt-1 text-sm md:text-base text-foreground/80 border-t border-border/60">
                To reserve one of the two remaining apartments for sale, please contact our sales team via the website contact form, email or telephone. 
                We will provide updated availability, price information, the reservation procedure, and guidance on acceptable payment routes through 
                Cypriot banks.
              </div>
            </details>

            <details className="group border border-border rounded-xl bg-background/60">
              <summary className="flex items-center justify-between px-4 md:px-6 py-4 cursor-pointer list-none">
                <span className="font-semibold text-sm md:text-base text-foreground">
                  Can I pay in stages while the project is still under construction?
                </span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-transform group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-5 pt-1 text-sm md:text-base text-foreground/80 border-t border-border/60">
                Yes. Payments are normally made in agreed stages as the project progresses,
                based on the terms set out in your purchase agreement. An initial upfront
                payment is required, and the remaining amounts are scheduled over
                construction milestones. The exact structure and timing of payments are
                calculated and confirmed by your lawyer, so you will have a clear legal
                payment plan before you commit.
              </div>
            </details>

          </div>
        </div>
      </section>


      {/* FAQ Structured Data (SEO only, mirrors visible FAQ) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I schedule a viewing of the Zakaki apartments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The project is currently under development and physical viewings are not yet available. You can contact our sales team to receive detailed plans, specifications, and updates about the two remaining apartments for sale in Zakaki, Limassol.",
                },
              },
              {
                "@type": "Question",
                "name":
                  "What payment and financing options are available for buying the apartments in Cyprus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Purchases can be supported by standard banking channels in Cyprus, including major local banks such as Bank of Cyprus, Hellenic Bank and Eurobank, or other EU-based financial institutions. Buyers can work with their preferred Cypriot bank to arrange financing, subject to that bank’s own eligibility and compliance checks.",
                },
              },
              {
                "@type": "Question",
                "name":
                  "Can I pay from a Russian bank when buying property in Cyprus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Due to EU sanctions and the strict compliance policies of Cypriot and EU banks, payments originating from Russian banks or routed through Russian payment systems are generally not accepted or are very likely to be blocked. Buyers should arrange payments through compliant banks in Cyprus or other EU jurisdictions, and are advised to seek individual guidance from their bank or legal adviser before initiating any transfer.",
                },
              },
              {
                "@type": "Question",
                "name":
                  "Are the Zakaki apartments available for rent or investment schemes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Zakaki units are offered strictly as apartments for sale and are not part of a rental program or separate investment scheme. At this stage, only two apartments remain available for purchase.",
                },
              },
              {
                "@type": "Question",
                "name":
                  "How can I reserve one of the remaining Zakaki apartments for sale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "To reserve one of the two remaining apartments for sale, please contact our sales team via the website contact form, email or telephone. We will provide updated availability, price information, the reservation procedure, and guidance on acceptable payment routes through Cypriot banks.",
                },
              },
              {
                "@type": "Question",
                "name": "Can I pay in stages while the project is still under construction?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Payments are normally made in agreed stages as the project progresses, based on the terms set out in your purchase agreement. An initial upfront payment is required, and the remaining amounts are scheduled over construction milestones. The exact structure and timing of payments are calculated and confirmed by your lawyer, so you will have a clear legal payment plan before you commit."
                }
              }
            ],
          }),
        }}
      />

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-center">
            Visit Our Location
          </h2>
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Find us at 34.39256° N, 33.00098° E in prestigious Zakaki, Limassol.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6622.427204711227!2d33.002722!3d34.390444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzI1LjYiTiAzM8KwMDAnMDkuOCJF!5e0!3m2!1sen!2s!4v1701150000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DomeNik Residence - Zakaki, Limassol"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
