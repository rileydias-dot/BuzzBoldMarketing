# 🚀 BuzzBold Marketing - UK Digital Growth Agency

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

> A high-performance marketing agency website built for UK local businesses. Professional websites, local SEO, and social media management that drives real results.

**Live Site:** [https://buzzboldmarketing.vercel.app/](https://buzzboldmarketing.vercel.app/)

## ✨ Features

### 🎨 Modern Design
- **Gradient-based branding** with orange, red, and pink accents
- **Glassmorphism effects** with backdrop blur
- **Animated gradient backgrounds** with GSAP
- **Responsive design** optimized for mobile and desktop
- **Professional UI** built with Radix UI and shadcn/ui

### 🚀 Performance
- Built with **Next.js 15.5** App Router
- **Server-side rendering** for optimal SEO
- **Optimized animations** with GSAP ScrollTrigger
- **Fast page loads** with code splitting
- **Production-ready** configuration

### 🎬 Advanced Animations
- **GSAP ScrollTrigger** for scroll-based reveals
- **Staggered card animations** on section entry
- **Smooth transitions** throughout
- **Floating gradient orbs** in hero section
- **Hover effects** with scale and glow

### 📱 Sections

1. **Hero Section**
   - Bold headline: "Build to Dominate"
   - Dual CTAs: Call Now + Free SEO Audit
   - Animated gradient orbs
   - Trust indicators with stats
   - Smooth scroll animations

2. **Services Section**
   - 4 core services:
     - High-Quality Websites Built to Convert
     - Local SEO to Dominate Your Market
     - Social Media Posting & Management
     - Dedicated Account Management
   - Icon-based gradient cards
   - Hover effects with animated borders
   - Scroll-triggered reveals

3. **Our Winning Strategy** (Process Section)
   - 3-step methodology:
     1. Discovery & Strategy
     2. Build & Optimize
     3. Execute & Monitor
   - Step badges with gradients
   - Animated card reveals
   - CTA: Request a Free Website Audit

4. **Testimonials/Positioning Section**
   - "Built for Local Businesses That Want Results"
   - 3 value propositions:
     - Done-For-You Service
     - Powered by BrightLocal
     - Built for Tradesmen & Local Businesses
   - Gradient overlays on hover

5. **Contact Section**
   - Comprehensive contact form with 10+ fields
   - Professional success popup
   - Right-side info cards:
     - Call Us Directly
     - Email Us Anytime
     - Office Hours
     - Serving UK Businesses
     - Free SEO Audit offer
   - Form validation ready
   - Smooth scroll animations

6. **Footer**
   - "Book a Free Strategy Call" CTA
   - Company info with gradient logo
   - Social media links (Twitter, LinkedIn, Instagram, Facebook, YouTube)
   - Quick links navigation
   - Contact information
   - Scroll-to-top button

### 🛠️ Tech Stack

**Core Technologies** (Actual versions from package.json):
- **Next.js 15.5.6** - React framework with App Router
- **React 18.3.1** - UI library
- **React DOM 18.3.1** - React DOM rendering
- **TypeScript 5.9.3** - Type safety

**Styling**:
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS transformations
- **Autoprefixer 10.4.21** - Vendor prefixing

**UI Components**:
- **Radix UI** - Accessible component primitives
  - @radix-ui/react-navigation-menu ^1.2.14
  - @radix-ui/react-label ^2.1.7
  - @radix-ui/react-slot ^1.2.3
- **Lucide React 0.548.0** - Icon library
- **shadcn/ui** - Re-usable component system

**Animation**:
- **GSAP 3.13.0** - Professional animation library with ScrollTrigger

**Utilities**:
- **clsx 2.1.1** - Conditional classNames
- **tailwind-merge 3.3.1** - Merge Tailwind classes
- **class-variance-authority 0.7.1** - Component variants

**Integrations**:
- **react-calendly 4.4.0** - Calendly widget integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Elysian11110/BuzzBoldMarketing-Website.git
cd BuzzBoldMarketing-Website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
BuzzBoldMarketing-Website/
├── app/
│   ├── components/
│   │   ├── NewHeader.tsx       # Fixed navigation with mobile menu
│   │   ├── Hero.tsx            # Hero with "Build to Dominate" headline
│   │   ├── Stats.tsx           # Statistics/trust indicators (not in use)
│   │   ├── Services.tsx        # 4 service cards with gradients
│   │   ├── Portfolio.tsx       # "Our Winning Strategy" 3-step process
│   │   ├── Testimonials.tsx    # "Built for Local Businesses" positioning
│   │   ├── Contact.tsx         # Contact form with success popup
│   │   ├── Footer.tsx          # Footer with CTA and social links
│   │   ├── Logo.tsx            # SVG logo component
│   │   └── CalendlyPopup.tsx   # Calendly integration modal
│   ├── globals.css             # Global styles, gradients, animations
│   ├── layout.tsx              # Root layout with SEO metadata
│   └── page.tsx                # Home page composition
├── components/
│   └── ui/                     # Reusable shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts                # Utility functions (cn, etc.)
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Colors

The color scheme uses orange → red → pink gradients. Edit `app/globals.css`:

```css
/* Gradient text utility */
.gradient-text {
    @apply bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent;
}

/* Gradient blur orbs */
.blur-gradient-orange {
    @apply absolute w-96 h-96 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-20;
}
```

### Content

Update content in component files:

- **Hero**: `app/components/Hero.tsx` - Main headline and CTAs
- **Services**: `app/components/Services.tsx` - Service offerings
- **Process**: `app/components/Portfolio.tsx` - 3-step methodology
- **Positioning**: `app/components/Testimonials.tsx` - Value propositions
- **Contact**: `app/components/Contact.tsx` - Form fields and info cards
- **Footer**: `app/components/Footer.tsx` - Footer content and links

### Navigation

Update navigation items in:
- `app/components/NewHeader.tsx` - Header nav
- `app/components/Footer.tsx` - Footer nav

Current navigation:
- Home
- Services
- Our Winning Strategy
- Contact

### SEO & Metadata

Update in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "BuzzBold Marketing | UK Web Design, SEO & Social Media",
  description: "Professional websites, local SEO, and social media...",
  keywords: [...],
  // ... more metadata
};
```

## 🧪 Testing

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Elysian11110/BuzzBoldMarketing-Website)

**Current Deployment:** [https://buzzboldmarketing.vercel.app/](https://buzzboldmarketing.vercel.app/)

### Deploy to Other Platforms

- **Netlify**: Connect your Git repository
- **Cloudflare Pages**: Deploy via Git integration
- **AWS Amplify**: Use the Amplify Console

## 🎯 Performance Optimization

### Already Implemented

✅ Next.js image optimization
✅ Code splitting & lazy loading
✅ CSS minification
✅ Font optimization with Geist
✅ GSAP ScrollTrigger animations
✅ Responsive design (mobile-first)
✅ Production build optimization

### Lighthouse Score Goals

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🔧 Configuration

### EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails to `support@buzzboldmarketing.com`. To set it up:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com)
2. **Create an Email Service**:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Name it `service_buzzbold`
3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template named `template_contact`
   - Use these template variables:
     - `{{name}}`, `{{businessName}}`, `{{email}}`, `{{phone}}`
     - `{{businessType}}`, `{{location}}`, `{{service}}`
     - `{{website}}`, `{{advertising}}`, `{{goals}}`, `{{message}}`
     - `{{to_email}}` (set to support@buzzboldmarketing.com)
4. **API Keys** are already configured in the code:
   - Public Key: `3PzRZdZuhqytSTXs6`
   - Private Key: `aA6qx931eYvFyE61tkG28`

The form will automatically send emails when submitted.

### Environment Variables

Create a `.env.local` file (optional):

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Calendly (if using)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/buzzboldmarketing
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Radix UI** - For accessible component primitives
- **GSAP** - For professional animation library
- **Lucide** - For the beautiful icon library
- **Tailwind CSS** - For utility-first CSS framework
- **shadcn/ui** - For reusable component system

## 📞 Support

For inquiries: **Support@buzzboldmarketing.com**
Phone: **020 1234 5678** (Mon-Fri: 9am-5pm)

## 🗺️ Roadmap

- [x] Initial website launch
- [x] Responsive design (mobile & desktop)
- [x] Advanced GSAP animations
- [x] Contact form with success popup
- [x] Professional service cards
- [x] Fixed navigation with mobile menu
- [x] Form backend integration with EmailJS
- [x] Form validation and accessibility improvements
- [x] Email delivery to support@buzzboldmarketing.com
- [ ] Google Analytics integration
- [ ] Blog section
- [ ] Case studies page
- [ ] Testimonials with real client data
- [ ] Multi-page support (About, Services detail pages)

---

<div align="center">
  <strong>Built with ❤️ for UK Local Businesses</strong>
  <br>
  <sub>Helping tradesmen and local businesses dominate their market</sub>
  <br><br>
  <strong>GitHub:</strong> <a href="https://github.com/Elysian11110/BuzzBoldMarketing-Website">Elysian11110/BuzzBoldMarketing-Website</a>
  <br>
  <strong>Live Site:</strong> <a href="https://buzzboldmarketing.vercel.app/">buzzboldmarketing.vercel.app</a>
</div>
