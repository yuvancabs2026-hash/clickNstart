import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import { getFAQPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'FAQ — Wheelchair Taxi Bangalore',
    description:
        'Answers to common questions about wheelchair taxi service in Bangalore — pricing, booking process, hydraulic lift, hospital transport, areas covered, and more.',
    alternates: {
        canonical: 'https://clicknstart.in/faq',
    },
};

export default function FAQPage() {
    const data = getFAQPageData();

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'FAQ' },
                ]}
            />

            {/* Page Header */}
            <section className="py-16 bg-linear-to-b from-slate-50 to-white" aria-label="FAQ header">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-6">
                        {data.heading}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {data.subheading}
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-16" aria-label="Questions and answers">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FAQAccordion items={data.items} />
                </div>
            </section>

            <CTABanner data={data.cta} />
        </main>
    );
}
