'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  MapPin,
  MessageCircle,
  Award,
  Home,
  Lightbulb,
  Building2,
  AlertTriangle,
  ChevronDown,
  Mail,
  Facebook,
  Twitter,
  Menu,
  X,
  Star
} from 'lucide-react';

export default function BrightWaveElectrical() {
  const [activePage, setActivePage] = useState('home');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: '',
    isEmergency: false,
    message: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrightWave Electrical",
    "image": "/images/electricien-en-uniforme-travaillant-dans-un-central-electrique.jpg",
    "description": "Certified electricians for repairs, rewires, and smart installs. Call our 24h line.",
    "telephone": "020 1234 5678",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "24/7 Emergency Service"
      }
    ],
    "sameAs": [
      "https://facebook.com/brightwaveelectrical",
      "https://twitter.com/brightwaveelec"
    ]
  };

  const services = [
    {
      title: 'Domestic Repairs',
      icon: Home,
      description: 'Circuit testing, socket installation, lighting repairs and replacements',
      image: 'photo-1751486289947-4f5f5961b3aa',
      details: 'Professional domestic electrical services including fault finding, circuit testing, socket and switch installation, lighting repairs, and appliance connections. All work complies with BS7671 18th Edition regulations.',
      safety: 'All repairs include comprehensive testing and certification. Part P compliant installations with 2-year guarantee.'
    },
    {
      title: 'Consumer Unit Upgrades',
      icon: Shield,
      description: 'Full rewires, fuse box replacement, RCD protection upgrades',
      image: 'photo-1635335874521-7987db781153',
      details: 'Upgrade outdated fuse boxes to modern consumer units with RCD protection. Complete rewiring services for older properties, ensuring safety and compliance with current regulations.',
      safety: 'NICEIC certified installations. All work includes EICR testing and certification. Meets latest BS7671 standards.'
    },
    {
      title: 'Smart Home Installation',
      icon: Lightbulb,
      description: 'Home automation, LED lighting, smart thermostats and controls',
      image: 'photo-1736488517606-ff7b014c07a6',
      details: 'Transform your home with smart technology. Install Philips Hue lighting systems, smart thermostats, automated blinds, and integrated home control systems.',
      safety: 'Professional installation ensures compatibility and safety. Full system testing and user training provided.'
    },
    {
      title: 'Commercial Electrical',
      icon: Building2,
      description: 'Offices, retail spaces, PAT testing, emergency lighting',
      image: 'photo-1581092160562-40aa08e78837',
      details: 'Complete commercial electrical services including office fit-outs, retail installations, PAT testing, emergency lighting systems, and maintenance contracts.',
      safety: 'Fully insured for commercial work. Method statements and risk assessments provided. Minimal disruption to business operations.'
    },
    {
      title: '24h Emergency Call-out',
      icon: AlertTriangle,
      description: 'Urgent electrical faults, power loss, safety hazards',
      image: 'photo-1603172159066-6ade2af706c4',
      details: 'Round-the-clock emergency electrical service for urgent faults, complete power loss, burning smells, sparking outlets, and other safety hazards.',
      safety: 'Rapid response team available 24/7. Same-day emergency repairs with immediate safety assessments.'
    }
  ];

  const certifications = [
    { name: 'NICEIC Approved', icon: Award },
    { name: 'Part P Certified', icon: Shield },
    { name: '18th Edition BS7671', icon: CheckCircle },
    { name: 'Fully Insured', icon: Shield },
    { name: '2-Year Guarantee', icon: Award }
  ];

  const stats = [
    { value: '2,500+', label: 'Jobs Completed' },
    { value: '15+', label: 'Years Experience' },
    { value: '100%', label: 'Certified Team' },
    { value: '24/7', label: 'Emergency Available' }
  ];

  const caseStudies = [
    {
      title: 'Power Tripping in Kitchen',
      problem: 'Customer experiencing repeated circuit breaker trips in kitchen, especially when using multiple appliances. Safety concern with potential fire risk.',
      solution: 'Comprehensive circuit testing revealed faulty appliance circuit with damaged wiring behind kitchen units. Replaced damaged cables and upgraded consumer unit with dedicated RCD protection for kitchen circuits.',
      result: 'Kitchen circuits now operating safely with proper RCD protection. Customer can use all appliances simultaneously without issues. Full EICR certification provided.',
      image: 'photo-1467733238130-bb6846885316'
    },
    {
      title: 'Old Fuse Box Upgrade',
      problem: 'Property with 1970s fuse box lacking modern RCD protection. Failed landlord EICR inspection requiring immediate attention.',
      solution: 'Removed obsolete fuse box and installed modern 18th Edition consumer unit with full RCD protection. Updated earth bonding and tested all circuits to current standards.',
      result: 'Property passed EICR inspection with zero defects. Landlord now compliant with rental regulations. Tenants benefit from enhanced electrical safety.',
      image: 'photo-1681117644152-645a04e9e630'
    },
    {
      title: 'New Extension Wiring',
      problem: 'Customer building rear extension requiring complete electrical design and installation for kitchen, utility room, and bathroom.',
      solution: 'Created comprehensive electrical design with dedicated circuits for kitchen appliances, bathroom zones compliant with Part P, and LED lighting throughout. Coordinated with builders for first and second fix installations.',
      result: 'Full electrical installation completed on schedule. All work certified and Building Control approved. Energy-efficient LED lighting reduces running costs.',
      image: 'photo-1667491295131-c6ccecd35f65'
    },
    {
      title: 'Smart Lighting Installation',
      problem: 'Customer wanted whole-home smart lighting control via smartphone, including automated schedules and voice control integration.',
      solution: 'Installed Philips Hue ecosystem throughout property with smart switches, motion sensors, and bridge. Integrated with Amazon Alexa for voice control. Programmed lighting scenes and automated schedules.',
      result: 'Complete smart home lighting control via app and voice commands. Automated lighting saves energy and improves home security. Customer delighted with modern convenience.',
      image: 'photo-1707733260992-73ff6dbed163'
    },
    {
      title: 'Emergency: Complete Power Loss',
      problem: 'Emergency callout for complete property power loss late evening. Family with young children in darkness with no heating.',
      solution: 'Rapid response within 45 minutes. Diagnosed faulty main switch in consumer unit. Replaced main switch and tested all circuits for safety.',
      result: 'Power restored same evening. Family safely back with electricity and heating. Follow-up inspection recommended consumer unit upgrade for long-term reliability.',
      image: 'photo-1603172159066-6ade2af706c4'
    }
  ];

  const faqs = [
    {
      question: 'Are you NICEIC certified?',
      answer: 'Yes, we are fully NICEIC approved contractors. This means our work is regularly assessed to ensure it meets the highest standards. All installations come with NICEIC certification and are covered by their guarantee protection.'
    },
    {
      question: 'Do you offer same-day emergency callouts?',
      answer: 'Yes, our emergency service is available 24/7 including weekends and bank holidays. We aim to respond to emergency callouts within 60-90 minutes across London. Call 020 1234 5678 for immediate assistance.'
    },
    {
      question: "What's included in an EICR test?",
      answer: 'An EICR (Electrical Installation Condition Report) includes comprehensive testing of all circuits, inspection of consumer unit, verification of earthing and bonding, checking for overloaded circuits, and identification of any safety issues. You receive a detailed report with certification valid for 5 years (or 1 year for rental properties).'
    },
    {
      question: 'Can you install smart home systems?',
      answer: 'Absolutely! We specialize in smart home installations including Philips Hue lighting, smart thermostats, automated blinds, and integrated control systems. We provide full installation, configuration, and training so you can make the most of your smart home technology.'
    },
    {
      question: 'Do you work on commercial properties?',
      answer: 'Yes, we provide comprehensive commercial electrical services for offices, retail spaces, restaurants, and other business premises. This includes installations, PAT testing, emergency lighting, maintenance contracts, and electrical safety inspections. We carry full commercial insurance and provide method statements and risk assessments.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'All our electrical work comes with a comprehensive 2-year guarantee covering parts and labour. Additionally, as NICEIC approved contractors, certain installations are covered by the NICEIC Platinum Promise guarantee for up to 6 years.'
    },
    {
      question: 'Do you issue certificates?',
      answer: 'Yes, we provide all necessary certification for electrical work including Minor Works Certificates, Electrical Installation Certificates, and EICR reports. All certificates are digitally registered and you receive both physical and electronic copies.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We cover all London postcodes including Central, North, South, East, and West London. Our main service areas include Westminster, Camden, Islington, Hackney, Tower Hamlets, Southwark, Lambeth, Wandsworth, Hammersmith, Kensington, and surrounding boroughs. Contact us to confirm coverage for your specific postcode.'
    }
  ];

  const serviceAreas = [
    'Westminster (W1, WC1, WC2)',
    'Camden (NW1, NW3, NW5)',
    'Islington (N1, N4, N7)',
    'Hackney (E5, E8, E9)',
    'Tower Hamlets (E1, E2, E14)',
    'Southwark (SE1, SE5, SE15)',
    'Lambeth (SW2, SW4, SW9)',
    'Wandsworth (SW11, SW18)',
    'Hammersmith (W6, W12, W14)',
    'Kensington (SW3, SW5, SW7, W8)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will contact you shortly.');
  };

  const renderHomePage = () => (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2C5282] to-[#1E3A5F] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="flex items-center px-6 sm:px-12 lg:px-16 py-20 lg:py-32 relative z-10">
              <div className="max-w-xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
                  <Shield className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-sm font-semibold text-white">NICEIC Approved • Fully Insured</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.15] tracking-tight">
                  Professional Electrical Services
                  <span className="block text-[#F59E0B] mt-2">You Can Trust</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed font-light">
                  Expert electricians delivering safe, reliable solutions across London. From emergency repairs to full installations — we've got you covered.
                </p>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="tel:02012345678"
                    className="group px-8 py-4 bg-[#F59E0B] hover:bg-[#E08A00] text-white text-lg font-bold rounded-xl transition-all min-h-[56px] flex items-center justify-center gap-3 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>020 1234 5678</span>
                  </a>
                  <button
                    onClick={() => setActivePage('contact')}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg font-bold rounded-xl transition-all min-h-[56px] border-2 border-white/30 hover:border-white/50"
                  >
                    Get Free Quote
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-sm text-white/80 font-medium">Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-sm text-white/80 font-medium">12-Month Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-sm text-white/80 font-medium">Fixed Pricing</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl lg:rounded-3xl border-4 border-white lg:border-8 shadow-xl">
              <Image
                src="/images/electricien-en-uniforme-travaillant-dans-un-central-electrique.jpg"
                alt="Professional electrician team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1E3A5F]/85 via-[#1E3A5F]/40 to-transparent"></div>
              
              {/* Floating review card */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-auto lg:right-10 lg:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xl">★</span>
                  ))}
                  <span className="text-sm font-bold text-[#1E3A5F] ml-2">5.0</span>
                </div>
                <p className="text-[#1E3A5F] font-bold text-lg mb-3 leading-snug">"Excellent service, arrived on time and fixed everything perfectly!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white font-bold">JR</div>
                  <div>
                    <p className="text-sm font-semibold text-[#1E3A5F]">James Richardson</p>
                    <p className="text-xs text-gray-500">Camden • Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Row */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-2">Fully Certified & Trusted</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A5F]">Industry Accreditations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-[#F59E0B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <IconComponent className="w-10 h-10 mx-auto mb-3 text-[#1E3A5F] group-hover:text-[#F59E0B] transition-colors" />
                  <p className="text-xs sm:text-sm font-semibold text-[#1E3A5F] leading-tight">{cert.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional electrical solutions for homes and businesses across London
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  onClick={() => setActivePage('services')}
                  className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#F59E0B] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#2C5282]">
                    <Image
                      src={`https://images.unsplash.com/${service.image}?w=800&q=80`}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-[#F59E0B] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-3 group-hover:text-[#F59E0B] transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-[#F59E0B] font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2C5282] to-[#1E3A5F] py-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">The BrightWave Difference</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">Why Choose Us?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Trusted by hundreds of customers across London
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Fully qualified electricians with comprehensive insurance coverage" },
              { icon: Award, title: "Upfront Pricing", desc: "Fixed quotes with no hidden fees or surprise charges" },
              { icon: Clock, title: "Fast Response", desc: "Same-day service available for all urgent electrical issues" },
              { icon: CheckCircle, title: "Quality Guaranteed", desc: "12-month warranty on all workmanship and installations" }
            ].map((item, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-[#F59E0B] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-[#F59E0B] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:02012345678"
              className="group px-10 py-5 bg-[#F59E0B] hover:bg-[#E08A00] text-white text-lg font-bold rounded-xl transition-all min-h-[60px] flex items-center justify-center gap-3 shadow-2xl hover:shadow-orange-500/50 hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>020 1234 5678</span>
            </a>
            <button
              onClick={() => setActivePage('contact')}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg font-bold rounded-xl transition-all min-h-[60px] border-2 border-white/30 hover:border-white/50"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">Customer Reviews</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-4">What Our Customers Say</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-lg">★</span>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#1E3A5F]">4.8/5 on Google</p>
                  <p className="text-xs text-gray-600">388+ Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-lg">★</span>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#1E3A5F]">4.9/5 on Facebook</p>
                  <p className="text-xs text-gray-600">200+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { quote: "Arrived on time, explained everything clearly, and fixed my wiring issue without any hassle. Professional service from start to finish!", name: "Sarah Mitchell", location: "Camden, London", rating: 5 },
              { quote: "Very friendly team, quick to respond, and the price matched the quote exactly. Super happy with their service and would highly recommend!", name: "James Robertson", location: "Islington, London", rating: 5 },
              { quote: "They installed my new lights perfectly and cleaned up afterward. The attention to detail was impressive. Will definitely use them again!", name: "Olivia Parker", location: "Westminster, London", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F59E0B]">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-base italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#2C5282] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#1E3A5F]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">Service Coverage</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional electrical services across all London boroughs
            </p>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {serviceAreas.map((area, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 flex items-center gap-3 hover:border-[#F59E0B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-[#1E3A5F] font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your area? <a href="tel:02012345678" className="text-[#F59E0B] font-semibold hover:underline">Call us</a> to check coverage.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">Got Questions?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our electrical services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-2xl bg-white transition-all duration-300 overflow-hidden ${
                  openFaq === index 
                    ? 'shadow-xl border-2 border-[#F59E0B]' 
                    : 'shadow-md border-2 border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-start gap-4 min-h-[44px]"
                >
                  <span className="font-bold text-lg text-[#1E3A5F] leading-snug">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openFaq === index 
                      ? 'bg-[#F59E0B] text-white scale-110' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 animate-fadeIn">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* WhatsApp CTA integrated */}
          <div className="mt-16 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl p-8 text-center shadow-xl">
            <p className="text-white/90 mb-4 text-lg font-medium">
              Still have questions? Get instant answers via WhatsApp
            </p>
            <a
              href="https://wa.me/442012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#25D366] px-8 py-4 rounded-xl min-h-[56px] font-bold hover:bg-gray-50 hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2C5282] to-[#1E3A5F] py-32 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Clock className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-sm font-semibold text-white">24/7 Emergency Response Available</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional electrical services with fixed pricing and a 12-month guarantee. Call us today or request a free quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <a
              href="tel:02012345678"
              className="group px-12 py-5 bg-[#F59E0B] hover:bg-[#E08A00] text-white text-lg font-bold rounded-xl transition-all min-h-[64px] flex items-center justify-center gap-3 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>020 1234 5678</span>
            </a>
            <button
              onClick={() => setActivePage('contact')}
              className="px-12 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg font-bold rounded-xl transition-all min-h-[64px] border-2 border-white/30 hover:border-white/50 hover:scale-105"
            >
              Request Free Quote
            </button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-sm font-medium">NICEIC Approved</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-sm font-medium">12-Month Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-sm font-medium">4.8★ Rated</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServicesPage = () => (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A5F] mb-6">
            Our Electrical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional electrical services backed by NICEIC certification and comprehensive guarantees
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <div className="relative h-[300px] sm:h-[360px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={`https://images.unsplash.com/${service.image}?w=1200&q=80`}
                      alt={`${service.title} - Professional electrical service`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/70 via-[#1E3A5F]/20 to-transparent"></div>
                  </div>
                </div>
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#F59E0B] flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F]">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.details}</p>
                  <div className="bg-gradient-to-br from-[#1E3A5F]/5 to-[#2C5282]/5 border-2 border-[#1E3A5F]/10 rounded-xl p-5 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-[#F59E0B]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E3A5F] mb-2 text-lg">Safety & Compliance</h4>
                        <p className="text-gray-700 leading-relaxed">{service.safety}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setActivePage('contact')}
                    className="group px-8 py-4 bg-[#F59E0B] hover:bg-[#E08A00] text-white font-bold rounded-xl transition-all min-h-[56px] shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 flex items-center gap-2"
                  >
                    <span>Get a Quote</span>
                    <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A5F] mb-6">
            About BrightWave Electrical
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            London's trusted electrical experts since 2009
          </p>
        </div>

        {/* Qualified Team */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-12 shadow-xl border-2 border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-[#F59E0B] flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F]">Our Qualified Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "NICEIC Approved Contractors", desc: "All our electricians are NICEIC registered and regularly assessed to ensure the highest standards of workmanship and safety." },
              { title: "Part P Certified", desc: "Fully qualified to carry out all domestic electrical installations in compliance with Building Regulations Part P." },
              { title: "18th Edition BS7671", desc: "All team members hold current 18th Edition Wiring Regulations qualifications, ensuring compliance with the latest electrical safety standards." },
              { title: "Comprehensive Insurance", desc: "We carry £5 million public liability insurance and £10 million professional indemnity insurance for your complete peace of mind." },
              { title: "Method Statements & Risk Assessments", desc: "For all commercial work, we provide detailed method statements and risk assessments to ensure safe working practices." },
              { title: "Continuous Training", desc: "Our team undergoes regular training to stay current with the latest electrical technologies and safety standards." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Card */}
        <div className="bg-gradient-to-br from-[#F59E0B] to-[#E08A00] rounded-2xl p-8 sm:p-12 mb-12 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">Our 12-Month Guarantee</h2>
          </div>
          <p className="text-lg mb-4 leading-relaxed opacity-95">
            Every electrical installation and repair comes with our comprehensive 12-month guarantee covering both parts and labour. This demonstrates our confidence in the quality of our work and our commitment to customer satisfaction.
          </p>
          <p className="text-lg leading-relaxed opacity-95">
            As NICEIC approved contractors, certain installations are also covered by the NICEIC Platinum Promise guarantee for up to 6 years, providing you with additional protection and peace of mind.
          </p>
        </div>

        {/* Why Choose */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F] mb-10 text-center">Why Choose BrightWave?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Clock, title: "Rapid Response", desc: "24/7 emergency service with 60-90 minute response times across London" },
              { icon: Award, title: "Transparent Service", desc: "Clear communication and detailed quotations before any work begins" },
              { icon: CheckCircle, title: "Clean & Tidy", desc: "We respect your property and leave every job site clean and organized" },
              { icon: Zap, title: "Latest Technology", desc: "Experts in smart home systems and energy-efficient solutions" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#F59E0B] hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#1E3A5F]">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectsPage = () => (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1">Case Studies</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-2 leading-tight">
            Recent Projects
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Real electrical challenges we've solved for London customers
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => {
            const stageDetails = [
              {
                key: 'problem',
                label: 'Problem',
                icon: AlertTriangle,
                description: study.problem,
                cardClasses: 'border-red-100 hover:border-red-200 bg-gradient-to-br from-rose-50 via-red-50/70 to-white',
                iconClasses: 'bg-gradient-to-br from-red-500 to-rose-500'
              },
              {
                key: 'solution',
                label: 'Solution',
                icon: Zap,
                description: study.solution,
                cardClasses: 'border-blue-100 hover:border-[#F59E0B] bg-gradient-to-br from-blue-50 via-indigo-50/70 to-white',
                iconClasses: 'bg-gradient-to-br from-[#F59E0B] to-[#E08A00]'
              }
            ] as const;

            return (
              <article
                key={study.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-100 via-transparent to-amber-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-1 md:grid-cols-[1.15fr_1fr]">
                  {/* Media */}
                  <div className="relative h-[260px] sm:h-[320px] md:h-full overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/${study.image}?w=1200&q=80`}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/70 via-[#1E3A5F]/20 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1E3A5F] shadow-sm">
                        Case #{index + 1}
                      </span>
                      <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        Project Spotlight
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F59E0B]">
                          Case Study
                        </span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-black leading-tight text-[#1E3A5F]">
                          {study.title}
                        </h2>
                      </div>
                      <div className="hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm sm:flex">
                        <Clock className="h-3.5 w-3.5 text-[#F59E0B]" />
                        Rapid Response Team
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {stageDetails.map((stage) => {
                        const StageIcon = stage.icon;
                        return (
                          <div
                            key={stage.key}
                            className={`relative flex gap-3 rounded-2xl border p-4 shadow-sm transition-all ${stage.cardClasses}`}
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${stage.iconClasses}`}
                            >
                              <StageIcon className="h-4 w-4" />
                            </div>
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wide text-[#1E3A5F]">
                                {stage.label}
                              </h3>
                              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                {stage.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex gap-3 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white p-5 shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                          Result
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-4 bg-gradient-to-r from-[#1E3A5F] to-[#2C5282] rounded-lg p-6 shadow-lg">
          <p className="text-lg font-bold text-white mb-1">
            Have an electrical challenge?
          </p>
          <p className="text-sm text-white/90 mb-4">
            We'd love to help solve it for you
          </p>
          <button
            onClick={() => setActivePage('contact')}
            className="group px-6 py-3 bg-[#F59E0B] hover:bg-[#E08A00] text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <span>Discuss Your Project</span>
            <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A5F] mb-6">
            Contact BrightWave Electrical
          </h1>
        </div>

        {/* Emergency Callout */}
        <div className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-2xl p-8 sm:p-12 mb-12 text-center shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">24-Hour Emergency Service</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Electrical emergency? Don't wait - call us now for immediate assistance
          </p>
          <a
            href="tel:02012345678"
            className="inline-flex items-center gap-3 bg-white text-[#DC2626] font-bold px-10 py-5 rounded-xl hover:bg-gray-50 transition-all min-h-[64px] text-xl shadow-xl hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            020 1234 5678
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A5F]">Request a Callback</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-[#1E3A5F]">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] min-h-[52px] text-[#1E3A5F] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#1E3A5F]">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] min-h-[52px] text-[#1E3A5F] transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#1E3A5F]">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] min-h-[52px] text-[#1E3A5F] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#1E3A5F]">
                  Postcode *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] min-h-[52px] text-[#1E3A5F] transition-colors"
                  value={formData.postcode}
                  onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#1E3A5F]">
                  Service Required
                </label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] min-h-[52px] text-[#1E3A5F] transition-colors"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Please select...</option>
                  <option value="domestic">Domestic Repairs</option>
                  <option value="consumer">Consumer Unit Upgrade</option>
                  <option value="smart">Smart Home Installation</option>
                  <option value="commercial">Commercial Electrical</option>
                  <option value="emergency">Emergency Call-out</option>
                </select>
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 accent-[#F59E0B]"
                    checked={formData.isEmergency}
                    onChange={(e) => setFormData({...formData, isEmergency: e.target.checked})}
                  />
                  <span className="text-sm text-[#1E3A5F]">
                    <strong className="text-[#DC2626]">This is an emergency</strong> - I need urgent assistance today
                  </span>
                </label>
                {formData.isEmergency && (
                  <div className="mt-2 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-sm text-red-800">
                      For immediate emergency assistance, please call us directly on <strong>020 1234 5678</strong>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#1E3A5F]">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] text-[#1E3A5F] transition-colors"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F59E0B] hover:bg-[#E08A00] text-white font-bold px-6 py-4 rounded-xl transition-all min-h-[60px] shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.02]"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">Phone</h3>
                  <a href="tel:02012345678" className="text-[#F59E0B] hover:text-[#E08A00] font-bold text-xl hover:underline block mb-2">
                    020 1234 5678
                  </a>
                  <p className="text-sm text-gray-600">24/7 Emergency Line</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">Email</h3>
                  <a href="mailto:info@brightwaveelectrical.co.uk" className="text-[#F59E0B] hover:text-[#E08A00] hover:underline break-all">
                    info@brightwaveelectrical.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-[#1E3A5F]">Opening Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong className="text-[#1E3A5F]">Monday - Friday:</strong> 8am - 6pm</p>
                    <p><strong className="text-[#1E3A5F]">Saturday:</strong> 9am - 5pm</p>
                    <p><strong className="text-[#1E3A5F]">Sunday:</strong> Emergency only</p>
                    <p className="text-[#DC2626] font-bold mt-3">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#1E3A5F]">Quick Contact</h3>
              <a
                href="https://wa.me/442012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-4 rounded-xl min-h-[56px] font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 mb-4"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/brightwaveelectrical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-xl hover:bg-[#166FE5] transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/brightwaveelec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] text-white rounded-xl hover:bg-[#1A8CD8] transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F59E0B] to-[#E08A00] rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-bold text-lg mb-3">Need Help?</h3>
              <p className="mb-4 opacity-95">
                Check our FAQ section for answers to common electrical questions
              </p>
              <button
                onClick={() => {
                  setActivePage('home');
                  setTimeout(() => {
                    document.querySelector('#faqs')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-white font-bold hover:underline underline-offset-2"
              >
                View FAQs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact Us', id: 'contact' }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Header */}
        <header className="lg:sticky lg:top-0 lg:z-50">
          <div className="bg-[#1E3A5F] text-white py-3 border-b border-[#2A4A6F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-medium">Fixed Pricing, No Hidden Fees</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
                        strokeWidth={1.5}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-white/70">&bull; 388+ Reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white py-3 text-center font-semibold shadow-lg">
            <div className="flex items-center justify-center gap-2 animate-pulse">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm sm:text-base">
                24/7 Emergency Response <span className="mx-1 text-white/70">&bull;</span> Call{' '}
                <a href="tel:02012345678" className="underline font-bold hover:text-yellow-200">
                  020 1234 5678
                </a>
              </span>
            </div>
          </div>

          <div className="bg-[#1E3A5F] border-b border-[#2A4A6F] backdrop-blur-md bg-[#1E3A5F]/98 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setActivePage('home')}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#E08A00] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white tracking-tight block leading-none">
                      BrightWave
                    </span>
                    <span className="text-xs text-white/60 font-medium">Electrical Services</span>
                  </div>
                </div>

                <nav className="hidden lg:flex items-center gap-2">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                        activePage === item.id
                          ? 'bg-[#F59E0B] text-white shadow-lg shadow-orange-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all cursor-pointer hover:scale-105"
                  >
                    <span className="text-sm font-bold text-white">Get Free Quote</span>
                  </button>
                  <a
                    href="tel:02012345678"
                    className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#E08A00] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-xl hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    <span>020 1234 5678</span>
                  </a>
                </div>

                <button
                  aria-controls="mobile-navigation"
                  aria-expanded={isMobileMenuOpen}
                  className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                  <span className="sr-only">Toggle navigation</span>
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Mobile Navigation */}
              <div
                className={`lg:hidden pb-4 transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 overflow-hidden'
                }`}
                id="mobile-navigation"
              >
                <div className="flex flex-col gap-2 bg-[#14294B] rounded-xl p-4 shadow-lg shadow-black/20">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActivePage(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full px-5 py-3 rounded-lg font-semibold transition-all min-h-[44px] text-sm ${
                        activePage === item.id
                          ? 'bg-[#F59E0B] text-white shadow-lg'
                          : 'bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="grid grid-cols-1 gap-2 pt-2 border-t border-white/10 mt-2">
                    <button
                      onClick={() => {
                        setActivePage('contact');
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-all text-sm font-bold text-white"
                    >
                      Get Free Quote
                    </button>
                    <a
                      href="tel:02012345678"
                      className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#E08A00] text-white font-bold px-4 py-3 rounded-lg transition-all text-sm shadow-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      020 1234 5678
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {activePage === 'home' && renderHomePage()}
          {activePage === 'services' && renderServicesPage()}
          {activePage === 'about' && renderAboutPage()}
          {activePage === 'projects' && renderProjectsPage()}
          {activePage === 'contact' && renderContactPage()}
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFA700] flex items-center justify-center mr-3">
                    <Zap className="w-6 h-6 text-[#1E1E1E]" />
                  </div>
                  <span className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    BrightWave
                  </span>
                </div>
                <p className="text-gray-400">
                  NICEIC certified electricians serving London with pride since 2009
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className="block text-gray-400 hover:text-[#FFA700] transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    020 1234 5678
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    info@brightwaveelectrical.co.uk
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Serving All London
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Certifications</h3>
                <div className="space-y-1 text-gray-400 text-sm">
                  <p>NICEIC Approved</p>
                  <p>Part P Certified</p>
                  <p>18th Edition BS7671</p>
                  <p>£5M Public Liability</p>
                  <p>2-Year Guarantee</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} BrightWave Electrical. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Registered in England. NICEIC Registration: 12345678
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

