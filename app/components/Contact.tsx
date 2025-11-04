"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, Clock, MapPin, CheckCircle, X, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const popupCloseButtonRef = useRef<HTMLButtonElement>(null);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("3PzRZdZuhqytSTXs6");
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  // Focus trap for popup - focus close button when popup opens
  useEffect(() => {
    if (showSuccessPopup && popupCloseButtonRef.current) {
      popupCloseButtonRef.current.focus();
    }
  }, [showSuccessPopup]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.currentTarget);
    const templateParams = {
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      businessType: formData.get("businessType"),
      location: formData.get("location"),
      service: formData.get("service"),
      website: formData.get("website") || "Not provided",
      advertising: formData.get("advertising"),
      goals: formData.get("goals"),
      message: formData.get("message") || "No additional message provided",
      to_email: "support@buzzboldmarketing.com",
    };

    try {
      // Send notification email to business
      const businessEmailResponse = await emailjs.send(
        "service_buzzbold", // Service ID
        "template_contact", // Template ID
        templateParams
      );

      console.log("Business notification sent:", businessEmailResponse);

      // Send auto-reply to customer
      const autoReplyParams = {
        to_email: templateParams.email,
        to_name: templateParams.name,
        business_name: templateParams.businessName,
        business_type: templateParams.businessType,
        location: templateParams.location,
        service: templateParams.service,
        goals: templateParams.goals,
      };

      const autoReplyResponse = await emailjs.send(
        "service_buzzbold", // Service ID
        "template_autoreply", // Auto-reply template ID
        autoReplyParams
      );

      console.log("Auto-reply sent:", autoReplyResponse);

      // Show success popup
      setShowSuccessPopup(true);

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      console.error("Error details:", {
        message: error?.message,
        text: error?.text,
        status: error?.status,
        name: error?.name
      });
      alert("Sorry, there was an error submitting your form. Please try again or email us directly at support@buzzboldmarketing.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-[#020408] via-[#05070f] to-[#0a0d1a] py-20 text-slate-200" id="contact">
      {/* Decorative background elements - Multiple gradient orbs from all sides */}
      {/* Top gradients */}
      <div className="absolute -top-48 left-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-500/15 via-red-500/8 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -top-32 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/12 via-pink-500/6 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      
      {/* Side gradients */}
      <div className="absolute top-1/4 -left-32 h-[450px] w-[450px] rounded-full bg-gradient-to-r from-blue-500/15 via-cyan-500/8 to-transparent blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-orange-500/15 via-amber-500/8 to-transparent blur-3xl" />
      
      {/* Bottom gradients */}
      <div className="absolute -bottom-48 left-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-blue-500/8 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute -bottom-32 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-red-500/15 via-orange-500/8 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
      
      {/* Center gradient for depth */}
      <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/8 via-purple-500/4 to-blue-500/8 blur-3xl" />
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Get Your <span className="text-orange-400">Free SEO Audit</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Every consultation includes a free SEO audit revealing exactly where you&apos;re losing customers online and how to win them back.
              </p>

              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-bold text-gray-900 mb-2">
                    Business Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    placeholder="Smith Plumbing"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@smithplumbing.co.uk"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="07123 456789"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-bold text-gray-900 mb-2">
                      Business Type <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer"
                      >
                        <option value="">Select your industry</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Builder/Construction">Builder/Construction</option>
                        <option value="Roofer">Roofer</option>
                        <option value="Landscaper">Landscaper</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Restaurant/Cafe">Restaurant/Cafe</option>
                        <option value="Retail Shop">Retail Shop</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Other Local Business">Other Local Business</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-bold text-gray-900 mb-2">
                      Your Location <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      placeholder="e.g., Manchester"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">
                    What Do You Need? <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Website Design">Website Design</option>
                      <option value="SEO">SEO</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Complete Package">Complete Package</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-bold text-gray-900 mb-2">
                    Current Website (if you have one)
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://yourwebsite.co.uk"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="advertising" className="block text-sm font-bold text-gray-900 mb-2">
                      Are you currently advertising? <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="advertising"
                        name="advertising"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer"
                      >
                        <option value="">Select advertising method</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Facebook Ads">Facebook Ads</option>
                        <option value="Instagram Ads">Instagram Ads</option>
                        <option value="Local Directories">Local Directories</option>
                        <option value="Print Media">Print Media</option>
                        <option value="Not Currently Advertising">Not Currently Advertising</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="goals" className="block text-sm font-bold text-gray-900 mb-2">
                      What are your goals? <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="goals"
                        name="goals"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 appearance-none cursor-pointer"
                      >
                        <option value="">Select your goal</option>
                        <option value="Get More Leads">Get More Leads</option>
                        <option value="Increase Brand Awareness">Increase Brand Awareness</option>
                        <option value="Improve Online Presence">Improve Online Presence</option>
                        <option value="Rank Higher on Google">Rank Higher on Google</option>
                        <option value="Get More Customer Reviews">Get More Customer Reviews</option>
                        <option value="Beat Local Competition">Beat Local Competition</option>
                        <option value="All of the Above">All of the Above</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Tell Us About Your Business & Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    placeholder="Tell us about your business, what services you offer, and what you want to achieve online..."
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-900 resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">Maximum 1000 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex w-full items-center justify-center gap-2 px-8 py-4 text-base disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Submit contact form to request free SEO audit"
                >
                  {isSubmitting ? "Sending..." : "Get Your Free SEO Audit"}
                </button>

                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Typical project timeframes provided during consultation</p>
                    <p>No obligation • No pressure • Clear answers</p>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side - Info Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Mail className="w-12 h-12 mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Email Us Anytime</h3>
                <a href="mailto:Support@buzzboldmarketing.com" className="text-xl font-semibold text-red-600 hover:text-red-700 transition-colors">
                  Support@buzzboldmarketing.com
                </a>
                <p className="text-gray-600 mt-2">We reply within 24 hours.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Clock className="w-12 h-12 mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Office Hours</h3>
                <p className="text-gray-600 font-semibold">Monday - Friday</p>
                <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 mt-2">Weekend? Leave us a message.</p>
              </div>

              <div className="surface-card rounded-3xl border border-white/12 p-8 text-slate-200">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Serving UK Businesses</h3>
                <p className="text-orange-100">Nationwide coverage across the UK</p>
              </div>

              <div className="bg-red-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Free SEO Audit</h3>
                </div>
                <p className="text-red-100">Every consultation includes a free SEO audit showing exactly where you&apos;re losing customers online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div className="surface-card relative max-w-md w-full animate-in zoom-in duration-500 p-8 md:p-12">
            {/* Close button */}
            <button
              ref={popupCloseButtonRef}
              onClick={handleClosePopup}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close success message"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>

            {/* Success icon with gradient */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-400/40 bg-orange-500/10 text-orange-300">
                <CheckCircle className="h-10 w-10" />
              </div>
            </div>

            {/* Success message */}
            <div className="text-center space-y-4">
              <h3 id="success-title" className="text-3xl font-black text-white">
                Message <span className="text-orange-400">Received!</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Thank you for reaching out. Our team will review your inquiry and get back to you within <span className="font-bold text-white">24 hours</span>.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Check your inbox for a confirmation email.
                </p>
              </div>
            </div>

            {/* Decorative gradient blurs */}
            <div className="absolute -top-20 -left-20 blur-gradient-orange opacity-20" />
            <div className="absolute -bottom-20 -right-20 blur-gradient-pink opacity-20" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
