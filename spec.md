# WheelchairTaxi – Detailed Project Specification

> **Version:** 2.0 (Synced with Plan v3.0)  
> **Date:** 2026-02-25  
> **Priority:** SEO-first, conversion-focused  
> **Stack:** Next.js 15 (App Router), Tailwind CSS, Vercel  
> **Domain:** TBD *(looking for a catchy name)*

---

## Table of Contents

1. [Plan Critique & Resolution Log](#1-plan-critique--resolution-log)
2. [Competitive Landscape](#2-competitive-landscape)
3. [SEO Strategy (Highest Priority)](#3-seo-strategy-highest-priority)
4. [Keyword Research & Blog Plan](#4-keyword-research--blog-plan)
5. [Site Architecture](#5-site-architecture)
6. [Phase-by-Phase Spec with Checkboxes](#6-phase-by-phase-spec-with-checkboxes)
7. [Content Spec for Static Blog](#7-content-spec-for-static-blog)
8. [Technical SEO Checklist](#8-technical-seo-checklist)
9. [Schema Markup Spec](#9-schema-markup-spec)
10. [Verification Plan](#10-verification-plan)

---

## 1. Plan Critique & Resolution Log

The original plan had 8 issues. All have been resolved in `plan.md` v3.0:

| Issue | Severity | Status | How It Was Resolved |
|-------|----------|--------|---------------------|
| No blog strategy | 🔴 Critical | ✅ Fixed | Phase 4 added — 15 blog posts in 3 batches + ongoing cadence |
| Pillar pages too narrow | 🟡 Medium | ✅ Fixed | 12 route pillar pages planned in Phase 3 |
| No Google My Business / Local SEO | 🔴 Critical | ✅ Fixed | Dedicated Local SEO Checklist section + Phase 0 tasks |
| Phase ordering wrong for SEO | 🟡 Medium | ✅ Fixed | SEO is now Phase 0 + baked into Phase 1 layout |
| No keyword research | 🔴 Critical | ✅ Fixed | Phase 0 is entirely keyword research + competitor scraping |
| Over-engineered CI/CD | 🟡 Medium | ✅ Fixed | Branch protections, Lighthouse CI, strict ESLint deferred |
| No internal linking strategy | 🟡 Medium | ✅ Fixed | Sprint 4.6 is a dedicated internal linking pass |
| Dark mode is a distraction | 🟢 Low | ✅ Fixed | Deferred — listed in Deferred Items table |

### Priority Order (Current)

```
Phase 0: Keyword Research → Phase 1: SEO-First Infrastructure → Phase 2: Components (with SEO baked in)
→ Phase 3: Route Pages → Phase 4: Blog Content → Phase 5: Audit → Phase 6: Launch & Monitor
```

---

## 2. Competitive Landscape

### Direct Competitors in Bengaluru

| Competitor | Website | Strengths | Weaknesses (Our Opportunity) |
|------------|---------|-----------|------------------------------|
| **KickStart Cabs** | kickstartcabs.com | Established since 2013, media coverage, trained drivers | SSL expired (!), outdated website, no blog, poor mobile UX, **manual ramps only** |
| **Ridexpress** | ridexpress.in | Clean website, airport focus, broad fleet | Not wheelchair-specific, generic taxi SEO |
| **Mobility India** | mobility-india.org | NGO credibility, 2 remodeled vehicles | NGO site, not a commercial competitor, limited fleet, **manual ramps** |
| **Uber WAV** | uber.com | Brand trust, app ecosystem | Buried feature, not discoverable via search, limited availability |
| **Ezy Mov** | ezymov.com | Mumbai-focused, dedicated wheelchair lifts | No Bengaluru presence |
| **MobiCab** | mobicab.in | Mumbai-focused, good website | No Bengaluru presence |

### Key Takeaway

> **The Bengaluru wheelchair taxi niche has almost ZERO serious SEO competition.** KickStart Cabs — the main competitor — has an expired SSL certificate, no blog, and an outdated site. Every competitor uses manual ramps. Our automatic hydraulic lift is a unique differentiator no one else has. A well-optimized Next.js static site with 20-30 blog posts can dominate this search space within 3-6 months.

### Our USP: Automatic Hydraulic Lift

All competitors use manual foldable ramps. Our automatic hydraulic lift is the core USP. It should be:

| Where | How to Use |
|-------|------------|
| Homepage Hero / Feature section | "Bangalore's First Automatic Hydraulic Lift Taxi" |
| Services page | Dedicated section: hydraulic lift vs. manual ramps |
| Blog post (long-tail keyword) | "Manual Ramp vs. Hydraulic Lift: Why It Matters" |
| Schema markup | Mentioned in service description JSON-LD |
| Meta descriptions | Woven into CTAs across pages |
| Google My Business | Highlighted in description + photos of lift in action |

> **Note:** "Hydraulic lift" is a **secondary keyword**, not primary. Users search for "wheelchair taxi" not "hydraulic lift taxi". But it's the conversion differentiator — what makes someone choose us over competitors.

---

## 3. SEO Strategy (Highest Priority)

### 3.1 On-Page SEO Architecture

Every page must have:

- [ ] Unique `<title>` tag (50-60 chars) with primary keyword
- [ ] Unique `<meta name="description">` (150-160 chars) with CTA
- [ ] Single `<h1>` with primary keyword
- [ ] Proper heading hierarchy (`h1 > h2 > h3`, no skipping)
- [ ] Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] `alt` text on every image (descriptive, keyword-rich, not stuffed)
- [ ] Internal links to related pages (minimum 3 per page)
- [ ] External links to authoritative sources where appropriate
- [ ] Canonical URL set on every page
- [ ] Open Graph + Twitter Card meta tags for social sharing

### 3.2 Technical SEO

- [ ] Static generation (`generateStaticParams`) for all route/blog pages
- [ ] `sitemap.xml` auto-generated at build time
- [ ] `robots.txt` allowing all crawlers, pointing to sitemap
- [ ] Structured data (JSON-LD) on every page type
- [ ] Core Web Vitals targets: LCP < 2.5s, TBT < 200ms, CLS < 0.1
- [ ] Self-hosted fonts via `next/font` (eliminates render-blocking)
- [ ] Image optimization via `next/image` with WebP/AVIF
- [ ] No JavaScript required for initial content render (Server Components)
- [ ] HTTPS enforced (Vercel handles this)
- [ ] Mobile-first responsive design (Google indexes mobile-first)

### 3.3 Local SEO

- [ ] Google My Business profile created and verified
- [ ] NAP (Name, Address, Phone) identical on: website footer, contact page, GMB, JustDial, Sulekha
- [ ] Business category: "Taxi Service" + "Wheelchair Accessible Vehicle Rental"
- [ ] LocalBusiness JSON-LD schema with `areaServed` covering Bengaluru neighborhoods
- [ ] Embedded Google Map on contact page
- [ ] Photos uploaded to GMB (vehicles, hydraulic lift, logo)
- [ ] Service areas listed on GMB (Bengaluru neighborhoods)
- [ ] Encourage first 10 customer reviews on Google
- [ ] Respond to every review (positive and negative)
- [ ] Local citations on JustDial, Sulekha, IndiaMART, Google Maps

### 3.4 Off-Page SEO

- [ ] Submit to accessibility directories (Enabled.in, DisabilityInfo.in)
- [ ] Reach out to disability advocacy blogs for backlinks
- [ ] List on JustDial, Sulekha as disability transport service
- [ ] Create minimal social media profiles for brand signals (Facebook, Instagram)

---

## 4. Keyword Research & Blog Plan

### 4.1 Primary Keywords (Target on Service Pages)

| Keyword | Est. Intent | Target Page |
|---------|-------------|-------------|
| wheelchair taxi Bangalore | High — commercial | Homepage |
| wheelchair accessible cab Bengaluru | High — commercial | Homepage |
| disabled friendly taxi Bangalore | High — commercial | Homepage / Services |
| senior citizen taxi Bangalore | Medium — commercial | Services |
| taxi with ramp Bangalore | High — commercial | Services |
| accessible cab booking Bangalore | High — commercial | Booking / Homepage |
| wheelchair transport Bangalore | Medium — commercial | Services |

### 4.2 Secondary Keywords (USP — used in content, not primary targets)

| Keyword | Usage |
|---------|-------|
| taxi with hydraulic lift Bangalore | Services page, blog post, meta descriptions |
| automatic wheelchair lift taxi | Feature section, About page |
| ramp vs hydraulic lift wheelchair taxi | Dedicated blog post |

### 4.3 Long-Tail Keywords (Target in Blog Posts — Static)

| Long-Tail Keyword | Blog Post Title | Priority |
|-------------------|-----------------|----------|
| wheelchair accessible taxi service Bangalore with ramp | "How Our Wheelchair Ramp Taxis Work in Bangalore" | 🔴 High |
| disabled friendly cab booking Bengaluru airport | "Airport Wheelchair Taxi: BIAL Pickup & Drop Guide" | 🔴 High |
| taxi for physically challenged Bangalore hospital | "Hospital Transport for Wheelchair Users in Bangalore" | 🔴 High |
| senior citizen taxi service Bengaluru with assistance | "Safe Taxi Service for Senior Citizens in Bengaluru" | 🔴 High |
| wheelchair taxi cost Bangalore | "Wheelchair Taxi Pricing in Bangalore — Full Breakdown" | 🔴 High |
| how to book accessible taxi in Bangalore | "How to Book a Wheelchair Taxi in Bangalore: Step-by-Step" | 🔴 High |
| wheelchair friendly places Bangalore | "Top 15 Wheelchair-Friendly Places to Visit in Bangalore" | 🔴 High |
| accessible travel tips Bangalore | "Accessible Travel Guide: Navigating Bangalore by Wheelchair" | 🔴 High |
| book wheelchair taxi Bangalore outstation | "Outstation Wheelchair Taxi from Bangalore: Routes & Pricing" | 🟡 Medium |
| wheelchair taxi from Indiranagar to airport | "Indiranagar to Airport: Wheelchair Accessible Ride" | 🟡 Medium |
| accessible transport Koramangala Bangalore | "Accessible Transport Options in Koramangala" | 🟡 Medium |
| reliable wheelchair transport Bangalore medical | "Medical Appointment Transport for Wheelchair Users" | 🟡 Medium |
| turn-out wheelchair taxi service | "What is a Turn-Out Wheelchair Taxi? How It Works" | 🟡 Medium |
| wheelchair taxi vs ambulance Bangalore | "Wheelchair Taxi vs. Ambulance: Which Do You Need?" | 🟡 Medium |
| ramp taxi near me Bangalore | "Find a Ramp Taxi Near You in Bangalore" | 🟡 Medium |
| disability rights accessible transport India | "Your Right to Accessible Transport in India (2026)" | 🟡 Medium |
| wheelchair taxi Manipal Hospital Bangalore | "Wheelchair Taxi to Manipal Hospital — Booking Guide" | 🔴 High |
| wheelchair taxi Narayana Health Bangalore | "Wheelchair Taxi to Narayana Health City" | 🟡 Medium |
| wheelchair cab Whitefield Bangalore | "Wheelchair Taxi Service in Whitefield, Bangalore" | 🟢 Low |
| accessible cab Jayanagar Bangalore | "Wheelchair Accessible Cabs in Jayanagar" | 🟢 Low |

### 4.4 Keyword Scraping Strategy for Competitors

1. **Manual scraping approach (recommended for static blog):**
   - Search `site:kickstartcabs.com` on Google — catalog indexed pages
   - Google Autocomplete for `wheelchair taxi Bangalore` + variations
   - "People Also Ask" boxes for each primary keyword
   - Review JustDial/Sulekha listing keywords for disability transport
   - Use Google Search Console "Search Results" report once live

2. **Tools for extended research (optional):**
   - Ubersuggest (free tier): search volume estimates
   - Google Keyword Planner (free with Google Ads account)
   - AnswerThePublic: question-based keywords

3. **Competitor content gaps to exploit:**
   - KickStart Cabs has NO blog → every blog post is uncontested
   - No competitor has location-specific pages (Indiranagar, Koramangala, Whitefield)
   - No competitor has hospital route pages (Manipal, Narayana, Fortis, Columbia Asia)
   - No competitor addresses "wheelchair friendly places" searches
   - No competitor mentions hydraulic lift technology

---

## 5. Site Architecture

### URL Structure

```
/                           → Homepage (primary keywords)
/services                   → Service details + hydraulic lift USP
/booking                    → Booking form / WhatsApp CTA
/about                      → About the company, mission
/contact                    → Contact + embedded Google Map
/routes/                    → Route pillar pages
  /routes/manipal-hospital
  /routes/narayana-health
  /routes/fortis-hospital
  /routes/columbia-asia
  /routes/kempegowda-airport
  /routes/bangalore-railway-station
  /routes/indiranagar
  /routes/koramangala
  /routes/whitefield
  /routes/electronic-city
  /routes/jayanagar
  /routes/hsr-layout
/blog/                      → Blog listing page
  /blog/wheelchair-taxi-pricing-bangalore
  /blog/airport-wheelchair-taxi-guide
  /blog/hospital-transport-wheelchair
  /blog/wheelchair-friendly-places-bangalore
  /blog/how-to-book-wheelchair-taxi
  /blog/accessible-travel-guide-bangalore
  ... (20-30 posts over time)
/faq                        → Frequently Asked Questions
/privacy-policy             → Legal
/terms-of-service           → Legal
```

### Internal Linking Map

```
Homepage ←→ Services ←→ Routes (each route)
Homepage ←→ Blog (3 featured posts)
Blog posts → Routes (contextual links)
Blog posts → Services → Booking
Routes → Blog posts (related articles)
All pages → Booking CTA in nav/footer
FAQ → Blog posts (expanded answers)
```

---

## 6. Phase-by-Phase Spec with Checkboxes

> These checkboxes mirror and expand on the phases in `plan.md` v3.0.

### Phase 0: Keyword Research & Content Planning

- [ ] Finalize primary keyword list (7-10 keywords)
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

### Phase 1: SEO-First Infrastructure

**Sprint 1.1: Environment**
- [x] Initialize Next.js 15 (App Router) project
- [x] Configure Tailwind CSS with custom design tokens
- [x] Set up absolute imports (`@/*`)
- [x] Configure ESLint + Prettier (standard rules)

**Sprint 1.2: Design System**
- [x] Migrate Cyan/Teal palette into `tailwind.config.js`
- [x] Self-host Inter font via `next/font/google`
- [x] Set up glassmorphism CSS utilities in `globals.css`

**Sprint 1.3: SEO Foundation (Built Into Layout)**
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
- [x] Ensure all pages render as Server Components by default

**Sprint 1.4: Deployment Pipeline**
- [ ] Set up GitHub repo
- [ ] Connect to Vercel (auto-deploy on push to `main`, previews on PRs)

### Phase 2: Core Pages (SEO Baked Into Every Component)

**Sprint 2.1: Structural Components**
- [x] `<GlassNav />` — semantic `<nav>` with `aria-label`
- [x] `<Hero />` — `<h1>` contains primary keyword, hero image uses `priority` prop
- [x] `<FeatureGrid />` — `<section>` with descriptive `aria-label`
- [x] `<TestimonialCarousel />` — Client Component (`"use client"`)
- [x] `<Footer />` — semantic `<footer>` with NAP info
- [x] `<WhatsAppFAB />` — Client Component, deep-link with pre-filled message
- [x] `<CTABanner />` — reusable booking CTA for pages and blog posts
- [x] `<Breadcrumbs />` — for sub-pages and blog posts (BreadcrumbList schema)

**Sprint 2.2: Data Hydration (CMS Prep)**
- [x] Create `lib/data.ts` utility with typed data fetchers
- [x] Create `types/content.ts` with TypeScript interfaces (Hero, Features, Reviews, Routes, BlogPost)
- [x] Move all copy into local JSON/constants in `content/` directory
- [x] Map over data in Server Components

**Sprint 2.3: Core Pages**
- [x] **Homepage (`/`)** — H1 with primary keyword, feature grid, testimonials, WhatsApp CTA, LocalBusiness + TaxiService JSON-LD
- [x] **Services (`/services`)** — Package trips, airport transfers, outstation, medical transport, hydraulic lift USP section, Service JSON-LD
- [x] **Booking (`/booking`)** — Simple form → WhatsApp deep link
- [x] **About (`/about`)** — Company story, mission, trust signals
- [x] **Contact (`/contact`)** — NAP matching GMB, embedded Google Map, contact form
- [x] **FAQ (`/faq`)** — 10-15 questions, FAQPage JSON-LD
- [x] **Privacy Policy + Terms of Service**

**Sprint 2.4: Interactivity (Client Components — Minimal)**
- [x] Scroll listener for nav background
- [x] WhatsApp FAB deep-linking
- [x] Testimonial carousel
- [x] Mobile nav toggle
- [x] All images via `next/image` (hero = `priority`, rest = lazy)

### Phase 3: Route Pillar Pages

- [x] Create `app/routes/[slug]/page.tsx` with `generateStaticParams`
- [x] Build route page template (H1, travel info, pricing, CTA, related posts, TaxiService JSON-LD, unique meta)
- [x] Create 12 route pages:
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

### Phase 4: Static Blog (SEO Content Engine)

**Sprint 4.1: Blog Infrastructure**
- [x] Create `app/blog/page.tsx` — listing with pagination
- [x] Create `app/blog/[slug]/page.tsx` with `generateStaticParams`
- [x] Build blog template (header, breadcrumbs, MDX, related posts, CTA, share links, BlogPosting JSON-LD)
- [x] Store content as `.mdx` files in `content/blog/`

**Sprint 4.2: Blog Frontmatter Schema** — see Section 7 below

**Sprint 4.3: First Batch — Launch Week (5 posts)**
- [x] "How Our Wheelchair Ramp Taxis Work in Bangalore"
- [x] "Airport Wheelchair Taxi: BIAL Pickup & Drop Guide"
- [x] "Hospital Transport for Wheelchair Users in Bangalore"
- [x] "Safe Taxi Service for Senior Citizens in Bengaluru"
- [x] "Wheelchair Taxi Pricing in Bangalore — Full Breakdown"

**Sprint 4.4: Second Batch — Month 1 (5 posts)**
- [ ] "How to Book a Wheelchair Taxi in Bangalore: Step-by-Step"
- [ ] "Top 15 Wheelchair-Friendly Places to Visit in Bangalore"
- [ ] "Accessible Travel Guide: Navigating Bangalore by Wheelchair"
- [ ] "Wheelchair Taxi vs. Ambulance: Which Do You Need?"
- [ ] "Your Right to Accessible Transport in India (2026)"

**Sprint 4.5: Third Batch — Month 2-3 (5 posts)**
- [ ] "Outstation Wheelchair Taxi from Bangalore: Routes & Pricing"
- [ ] "Wheelchair Taxi Service in Whitefield, Bangalore"
- [ ] "Wheelchair Accessible Cabs in Jayanagar"
- [ ] "Wheelchair Taxi to Manipal Hospital — Booking Guide"
- [ ] "Wheelchair Taxi to Narayana Health City"

**Sprint 4.6: Internal Linking Pass**
- [ ] Every blog post links to at least 2 other blog posts
- [ ] Every blog post links to relevant route page(s)
- [ ] Every blog post links to `/booking` or `/services`
- [ ] Route pages link to related blog posts
- [ ] FAQ answers link to detailed blog posts
- [ ] Homepage features 3 latest/featured blog posts

**Ongoing:** 2 new posts/month

### Phase 5: Accessibility & Performance Audit

**Sprint 5.1: Accessibility (WCAG 2.1 AA)**
- [ ] Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] All buttons/interactive elements have `aria-label`
- [ ] Keyboard navigation works everywhere
- [ ] Focus indicators visible
- [ ] Color contrast ≥ 4.5:1 for text
- [ ] Screen reader tested (NVDA or VoiceOver)
- [ ] Touch targets ≥ 44×44px on mobile

**Sprint 5.2: Core Web Vitals**
- [ ] Lighthouse targets: Performance > 90, SEO = 100, Accessibility > 95, Best Practices > 90
- [ ] LCP < 2.5s, TBT < 200ms, CLS < 0.1
- [ ] Verify on PageSpeed Insights

### Phase 6: Launch & Post-Launch

**Sprint 6.1: Pre-Launch Checks**
- [ ] All pages have unique title + meta description + canonical URL
- [ ] JSON-LD validates on Google Rich Results Test
- [ ] `sitemap.xml` includes all pages + blog posts + routes
- [ ] `robots.txt` allows crawling, points to sitemap
- [ ] No broken internal links, 404 page works
- [ ] Cross-browser + mobile tested

**Sprint 6.2: Launch**
- [ ] Merge to `main` → production deploy on Vercel
- [ ] Submit `sitemap.xml` to Google Search Console + Bing
- [ ] Request indexing for homepage + top 5 pages
- [ ] Verify GMB links to correct website URL
- [ ] Set up Vercel Analytics + Speed Insights

**Sprint 6.3: Post-Launch SEO Monitoring**
- [ ] Week 1: Check GSC for crawl errors
- [ ] Week 2: Verify pages are indexed (`site:yourdomain.com`)
- [ ] Week 4: Review first keyword impressions
- [ ] Month 2: Analyze blog traffic, double down on winners
- [ ] Month 3: Refresh top posts, prune underperformers
- [ ] Ongoing: Respond to Google Reviews on GMB

---

## 7. Content Spec for Static Blog

### Blog Post Frontmatter Schema

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

### Content Guidelines

- **Minimum 800 words** per post (Google prefers comprehensive content)
- **Use H2 and H3** subheadings containing keywords naturally
- **Include at least 3 internal links** to other pages/posts
- **Include 1-2 external links** to authoritative sources
- **Add images** with descriptive `alt` text (real photos preferred)
- **End every post** with CTA: "Book your wheelchair taxi now" → `/booking` or WhatsApp
- **Mention hydraulic lift** naturally where relevant (don't force it into every post)
- **Write for humans first**, search engines second — no keyword stuffing

### Publishing Cadence

| Timeline | Posts | Focus |
|----------|-------|-------|
| Launch week | 5 | High-priority keywords (pricing, airport, hospital, how-to, places) |
| Month 1 | +5 | Medium-priority (outstation, area-specific, rights) |
| Month 2-3 | +5 | Long-tail location keywords (Whitefield, Jayanagar, hospitals) |
| Ongoing | 2/month | Fresh content signal, trending topics, seasonal |

---

## 8. Technical SEO Checklist

### Per-Page Checklist

- [ ] `<title>` unique, 50-60 chars, contains primary keyword
- [ ] `<meta name="description">` unique, 150-160 chars, contains CTA
- [ ] Canonical URL set
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] One `<h1>` per page with primary keyword
- [ ] Heading hierarchy logical (no skipping)
- [ ] All images have descriptive `alt` attributes
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] Page loads in < 3 seconds on 3G
- [ ] No render-blocking resources

### Site-Wide Checklist

- [ ] `robots.txt` allows crawling, points to sitemap
- [ ] `sitemap.xml` includes all pages, submitted to GSC
- [ ] HTTPS enforced, no mixed content
- [ ] 404 page returns proper 404 status code
- [ ] No broken internal links
- [ ] URL structure clean (lowercase, hyphens, no query params)
- [ ] Breadcrumb navigation on sub-pages
- [ ] Mobile viewport meta tag set
- [ ] `lang="en"` on `<html>` element

---

## 9. Schema Markup Spec

### Homepage — LocalBusiness + TaxiService

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "name": "TBD",
  "description": "Wheelchair accessible taxi service in Bangalore with automatic hydraulic lift...",
  "url": "https://TBD",
  "telephone": "+91-TBD",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bengaluru"
  },
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 00:00-23:59",
  "sameAs": [],
  "additionalType": "https://schema.org/MedicalTransport"
}
```

### Blog Posts — BlogPosting

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "description": "...",
  "datePublished": "2026-03-01",
  "author": { "@type": "Organization", "name": "TBD" },
  "publisher": { "@type": "Organization", "name": "TBD" },
  "mainEntityOfPage": "https://TBD/blog/..."
}
```

### FAQ Page — FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a wheelchair taxi cost in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

### Route Pages — TaxiService

```json
{
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Wheelchair Taxi to Manipal Hospital",
  "areaServed": "Bengaluru",
  "serviceArea": {
    "@type": "Place",
    "name": "Manipal Hospital, Old Airport Road, Bengaluru"
  }
}
```

---

## 10. Verification Plan

### Automated Checks

| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Build succeeds | `npm run build` | Exit code 0, no errors |
| Lighthouse SEO | Chrome DevTools | Score = 100 |
| Lighthouse Performance | Chrome DevTools | Score > 90 |
| Lighthouse Accessibility | Chrome DevTools | Score > 95 |
| Sitemap valid | Visit `/sitemap.xml` | All pages listed, valid XML |
| Robots.txt valid | Visit `/robots.txt` | Allows crawling, points to sitemap |
| JSON-LD valid | Google Rich Results Test | No errors per page type |
| Meta tags present | View page source | Title, description, OG, canonical on every page |
| No broken links | `npx broken-link-checker` | 0 broken links |
| Core Web Vitals | PageSpeed Insights | LCP < 2.5s, CLS < 0.1 |

### Manual Verification

1. Google "wheelchair taxi Bangalore" — confirm site appears (after 2-4 weeks of indexing)
2. Search `site:yourdomain.com` — confirm all key pages indexed
3. Test WhatsApp CTA — deep link opens with pre-filled message on mobile
4. Test on real mobile device — every page, readability, touch targets
5. Test screen reader — NVDA/VoiceOver, all content accessible
6. Verify GMB listing links correctly to website

---

## Deferred Items (Revisit Later)

| Item | Reason |
|------|--------|
| Dark/light mode toggle | No ROI for this audience — adds complexity |
| Branch protection rules | Overhead for solo/small team |
| Lighthouse CI pipeline | Manual Lighthouse runs are sufficient |
| Strict ESLint rules | Standard rules are sufficient for MVP |
| ISR / On-demand revalidation | Only needed when CMS is integrated |
