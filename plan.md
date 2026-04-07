# WheelchairTaxi — SEO-First Development Plan v3.0

> **Last updated:** 2026-02-25  
> **Priority:** SEO → Content → Components → Launch  
> **Stack:** Next.js 15 (App Router), Tailwind CSS, Vercel  
> **Architecture:** Static-first with data abstraction layer for future CMS

---

## The Future-Proof Architecture: Data Abstraction Layer

Instead of hardcoding text into components, we use a Data Access approach:

- **Current State:** Components call functions like `getLandingPageData()`, which read from local `content/en/home.json` or `.mdx` files.
- **Future State:** Update `getLandingPageData()` to `fetch()` from Supabase, Sanity, or Strapi. UI components remain untouched.

---

## Phase 0: Keyword Research & Content Planning

> ⚠️ **This phase did not exist in the original plan. SEO must come before code.**

- [ ] Finalize primary keyword list (7-10 keywords)
  - wheelchair taxi Bangalore
  - wheelchair accessible cab Bengaluru
  - disabled friendly taxi Bangalore
  - senior citizen taxi Bangalore
  - taxi with ramp Bangalore
  - accessible cab booking Bangalore
  - wheelchair transport Bangalore
- [ ] Finalize long-tail keyword list (20-30 keywords for blog posts)
- [ ] Map each keyword → a specific page or blog post
- [ ] Write title tags and meta descriptions for all planned pages
- [ ] Create blog post outlines for first 10 posts
- [ ] Set up Google My Business profile (claim + verify)
- [ ] Set up Google Search Console account
- [ ] Register business on JustDial, Sulekha for local citations
- [ ] Scrape competitor keywords:
  - [ ] `site:kickstartcabs.com` on Google — catalog indexed pages
  - [ ] Google Autocomplete for "wheelchair taxi Bangalore" + variations
  - [ ] "People Also Ask" boxes for each primary keyword
  - [ ] Review JustDial/Sulekha listings for disability transport keywords

---

## Phase 1: SEO-First Infrastructure

> ⚠️ **Changed from original:** SEO metadata is no longer Phase 3 — it's built into the foundation from line 1.

### Sprint 1.1: Environment Initialization
- [x] Initialize Next.js 15 (App Router) project
- [x] Configure Tailwind CSS with custom design tokens
- [x] Set up absolute imports (`@/*`)
- [x] Configure ESLint + Prettier (standard rules)

### Sprint 1.2: Design System
- [x] Migrate custom color palette (Cyan/Teal) into `tailwind.config.js`
- [x] Self-host Inter font via `next/font/google` (eliminates render-blocking)
- [x] Set up glassmorphism CSS utilities in `globals.css`
- [ ] ~~Dark/light mode toggle via `next-themes`~~ → **Deferred** (no ROI for this audience)

### Sprint 1.3: SEO Foundation (Built Into Layout)
- [x] Create `app/layout.tsx` with:
  - [x] Default title template: `%s | WheelchairTaxi Bangalore`
  - [x] Default meta description with primary keyword
  - [x] Open Graph + Twitter Card meta tags
  - [x] `viewport` and `themeColor` meta
  - [x] Self-hosted font applied globally
  - [x] `lang="en"` on `<html>` element
  - [x] JSON-LD `Organization` schema in `<head>`
- [x] Create `robots.ts` via Next.js metadata API
- [x] Create `sitemap.ts` (auto-generate from routes + blog slugs)
- [x] Ensure all pages render as Server Components by default (full HTML for crawlers)

### Sprint 1.4: Deployment Pipeline
- [ ] Set up GitHub repo
- [ ] Connect to Vercel (auto-deploy on push to `main`, previews on PRs)
- [ ] ~~Branch protections + PR reviews~~ → **Deferred** (overhead for small team)
- [ ] ~~Lighthouse CI~~ → **Deferred** (manual Lighthouse runs are sufficient for now)

