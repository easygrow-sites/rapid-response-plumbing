# Rapid Response Plumbing - Melbourne

A comprehensive local SEO-optimized plumbing service website for Melbourne, Australia.

## Website Statistics

- **Total Pages Generated**: 668+
- **Services**: 12 plumbing services
- **Service Areas**: 50 Melbourne suburbs
- **Service+Location Combinations**: 600 unique pages

## Services Offered

1. Emergency Plumbing
2. Blocked Drains
3. Hot Water Systems
4. Leak Detection
5. Gas Fitting
6. Bathroom Renovations
7. Toilet Repairs
8. Tap Installation
9. Pipe Relining
10. Stormwater Drainage
11. Kitchen Plumbing
12. Roof Plumbing

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Image Optimization**: Next.js Image Component
- **Static Export**: Full static site generation

## Key Features

- 🔍 **SEO Optimized**: Unique meta titles, descriptions, and content for every page
- 📱 **Mobile Responsive**: Mobile-first design with responsive layouts
- ⚡ **Fast Loading**: Optimized images and minimal JavaScript
- 📞 **Click-to-Call**: Easy contact buttons on every page
- 🗺️ **Local Focus**: Service+Location pages for maximum local SEO
- 📝 **Blog System**: Built-in blog infrastructure with markdown support
- 📧 **Contact Form**: Integrated lead capture form

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Project Structure

```
├── app/                        # Next.js app directory
│   ├── [slug]/                # Service+Location combo pages (600 pages)
│   ├── about/                 # About page
│   ├── blog/                  # Blog listing and posts
│   ├── contact/               # Contact page with form
│   ├── locations/             # Location pages (50 pages)
│   │   └── [location]/
│   ├── services/              # Service pages (12 pages)
│   │   └── [service]/
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── components/                # Reusable components
│   ├── BlogCard.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LocationCard.tsx
│   └── ServiceCard.tsx
├── lib/                       # Utility functions
│   ├── blog.ts
│   ├── images.ts
│   ├── locations.ts
│   ├── markdown.ts
│   └── services.ts
├── content/                   # Content files
│   └── blog/                  # Blog posts (JSON)
├── public/                    # Static assets
├── locations.json             # All service areas
└── services.json              # All services offered
```

## SEO Strategy

### URL Structure

- Homepage: `/`
- Service pages: `/services/[service-slug]`
- Location pages: `/locations/[location-slug]`
- Service+Location: `/[service-slug]-in-[location-slug]`

### Meta Optimization

Every page includes:
- Unique title tags (< 60 characters)
- Unique meta descriptions (< 160 characters)
- Relevant keywords
- Open Graph tags

### Content Strategy

Each service+location page includes:
- Unique H1 with primary keyword
- 500+ words of location-specific content
- Internal links to related pages
- Strong calls-to-action
- Trust signals and testimonials

## Contact Information

- **Phone**: 1300 RAPID
- **Email**: info@rapidresponseplumbing.com.au
- **Service Area**: Melbourne and surrounding suburbs
- **Hours**: 24/7 Emergency Service

## Business Details

- **Business ID**: test-biz-001
- **Subdomain**: rapid-response-plumbing
- **Industry**: Plumbing Services
- **Location**: Melbourne, Victoria, Australia

## Lead Capture

Contact form submissions are sent to:
```
POST https://dashboard-sigma-six-16.vercel.app/api/leads/submit
```

With business ID: `test-biz-001`

## License

Copyright © 2024 Rapid Response Plumbing. All rights reserved.
