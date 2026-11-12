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
  title: 'Wheelchair Taxi in Bengaluru (Bangalore) & Chennai',
  description:
    'Book a wheelchair taxi in Bengaluru or Chennai. Automatic hydraulic lift cabs for hospital visits, dialysis appointments, airport transfers, and city travel. Call +91 81978 14490.',
  keywords: [
    'wheelchair taxi Bengaluru',
    'wheelchair taxi Bangalore',
    'wheelchair cab Bengaluru',
    'wheelchair cab Bangalore',
    'accessible cabs Bengaluru',
    'wheelchair taxi Chennai',
    'wheelchair cab Chennai',
    'wheelchair accessible taxi service',
    'hydraulic lift wheelchair taxi',
    'hospital wheelchair transport',
    'dialysis appointment cab',
    'wheelchair airport transfer',
    'non emergency medical transportation',
    'taxi for senior citizens with limited mobility',
    'accessible transport for medical appointments',
  ],
  alternates: {
    canonical: '/',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'Click N Start',
  description:
    'Wheelchair accessible taxi service in Bangalore with automatic hydraulic lift. Safe, dignified, and hygienic travel for hospital visits, airport transfers, and city travel.',
  url: 'https://clicknstart.in',
  telephone: '+91-8197814490',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'Chennai' },
  ],
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
            <PatientStoriesGallery/>

      <FeatureGrid data={data.features} />
      <TestimonialCarousel data={data.testimonials} />
      <WheelchairTaxiReels/>
      <WheelchairTaxiVideo/>
      <CTABanner data={data.cta} />
    </main>
  );
}