---

## Phase 2: Core Pages (SEO Baked Into Every Component)

> ⚠️ **Changed from original:** Metadata, schema, and semantic HTML are built into each component from the start — not added later.

### Sprint 2.1: Structural Components
- [x] Slice UI into atomic components (all Server Components by default):
  - [x] `<GlassNav />` — semantic `<nav>` with `aria-label`
  - [x] `<Hero />` — `<h1>` contains primary keyword, hero image uses `priority` prop
  - [x] `<FeatureGrid />` — `<section>` with descriptive `aria-label`
  - [x] `<TestimonialCarousel />` — Client Component (`"use client"`)
  - [x] `<Footer />` — semantic `<footer>` with NAP info (Name, Address, Phone)
  - [x] `<WhatsAppFAB />` — Client Component, deep-link to WhatsApp with pre-filled message
  - [x] `<CTABanner />` — reusable booking CTA for pages and blog posts
  - [x] `<Breadcrumbs />` — for sub-pages and blog posts (BreadcrumbList schema)

### Sprint 2.2: Data Hydration (CMS Prep)
- [x] Create `lib/data.ts` utility with typed data fetchers
- [x] Create `types/content.ts` with TypeScript interfaces (Hero, Features, Reviews, Routes, BlogPost)
- [x] Move all copy into local JSON/constants in `content/` directory
- [x] Map over data in Server Components

### Sprint 2.3: Core Pages
- [x] **Homepage (`/`)**
  - [x] H1 with primary keyword: "Wheelchair Accessible Taxi Service in Bangalore"
  - [x] Feature grid, testimonials, WhatsApp CTA
  - [x] LocalBusiness + TaxiService JSON-LD schema
  - [x] Unique title + meta description
- [x] **Services (`/services`)**
  - [x] Package trips, airport transfers, outstation, medical transport
  - [x] Service JSON-LD schema
- [x] **Booking (`/booking`)**
  - [x] Simple form → WhatsApp deep link (no backend needed for MVP)
- [x] **About (`/about`)**
  - [x] Company story, mission, trust signals
- [x] **Contact (`/contact`)**
  - [x] NAP info matching Google My Business exactly
  - [x] Embedded Google Map
  - [x] Contact form (Formspree or mailto)
- [x] **FAQ (`/faq`)**
  - [x] 10-15 questions targeting "People Also Ask" queries
  - [x] FAQPage JSON-LD schema
- [x] **Privacy Policy + Terms of Service**

### Sprint 2.4: Interactivity (Client Components — Minimal)
- [x] Convert only necessary components to Client Components (`"use client"`):
  - [x] Scroll listener for nav background
  - [x] WhatsApp FAB deep-linking
  - [x] Testimonial carousel
  - [x] Mobile nav toggle
- [x] All images converted to `next/image` with:
  - [x] Explicit `width`, `height`, descriptive `alt` text
  - [x] Hero image: `priority` prop (optimize LCP)
  - [x] All others: lazy-loaded by default

---

## Phase 3: Route Pillar Pages (Static SEO Pages)

> ⚠️ **Expanded from original:** Plan mentioned 1 route page. We need 12+ to capture geo-specific searches.

- [x] Create `app/routes/[slug]/page.tsx` with `generateStaticParams`
- [x] Build route page template:
  - [x] H1: "Wheelchair Taxi to [Destination]"
  - [x] Estimated travel time, distance, pricing info
  - [x] Landmarks near the destination
  - [x] Booking CTA
  - [ ] Related blog posts (internal links)
  - [x] TaxiService JSON-LD with route-specific data
  - [x] Unique title + meta description per route
