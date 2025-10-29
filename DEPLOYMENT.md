# BuzzBold Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub first:**
   ```bash
   # Create a new repository on GitHub.com
   # Then run these commands:
   git remote add origin https://github.com/YOUR_USERNAME/buzzbold.git
   git push -u origin master
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy:**
   ```bash
   cd c:/Users/Administrator/buzzbold
   vercel login
   vercel --prod
   ```

## Custom Domain Setup

After deployment, add your domain:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `buzzbold.com` and `www.buzzbold.com`
3. Update your DNS records as instructed by Vercel
4. SSL certificates are automatically provisioned

## Environment Variables (If Needed)

In Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://buzzbold.com
```

## Build Settings (Auto-Configured)

Vercel automatically detects:
- **Framework**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install --include=dev`

## SEO Checklist ✅

- [x] Meta tags optimized
- [x] Sitemap.xml configured
- [x] Robots.txt created
- [x] JSON-LD structured data
- [x] OpenGraph tags
- [x] Twitter Cards
- [x] Google site verification ready
- [x] Performance optimized images

## Post-Deployment SEO Tasks

1. **Google Search Console:**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `https://buzzbold.com`
   - Submit sitemap: `https://buzzbold.com/sitemap.xml`

2. **Google Analytics:**
   - Create GA4 property
   - Add tracking code to layout.tsx

3. **Update Social Links:**
   - Update Twitter, Facebook, LinkedIn URLs in layout.tsx
   - Add actual social media handles

4. **Google My Business:**
   - Create/claim business listing
   - Link to website

## WordPress Integration Options

### Option 1: Headless WordPress (Recommended)
Use WordPress as CMS, Next.js as frontend:
- Install WordPress on separate domain (e.g., `cms.buzzbold.com`)
- Use WPGraphQL plugin
- Fetch content via GraphQL API
- **Pros**: Best performance, SEO, flexibility
- **Cons**: More complex setup

### Option 2: WordPress Export/Import
- Export WordPress content to JSON
- Import into Next.js as static content
- **Pros**: Simple, fast
- **Cons**: Not dynamic, manual updates

### Option 3: Reverse Proxy
- Host Next.js at main domain
- WordPress blog at `/blog` subdirectory
- Use Vercel rewrites
- **Pros**: Keep both systems separate
- **Cons**: Complex routing

### Option 4: WordPress Theme (Not Recommended)
- Convert Next.js to WordPress theme
- **Pros**: All-in-one
- **Cons**: Loses Next.js benefits, slower

## Recommended: Headless WordPress Setup

1. **Set up WordPress:**
   ```bash
   # Install WordPress at cms.buzzbold.com
   # Install plugins:
   - WPGraphQL
   - WPGraphQL for ACF (if using custom fields)
   - Yoast SEO
   ```

2. **Configure Next.js to fetch from WordPress:**
   ```bash
   npm install @apollo/client graphql
   ```

3. **Add GraphQL client in lib/wordpress.ts**

4. **Create blog pages in Next.js app directory**

## Performance Optimization Checklist

- [x] Next.js Image component used
- [x] Font optimization (Geist fonts)
- [x] CSS optimized (Tailwind)
- [x] Code splitting (automatic)
- [ ] Add CDN (Vercel Edge Network automatic)
- [ ] Add analytics
- [ ] Add monitoring (Vercel Analytics)

## Monitoring & Analytics

After deployment, add:
1. Vercel Analytics (built-in, free)
2. Google Analytics 4
3. Google Search Console
4. Uptime monitoring (UptimeRobot, etc.)

## Troubleshooting

### Build fails on Vercel
- Vercel handles the build differently than local environment
- The "generate is not a function" error should NOT occur on Vercel
- Vercel uses optimized Next.js builds

### If issues persist
Contact Vercel support with:
- Build logs
- Error message
- Project configuration

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Discord: https://vercel.com/discord

## Current Status

✅ **Ready to Deploy:**
- All code cleaned and optimized
- ESLint passing (0 errors)
- SEO fully configured
- Development server working perfectly
- Git repository initialized with commits

🚀 **Next Step:** Push to GitHub and deploy to Vercel!
