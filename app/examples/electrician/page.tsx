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
  Twitter
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

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrightWave Electrical",
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1800&q=80",
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
      image: 'photo-1621905252507-b35492cc74b4',
      details: 'Professional domestic electrical services including fault finding, circuit testing, socket and switch installation, lighting repairs, and appliance connections. All work complies with BS7671 18th Edition regulations.',
      safety: 'All repairs include comprehensive testing and certification. Part P compliant installations with 2-year guarantee.'
    },
    {
      title: 'Consumer Unit Upgrades',
      icon: Shield,
      description: 'Full rewires, fuse box replacement, RCD protection upgrades',
      image: 'photo-1621905251453-5cb9e63e0c4e',
      details: 'Upgrade outdated fuse boxes to modern consumer units with RCD protection. Complete rewiring services for older properties, ensuring safety and compliance with current regulations.',
      safety: 'NICEIC certified installations. All work includes EICR testing and certification. Meets latest BS7671 standards.'
    },
    {
      title: 'Smart Home Installation',
      icon: Lightbulb,
      description: 'Home automation, LED lighting, smart thermostats and controls',
      image: 'photo-1558002038-1055907df827',
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
      image: 'photo-1518640426253-4b6eb7e57b6f',
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
      image: 'photo-1558618666-3f827d37f385'
    },
    {
      title: 'Emergency: Complete Power Loss',
      problem: 'Emergency callout for complete property power loss late evening. Family with young children in darkness with no heating.',
      solution: 'Rapid response within 45 minutes. Diagnosed faulty main switch in consumer unit. Replaced main switch and tested all circuits for safety.',
      result: 'Power restored same evening. Family safely back with electricity and heating. Follow-up inspection recommended consumer unit upgrade for long-term reliability.',
      image: 'photo-1621905252472-70d2f3e6d53c'
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
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3 text-center font-bold">
        <Phone className="inline w-5 h-5 mr-2" />
        24/7 EMERGENCY: Call 020 1234 5678 Now
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1800&q=80"
          alt="Electrician testing consumer unit for safety compliance"
          fill
          priority={true}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#FFA700] flex items-center justify-center">
              <Zap className="w-12 h-12 text-[#1E1E1E]" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            BrightWave Electrical
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Safe, smart electrical work you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02012345678"
              className="bg-[#FFA700] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#FF9500] transition-colors min-h-[44px] flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <button
              onClick={() => setActivePage('contact')}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1E1E1E] transition-colors min-h-[44px]"
            >
              Book a Safety Check
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Row */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-12 h-12 mx-auto mb-3 text-[#0066FF]" />
                  <p className="text-sm font-semibold text-[#1E1E1E]">{cert.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1E1E1E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FFA700] mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E1E1E]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <IconComponent className="w-12 h-12 text-[#FFA700] mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-[#1E1E1E]">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setActivePage('services')}
              className="bg-[#0066FF] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#0052CC] transition-colors min-h-[44px]"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E1E1E]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Areas We Cover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
                <MapPin className="w-5 h-5 text-[#FFA700] mr-3 flex-shrink-0" />
                <span className="text-[#1E1E1E] font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#1E1E1E] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quick Response via WhatsApp
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get fast answers to your electrical questions or book a service through WhatsApp
          </p>
          <a
            href="https://wa.me/442012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg min-h-[44px] font-bold hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16" id="faqs">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E1E1E]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 min-h-[44px]"
                >
                  <span className="font-semibold text-[#1E1E1E]">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FFA700] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderServicesPage = () => (
    <div className="space-y-16 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Our Electrical Services
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Professional electrical services backed by NICEIC certification and 2-year guarantee
        </p>

        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/${service.image}?w=1200&q=80`}
                      alt={`${service.title} - Professional electrical service`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-12 h-12 text-[#FFA700] mr-4" />
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">{service.details}</p>
                  <div className="bg-[#0066FF]/20 border border-[#0066FF] rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-[#0066FF] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Safety & Compliance</h4>
                        <p className="text-gray-300 text-sm">{service.safety}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setActivePage('contact')}
                    className="bg-[#FFA700] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#FF9500] transition-colors min-h-[44px]"
                  >
                    Get a Quote
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
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          About BrightWave Electrical
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16">
          London's trusted electrical experts since 2009
        </p>

        <div className="bg-white rounded-lg p-8 mb-12 text-[#1E1E1E]">
          <h2 className="text-3xl font-bold mb-6">Our Qualified Team</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#0066FF] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">NICEIC Approved Contractors</h3>
                <p className="text-gray-700">All our electricians are NICEIC registered and regularly assessed to ensure the highest standards of workmanship and safety.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#0066FF] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Part P Certified</h3>
                <p className="text-gray-700">Fully qualified to carry out all domestic electrical installations in compliance with Building Regulations Part P.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#0066FF] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">18th Edition BS7671</h3>
                <p className="text-gray-700">All team members hold current 18th Edition Wiring Regulations qualifications, ensuring compliance with the latest electrical safety standards.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#0066FF] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Comprehensive Insurance</h3>
                <p className="text-gray-700">We carry £5 million public liability insurance and £10 million professional indemnity insurance for your complete peace of mind.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#0066FF] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Method Statements & Risk Assessments</h3>
                <p className="text-gray-700">For all commercial work, we provide detailed method statements and risk assessments to ensure safe working practices.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFA700] rounded-lg p-8 mb-12 text-[#1E1E1E]">
          <div className="flex items-center mb-4">
            <Award className="w-12 h-12 mr-4" />
            <h2 className="text-3xl font-bold">Our 2-Year Guarantee</h2>
          </div>
          <p className="text-lg mb-4">
            Every electrical installation and repair comes with our comprehensive 2-year guarantee covering both parts and labour. This demonstrates our confidence in the quality of our work and our commitment to customer satisfaction.
          </p>
          <p className="text-lg">
            As NICEIC approved contractors, certain installations are also covered by the NICEIC Platinum Promise guarantee for up to 6 years, providing you with additional protection and peace of mind.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 text-[#1E1E1E]">
          <h2 className="text-3xl font-bold mb-6">Why Choose BrightWave?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-[#0066FF]">Rapid Response</h3>
              <p className="text-gray-700">24/7 emergency service with 60-90 minute response times across London</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-[#0066FF]">Transparent Service</h3>
              <p className="text-gray-700">Clear communication and detailed quotations before any work begins</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-[#0066FF]">Clean & Tidy</h3>
              <p className="text-gray-700">We respect your property and leave every job site clean and organized</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-[#0066FF]">Latest Technology</h3>
              <p className="text-gray-700">Experts in smart home systems and energy-efficient solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectsPage = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Recent Projects
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Real electrical challenges we've solved for London customers
        </p>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px]">
                  <Image
                    src={`https://images.unsplash.com/${study.image}?w=1200&q=80`}
                    alt={`Case study: ${study.title} - Electrical repair and installation`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-[#1E1E1E]">{study.title}</h2>

                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#1E1E1E]">Problem</h3>
                        <p className="text-gray-700">{study.problem}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <Zap className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#1E1E1E]">Solution</h3>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#1E1E1E]">Result</h3>
                        <p className="text-gray-700">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Have an electrical challenge? We'd love to help.
          </p>
          <button
            onClick={() => setActivePage('contact')}
            className="bg-[#FFA700] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#FF9500] transition-colors min-h-[44px]"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Contact BrightWave Electrical
        </h1>

        {/* Emergency Callout Highlight */}
        <div className="bg-red-600 text-white rounded-lg p-8 mb-12 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">24-Hour Emergency Service</h2>
          <p className="text-xl mb-6">
            Electrical emergency? Don't wait - call us now for immediate assistance
          </p>
          <a
            href="tel:02012345678"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] text-2xl"
          >
            <Phone className="w-6 h-6" />
            020 1234 5678
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#1E1E1E]">Request a Callback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066FF] min-h-[44px] text-[#1E1E1E]"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066FF] min-h-[44px] text-[#1E1E1E]"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066FF] min-h-[44px] text-[#1E1E1E]"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                  Postcode *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066FF] min-h-[44px] text-[#1E1E1E]"
                  value={formData.postcode}
                  onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                  Service Required
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066FF] min-h-[44px] text-[#1E1E1E]"
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
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5"
                    checked={formData.isEmergency}
                    onChange={(e) => setFormData({...formData, isEmergency: e.target.checked})}
                  />
                  <span className="text-sm text-[#1E1E1E]">
                    <strong className="text-red-600">This is an emergency</strong> - I need urgent assistance today
                  </span>
                </label>
                {formData.isEmergency && (
                  <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">
                      For immediate emergency assistance, please call us directly on <strong>020 1234 5678</strong>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066FF] text-[#1E1E1E]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFA700] text-black font-bold px-6 py-4 rounded-lg hover:bg-[#FF9500] transition-colors min-h-[44px]"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start mb-4">
                <Phone className="w-6 h-6 text-[#FFA700] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1E1E1E]">Phone</h3>
                  <a href="tel:02012345678" className="text-[#0066FF] hover:underline text-lg">
                    020 1234 5678
                  </a>
                  <p className="text-sm text-gray-600 mt-1">24/7 Emergency Line</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start mb-4">
                <Mail className="w-6 h-6 text-[#FFA700] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1E1E1E]">Email</h3>
                  <a href="mailto:info@brightwaveelectrical.co.uk" className="text-[#0066FF] hover:underline">
                    info@brightwaveelectrical.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start mb-4">
                <Clock className="w-6 h-6 text-[#FFA700] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1E1E1E]">Opening Hours</h3>
                  <div className="space-y-1 text-gray-700">
                    <p><strong>Monday - Friday:</strong> 8am - 6pm</p>
                    <p><strong>Saturday:</strong> 9am - 5pm</p>
                    <p><strong>Sunday:</strong> Emergency only</p>
                    <p className="text-red-600 font-bold mt-2">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-[#1E1E1E]">Quick Contact</h3>
              <a
                href="https://wa.me/442012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg min-h-[44px] font-bold hover:bg-[#20BD5A] transition-colors mb-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/brightwaveelectrical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#0066FF] text-white rounded-lg hover:bg-[#0052CC] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/brightwaveelec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1A8CD8] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-[#FFA700] rounded-lg p-6 text-[#1E1E1E]">
              <h3 className="font-bold text-lg mb-3">Need Help?</h3>
              <p className="mb-3">
                Check our FAQ section for answers to common electrical questions
              </p>
              <button
                onClick={() => {
                  setActivePage('home');
                  setTimeout(() => {
                    document.querySelector('#faqs')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-[#0066FF] font-bold hover:underline"
              >
                View FAQs
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
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <head>
        <title>BrightWave Electrical | 24h Electricians and Smart Home</title>
        <meta name="description" content="Certified electricians for repairs, rewires, and smart installs. Call our 24h line." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <div className="min-h-screen bg-[#1E1E1E]" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {/* Header */}
        <header className="bg-[#1E1E1E] border-b border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
                <div className="w-12 h-12 rounded-full bg-[#FFA700] flex items-center justify-center mr-3">
                  <Zap className="w-8 h-8 text-[#1E1E1E]" />
                </div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  BrightWave
                </span>
              </div>

              <nav className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`text-lg font-medium transition-colors min-h-[44px] px-2 ${
                      activePage === item.id
                        ? 'text-[#FFA700]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <a
                href="tel:02012345678"
                className="hidden md:flex items-center gap-2 bg-[#FFA700] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#FF9500] transition-colors min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                020 1234 5678
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden pb-4">
              <div className="flex flex-wrap gap-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                      activePage === item.id
                        ? 'bg-[#FFA700] text-black'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
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
            <div className="grid md:grid-cols-4 gap-8 mb-8">
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