- [x] Create content for route pages:
  - [x] `/routes/manipal-hospital`
  - [x] `/routes/narayana-health`
  - [x] `/routes/fortis-hospital`
  - [x] `/routes/columbia-asia`
  - [x] `/routes/kempegowda-airport`
  - [x] `/routes/bangalore-railway-station`
  - [x] `/routes/indiranagar`
  - [x] `/routes/koramangala`
  - [x] `/routes/whitefield`
  - [x] `/routes/electronic-city`
  - [x] `/routes/jayanagar`
  - [x] `/routes/hsr-layout`

---

## Phase 4: Static Blog (SEO Content Engine)

> ⚠️ **This phase did not exist in the original plan. This is the single biggest SEO lever for this project.**

### Sprint 4.1: Blog Infrastructure
- [ ] Create `app/blog/page.tsx` — blog listing with pagination
- [ ] Create `app/blog/[slug]/page.tsx` with `generateStaticParams`
- [ ] Build blog post template:
  - [ ] Article header (title, date, reading time)
  - [ ] Breadcrumbs
  - [ ] MDX content rendering
  - [ ] Related posts section
  - [ ] In-article CTA banner ("Book your ride now")
  - [ ] Social share links (static, no JS SDKs)
  - [ ] BlogPosting JSON-LD schema
- [ ] Store blog content as `.mdx` files in `content/blog/`

### Sprint 4.2: Blog Frontmatter Schema

Each `.mdx` file uses this frontmatter:

```yaml
---
title: "Wheelchair Taxi Pricing in Bangalore — Full Breakdown"
slug: "wheelchair-taxi-pricing-bangalore"
description: "Complete guide to wheelchair taxi costs in Bangalore..."
date: "2026-03-01"
keywords: ["wheelchair taxi cost Bangalore", "accessible cab pricing"]
category: "Guides"
readingTime: 5
featured: true
---
```

### Sprint 4.3: First Batch — High-Priority Posts (Launch Week)
- [ ] "How Our Wheelchair Ramp Taxis Work in Bangalore"
- [ ] "Airport Wheelchair Taxi: BIAL Pickup & Drop Guide"
- [ ] "Hospital Transport for Wheelchair Users in Bangalore"
- [ ] "Safe Taxi Service for Senior Citizens in Bengaluru"
- [ ] "Wheelchair Taxi Pricing in Bangalore — Full Breakdown"

### Sprint 4.4: Second Batch — Medium-Priority Posts (Month 1)
- [ ] "How to Book a Wheelchair Taxi in Bangalore: Step-by-Step"
- [ ] "Top 15 Wheelchair-Friendly Places to Visit in Bangalore"
- [ ] "Accessible Travel Guide: Navigating Bangalore by Wheelchair"
- [ ] "Wheelchair Taxi vs. Ambulance: Which Do You Need?"
- [ ] "Your Right to Accessible Transport in India (2026)"

### Sprint 4.5: Third Batch — Location-Specific Posts (Month 2-3)
- [ ] "Outstation Wheelchair Taxi from Bangalore: Routes & Pricing"
- [ ] "Wheelchair Taxi Service in Whitefield, Bangalore"
- [ ] "Wheelchair Accessible Cabs in Jayanagar"
- [ ] "Wheelchair Taxi to Manipal Hospital — Booking Guide"
- [ ] "Wheelchair Taxi to Narayana Health City"

### Sprint 4.6: Internal Linking Pass
- [ ] Every blog post links to at least 2 other blog posts
- [ ] Every blog post links to relevant route page(s)
- [ ] Every blog post links to `/booking` or `/services`
- [ ] Route pages link to related blog posts
- [ ] FAQ answers link to detailed blog posts
- [ ] Homepage features 3 latest/featured blog posts

### Ongoing Cadence
- 2 new posts per month to maintain fresh content signal for Google

---

## Phase 5: Accessibility & Performance Audit

### Sprint 5.1: Accessibility (WCAG 2.1 AA — Critical for This Audience)
- [ ] Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] All buttons and interactive elements have `aria-label`
- [ ] Keyboard navigation works on all interactive elements
- [ ] Focus indicators are visible
- [ ] Color contrast ratios meet AA standards (4.5:1 for text)
- [ ] Screen reader testing (NVDA or VoiceOver)
- [ ] Touch targets ≥ 44×44px on mobile

