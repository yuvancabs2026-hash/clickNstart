/**
 * Content type definitions for the WheelchairTaxi data layer.
 *
 * These interfaces define the shape of all CMS-ready content.
 * Currently backed by local JSON files in content/en/.
 * When a CMS is integrated, only lib/data.ts changes — not these types.
 */

// ---------------------------------------------------------------------------
// Shared / Atomic
// ---------------------------------------------------------------------------

export interface CTALink {
    label: string;
    href: string;
    ariaLabel: string;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export interface HeroLiftCard {
    title: string;
    capacity: string;
    statusLabel: string;
    safetyLabel: string;
    readyLabel: string;
}

export interface HeroData {
    badge: string;
    headingLine1: string;
    headingHighlight: string;
    description: string;
    ctaPrimary: CTALink;
    ctaSecondary: { label: string; icon: string };
    trustBadges: Array<{ label: string }>;
    liftCard: HeroLiftCard;
}

// ---------------------------------------------------------------------------
// Feature Grid
// ---------------------------------------------------------------------------

export interface Feature {
    icon: string;
    title: string;
    description: string;
    iconBg: string;
    iconColor: string;
}

export interface FeatureGridData {
    heading: string;
    subheading: string;
    features: Feature[];
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Review {
    quote: string;
    name: string;
    location: string;
    stars: number;
}

export interface TestimonialsData {
    heading: string;
    subheading: string;
    reviews: Review[];
}

// ---------------------------------------------------------------------------
// CTA Banner
// ---------------------------------------------------------------------------

export interface CTAData {
    heading: string;
    subheading: string;
    whatsapp: CTALink;
    phone: CTALink;
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavLink {
    label: string;
    href: string;
}

export interface NavData {
    brand: string;
    tagline: string;
    navLinks: NavLink[];
    ctaLabel: string;
    ctaLabelShort: string;
    statusLabel: string;
    whatsappHref: string;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export interface FooterData {
    brand: string;
    tagline: string;
    phone: string;
    columns: FooterColumn[];
    copyright: string;
}

// ---------------------------------------------------------------------------
// WhatsApp FAB
// ---------------------------------------------------------------------------

export interface WhatsAppFABData {
    href: string;
    ariaLabel: string;
}

// ---------------------------------------------------------------------------
// Services Page
// ---------------------------------------------------------------------------

export interface ServiceItem {
    icon: string;
    title: string;
    description: string;
    highlights: string[];
}

export interface ServicesPageData {
    heading: string;
    subheading: string;
    services: ServiceItem[];
    uspSection: {
        heading: string;
        description: string;
        benefits: string[];
    };
    cta: CTAData;
}

// ---------------------------------------------------------------------------
// Booking Page
// ---------------------------------------------------------------------------

export interface BookingPageData {
    heading: string;
    subheading: string;
    whatsappTemplate: string;
    whatsappNumber: string;
    instructions: string[];
    cta: CTAData;
}

// ---------------------------------------------------------------------------
// About Page
// ---------------------------------------------------------------------------

export interface AboutPageData {
    heading: string;
    subheading: string;
    story: {
        heading: string;
        paragraphs: string[];
    };
    mission: {
        heading: string;
        text: string;
    };
    values: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    stats: Array<{
        value: string;
        label: string;
    }>;
    cta: CTAData;
}

// ---------------------------------------------------------------------------
// Contact Page
// ---------------------------------------------------------------------------

export interface ContactPageData {
    heading: string;
    subheading: string;
    nap: {
        name: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
    };
    mapEmbedUrl: string;
    cta: CTAData;
}

// ---------------------------------------------------------------------------
// FAQ Page
// ---------------------------------------------------------------------------

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQPageData {
    heading: string;
    subheading: string;
    items: FAQItem[];
    cta: CTAData;
}

// ---------------------------------------------------------------------------
// Legal Pages (Privacy Policy, Terms of Service)
// ---------------------------------------------------------------------------

export interface LegalSection {
    heading: string;
    content: string;
}

export interface LegalPageData {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
}

// ---------------------------------------------------------------------------
// Route Page
// ---------------------------------------------------------------------------

export interface RoutePageData {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    destination: string;
    slug: string;
    travelTime: string;
    distance: string;
    pricingEstimate: string;
    landmarks: string[];
    description: string;
    cta: CTAData;
}

// ---------------------------------------------------------------------------
// Aggregate page-level types
// ---------------------------------------------------------------------------

export interface HomePageData {
    hero: HeroData;
    features: FeatureGridData;
    testimonials: TestimonialsData;
    cta: CTAData;
}

export interface GlobalData {
    nav: NavData;
    footer: FooterData;
    whatsapp: WhatsAppFABData;
}

// ---------------------------------------------------------------------------
// Blog Post
// ---------------------------------------------------------------------------

export interface BlogPostFrontmatter {
    title: string;
    slug: string;
    description: string;
    date: string;
    keywords?: string[];
    category?: string;
    readingTime?: number;
    featured?: boolean;
}

export interface BlogPost {
    frontmatter: BlogPostFrontmatter;
    content: string;
}
