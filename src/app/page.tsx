import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABanner from '@/components/CTABanner';
import { getHomePageData } from '@/lib/data';
import type { Metadata } from 'next';
import WheelchairTaxiVideo from '@/components/WheelchairTaxiVideo';
import PatientStoriesGallery from '@/components/PatientStoriesGallery';
import BookingNotice from '@/components/BookingNotice';

export const metadata: Metadata = {
  title: 'Wheelchair Accessible Taxi Service in Bangalore | YuvanCabs',
  description:
    'Book Bengaluru\'s first wheelchair taxi with automatic hydraulic lift. Safe, dignified transport for hospital visits, airport transfers & city travel. Call +91 81058 25544.',
  alternates: {
    canonical: 'https://yuvancabs.com',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'YuvanCabs Bengaluru',
  description:
    'Wheelchair accessible taxi service in Bangalore with automatic hydraulic lift. Safe, dignified, and hygienic travel for hospital visits, airport transfers, and city travel.',
  url: 'https://yuvancabs.com',
  telephone: '+91-8105825544',
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
      <WheelchairTaxiVideo/>
      <CTABanner data={data.cta} />
      <PatientStoriesGallery/>
    </main>
  );
}