### Sprint 5.2: Core Web Vitals
- [ ] Run Lighthouse on production build — targets:
  - [ ] Performance > 90
  - [ ] SEO = 100
  - [ ] Accessibility > 95
  - [ ] Best Practices > 90
- [ ] LCP < 2.5s (hero image optimization)
- [ ] TBT < 200ms (minimal client JS)
- [ ] CLS < 0.1 (explicit image dimensions, font swap)
- [ ] Verify on PageSpeed Insights (real-world data)

---

## Phase 6: Launch & Post-Launch

### Sprint 6.1: Pre-Launch Checks
- [ ] All pages have unique title + meta description
- [ ] All pages have canonical URLs set
- [ ] JSON-LD validates on [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] `sitemap.xml` includes all pages + blog posts + routes
- [ ] `robots.txt` allows crawling, points to sitemap
- [ ] No broken internal links
- [ ] 404 page returns proper 404 status code
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Samsung Internet)
- [ ] Mobile responsiveness verified on real device

### Sprint 6.2: Launch
- [ ] Merge to `main` → production deployment on Vercel
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Request indexing for homepage + top 5 priority pages
- [ ] Verify Google My Business links to correct website URL
- [ ] Set up Vercel Analytics + Speed Insights

### Sprint 6.3: Post-Launch SEO Monitoring
- [ ] Week 1: Check Google Search Console for crawl errors
- [ ] Week 2: Verify pages are being indexed (`site:yourdomain.com`)
- [ ] Week 4: Review Search Console for first keyword impressions
- [ ] Month 2: Analyze which blog posts are getting traffic, double down
- [ ] Month 3: Refresh/expand top-performing posts, prune underperformers
- [ ] Ongoing: Respond to Google Reviews on GMB profile

---

## Local SEO Checklist (NEW — Not in Original Plan)

> ⚠️ **For a Bengaluru-only service, local SEO is arguably more important than on-page SEO.**

- [ ] Google My Business profile created and verified
- [ ] NAP (Name, Address, Phone) is identical on: website footer, contact page, GMB, JustDial, Sulekha
- [ ] Business category set to "Taxi Service" + "Wheelchair Accessible Vehicle Rental" on GMB
- [ ] Photos uploaded to GMB (vehicles, ramps, logo)
- [ ] Service areas listed on GMB (Bengaluru neighborhoods)
- [ ] Encourage first 10 customer reviews on Google
- [ ] Respond to every review (positive and negative)
- [ ] Submit to accessibility directories: Enabled.in, DisabilityInfo.in
- [ ] Create minimal social profiles for brand signals (Facebook, Instagram)

---

## Future CMS Integration Documentation

*For when the business grows and needs dynamic content management:*

1. **Choose Headless CMS:** (e.g., Supabase, Sanity).
2. **Define Schema:** Mirror the interfaces in `types/content.ts` (Hero, Features, Reviews, Routes, BlogPosts).
3. **Update Data Fetcher:** Rewrite functions in `lib/data.ts` to fetch from CMS endpoint instead of local files.
4. **On-Demand Revalidation:** Implement Next.js ISR using route handlers — auto-update static site when CMS webhook fires.
5. **Blog Migration:** Move `.mdx` files into CMS, update `generateStaticParams` to query CMS for slugs.

---

## Deferred Items (Revisit Later)

| Item | Reason for Deferral |
|------|-------------------|
| Dark/light mode toggle | No ROI for this audience — adds complexity |
| Branch protection rules | Overhead for solo/small team |
| Lighthouse CI pipeline | Manual Lighthouse runs are sufficient |
| Strict ESLint rules | Standard rules are sufficient for MVP |
| ISR / On-demand revalidation | Only needed when CMS is integrated |
