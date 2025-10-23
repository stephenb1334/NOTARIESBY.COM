import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Check, MapPin, Heart, FileText, Globe, Clock, Star, Shield } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import Image from "next/image"

export default function HomePage() {
  const testimonials = [
    {
      name: "Pat",
      text: "We are very pleased with the very timely and excellent service we received. Jill is very knowledgeable and was able to advise us as to exactly what we needed to do to execute our Estate Trust Documents. Everything was done perfectly. We will use her company again and highly recommend her.",
      rating: 5,
    },
    {
      name: "Paul D",
      text: "Jill was professional, prompt, and made the entire notarization process seamless. Highly recommend her services!",
      rating: 5,
    },
    {
      name: "Barbara Domingues",
      text: "Excellent service! Jill came to our home and handled everything efficiently. Very knowledgeable and friendly.",
      rating: 5,
    },
    {
      name: "John Roman",
      text: "Outstanding notary service. Jill is extremely professional and made the process easy to understand. Will definitely use again!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center bg-white mt-16 lg:mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-notariesby-signature.png"
            alt="Professional notary services"
            fill
            className="object-cover"
            style={{ filter: "blur(2px)" }}
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-balance leading-tight text-black">
            Reliable Mobile Notary Services—On Time, On Your Terms
          </h1>
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Certified, insured, and ready to help with real estate closings, affidavits, and general notarizations
            across the West Coast.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge
              variant="outline"
              className="bg-white/95 text-[#4C5870] border-[#4C5870]/20 px-5 py-2.5 text-sm font-medium shadow-sm"
            >
              <Check className="w-4 h-4 mr-2 text-[#10B981]" />
              NNA Certified
            </Badge>
            <Badge
              variant="outline"
              className="bg-white/95 text-[#4C5870] border-[#4C5870]/20 px-5 py-2.5 text-sm font-medium shadow-sm"
            >
              <Shield className="w-4 h-4 mr-2 text-[#4C5870]" />
              Bonded & Insured
            </Badge>
            <Badge
              variant="outline"
              className="bg-white/95 text-[#4C5870] border-[#4C5870]/20 px-5 py-2.5 text-sm font-medium shadow-sm"
            >
              <Clock className="w-4 h-4 mr-2 text-[#4C5870]" />
              Same-Day Appointments
            </Badge>
            <Badge
              variant="outline"
              className="bg-white/95 text-[#4C5870] border-[#4C5870]/20 px-5 py-2.5 text-sm font-medium shadow-sm"
            >
              <Clock className="w-4 h-4 mr-2 text-[#4C5870]" />
              Evenings & Weekends
            </Badge>
            <Badge
              variant="outline"
              className="bg-white/95 text-[#4C5870] border-[#4C5870]/20 px-5 py-2.5 text-sm font-medium shadow-sm"
            >
              <MapPin className="w-4 h-4 mr-2 text-[#4C5870]" />
              Mobile Service
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button variant="dark" size="lg" className="w-full sm:w-auto px-8">
                Learn More
              </Button>
            </Link>
            <Link href="/schedule">
              <Button variant="cta" size="lg" className="w-full sm:w-auto px-8">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ImageCarousel />

      <section className="py-16 lg:py-24 bg-[#1F2238] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.02) 10px, rgba(255, 255, 255, 0.02) 20px)`,
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">
              Expert Notary Services for Your Most Important Transactions
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              We focus on high-value notary services with expertise in loan document signings and estate planning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6 text-gray-900">Loan Document Signings</h2>
              <p className="text-gray-800 mb-8 leading-relaxed">
                Expert notarization for mortgage refinances, purchases, and title company work. We ensure a smooth and
                compliant signing process.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Mortgage refinances</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Home purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Title company work</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Experienced with all major lenders</span>
                </li>
              </ul>

              <Link href="/contact">
                <Button size="lg" className="bg-[#2C3036] hover:bg-[#4C5870] text-white">
                  Book Loan Document Signing
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/loan-document-signing.jpg"
                alt="Loan Document Signing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4 text-gray-900">Our Notary Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide comprehensive notary and related services throughout Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Document Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Document Services</CardTitle>
                <CardDescription>Professional notarization and apostille services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">General document notarization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile notary services covering all 67 Florida counties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Witnesses for document signing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Extended hours notary services (with convenience fee)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">LegalZoom document notarization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Apostille document authentication for international use</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services" className="w-full">
                  <Button variant="dark" className="w-full">
                    Book Document Services
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Real Estate Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Real Estate Services</CardTitle>
                <CardDescription>Expert notarization for real estate transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real estate document notarization and preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Seller documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">New home purchase documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Loan signing agent services (NNA and LSS Certified)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services" className="w-full">
                  <Button variant="dark" className="w-full">
                    Book Real Estate Services
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Estate Planning */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Estate Planning</CardTitle>
                <CardDescription>Secure your legacy with proper documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Last Will and Testament</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Living Will/Advance Healthcare Directive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Durable Power of Attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full estate planning packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Testamentos, Directivas, Carta de Poder (Spanish services)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services" className="w-full">
                  <Button variant="dark" className="w-full">
                    Book Estate Planning
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4 text-gray-900">
              Florida Apostille Services
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Efficient, Professional Authentication for International Documents
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4C5870]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#4C5870]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Apostille Services</h3>
                  <p className="text-2xl font-bold text-[#4C5870] mb-4">$250 per Apostille document</p>
                  <p className="text-gray-800 leading-relaxed">
                    NotariesBy provides streamlined Apostille services across Tampa Bay, working directly with the US
                    Department of State and appropriate governmental agencies to facilitate the authentication of
                    essential documents.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Documents We Authenticate:</h4>
                <p className="text-gray-800 mb-4">
                  Common State issued documents include Birth Certificates, Death Certificates, Marriage Certificates,
                  Divorce Certificates, Translations, State background Checks, plus more.
                </p>
                <p className="text-gray-800">
                  We offer the apostille service to help expedite and simplify the process for individuals that require
                  a Florida Apostille.
                </p>
              </div>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-800">Birth certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-800">Marriage licenses and divorce decrees</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-800">Powers of attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-800">State background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-800">Document translations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#4C5870] flex-shrink-0" />
                  <h4 className="font-semibold text-gray-900">What is an Apostille?</h4>
                </div>
                <p className="text-sm text-gray-700">
                  An Apostille certifies documents for acceptance in foreign countries under the Hague Apostille
                  Convention.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#4C5870] flex-shrink-0" />
                  <h4 className="font-semibold text-gray-900">Key Information Needed</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Originating state or agency of the document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Destination country for document usage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Wedding Officiant Services - DARK (Shark) with texture */}
      <section className="py-16 lg:py-24 bg-[#2C3036] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.02) 10px, rgba(255, 255, 255, 0.02) 20px)`,
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Elegant Wedding Officiant Services</h2>
            <p className="text-white/90 max-w-2xl mx-auto">Serving Tampa Bay and Surrounding Areas</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-white/20 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="w-6 h-6 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Personalized Wedding Ceremonies</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Your wedding day is a cherished milestone deserving of a meaningful, personalized ceremony. As your
                  dedicated officiant, I expertly craft ceremonies tailored to your unique love story.
                </p>
              </div>

              <div className="border border-white/20 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Legal Credentials</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Commissioned State of Florida Notary Public fully authorized to officiate weddings.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-white/20 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="w-6 h-6 flex-shrink-0" />
                  <h4 className="font-semibold">Wedding Services Include</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Traditional wedding ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Intimate elopements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Non-denominational ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Personalized vow writing assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Marriage license guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Ceremony rehearsal coordination</span>
                  </li>
                </ul>
              </div>

              <div className="border border-white/20 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <h4 className="font-semibold">Service Area</h4>
                </div>
                <p className="text-sm text-white/90">
                  Tampa Bay, Pasco County, Hillsborough County, and surrounding areas throughout Florida
                </p>
              </div>

              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full bg-white text-[#2C3036] hover:bg-gray-100">
                  Schedule Wedding Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4 text-gray-900">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700">5.0 from 4 Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 italic mb-4 leading-relaxed text-lg">{testimonial.text}</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6 text-gray-900">
                Schedule Your Notary Appointment Today
              </h2>
              <p className="text-gray-800 mb-8 leading-relaxed">
                Our mobile notary service comes to you at your convenience. Book an appointment today and experience our
                professional, reliable service.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white">
                  Book Now
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/professional-meeting-space.jpg"
                alt="Professional meeting space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#1F2238] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.02) 10px, rgba(255, 255, 255, 0.02) 20px)`,
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Our Founder</h2>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                Jill Munoz brings over 20 years of experience in notary services and real estate to West Coast Notaries.
                Her dedication to professionalism and client satisfaction has made her one of the most trusted notaries
                in Florida.
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#A9A9A9] text-sm">5.0 from 4 Google Reviews</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/team/jill33.png"
                  alt="Jill Munoz, Founder"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Professional Credentials - DARK (Shark) with texture */}
      <section className="py-16 lg:py-24 bg-[#2C3036] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.02) 10px, rgba(255, 255, 255, 0.02) 20px)`,
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Our Professional Credentials</h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Licensed, insured, and committed to excellence in every notarization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/notary-commission-certificate.jpg"
                  alt="Notary Commission"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Notary Commission</h3>
              <p className="text-white/90 text-sm">
                Commissioned by the State of Florida with current and active notary status.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/nna-certification-badge.jpg"
                  alt="NNA Certification"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">NNA Certification</h3>
              <p className="text-white/90 text-sm">
                Certified Signing Agent through the National Notary Association with ongoing education.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/images/eo-insurance-document.jpg" alt="E&O Insurance" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E&O Insurance</h3>
              <p className="text-white/90 text-sm">
                Fully insured with Errors & Omissions coverage for your protection and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4 text-gray-900">Service Areas</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide mobile notary services throughout all 67 Florida counties, including:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Tampa",
              "St. Petersburg",
              "Clearwater",
              "Largo",
              "Pinellas Park",
              "Seminole",
              "Palm Harbor",
              "Wesley Chapel",
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg text-center border border-gray-200 shadow-sm">
                <p className="font-medium text-gray-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
