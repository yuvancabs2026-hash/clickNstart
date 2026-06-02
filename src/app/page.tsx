import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABanner from '@/components/CTABanner';
import { getHomePageData } from '@/lib/data';
import type { Metadata } from 'next';
import WheelchairTaxiVideo from '@/components/WheelchairTaxiVideo';
import PatientStoriesGallery from '@/components/PatientStoriesGallery';
import BookingNotice from '@/components/BookingNotice';
import WheelchairTaxiReels from '@/components/videos2';

export const metadata: Metadata = {
  title: 'Wheelchair Accessible Taxi Service in Bangalore | Click N Start',
  description:
    'Book Bengaluru\'s first wheelchair taxi with automatic hydraulic lift. Safe, dignified transport for hospital visits, airport transfers & city travel. Call +91 81978 14490.',
  alternates: {
    canonical: 'https://yuvancabs.in',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'Click N Start Bengaluru',
  description:
    'Wheelchair accessible taxi service in Bangalore with automatic hydraulic lift. Safe, dignified, and hygienic travel for hospital visits, airport transfers, and city travel.',
  url: 'https://yuvancabs.in',
  telephone: '+91-8197814490',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'City',
    name: 'Bengaluru',
  },
  priceRange: '₹₹',
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: [],
  additionalType: 'https://schema.org/MedicalTransport',
};

/**
 * Homepage — assembles all structural components.
 * Data is fetched via the data layer (CMS-ready).
 * SEO: H1 with primary keyword lives inside <Hero />.
 * Schema: LocalBusiness + TaxiService JSON-LD.
 */
export default function Home() {
  const data = getHomePageData();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero data={data.hero} />
      <BookingNotice/>
      <FeatureGrid data={data.features} />
      <TestimonialCarousel data={data.testimonials} />
      <WheelchairTaxiReels/>
      <WheelchairTaxiVideo/>
      <CTABanner data={data.cta} />
      <PatientStoriesGallery/>
    </main>
  );
}
