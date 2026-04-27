import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getLegalPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description:
        'Terms of Service for Click N Start Bengaluru — wheelchair accessible taxi service. Read our terms for bookings, cancellations, and service policies.',
    alternates: {
        canonical: 'https://clicknstart.com/terms-of-service',
    },
};

export default function TermsOfServicePage() {
    const data = getLegalPageData('terms-of-service');

    return (
        <main>
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Terms of Service' },
                ]}
            />

            <section className="py-16" aria-label="Terms of Service">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-display font-extrabold tracking-tight text-slate-900 mb-4">
                        {data.title}
                    </h1>
                    <p className="text-sm text-slate-500 mb-12">
                        Last updated: {data.lastUpdated}
                    </p>

                    <div className="space-y-10">
                        {data.sections.map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">
                                    {section.heading}
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
