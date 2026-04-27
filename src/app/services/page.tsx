import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { getServicesPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Wheelchair Taxi Services in Bangalore',
    description:
        'Airport transfers, hospital transport, outstation trips & package tours — all with automatic hydraulic lift. Book Click N Start\'s wheelchair accessible taxi in Bengaluru.',
    alternates: {
        canonical: 'https://clicknstart.in/services',
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Wheelchair Accessible Taxi Service',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Click N Start Bengaluru',
    },
    areaServed: {
        '@type': 'City',
        name: 'Bengaluru',
    },
    description:
        'Wheelchair accessible taxi service in Bangalore with automatic hydraulic lift — airport transfers, hospital transport, outstation trips, and event packages.',
    serviceType: 'Wheelchair Accessible Transportation',
};

export default function ServicesPage() {
    const data = getServicesPageData();

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' },
                ]}
            />

            {/* Page Header */}
            <section className="py-16 bg-linear-to-b from-slate-50 to-white" aria-label="Services overview">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-6">
                        {data.heading}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {data.subheading}
                    </p>
                </div>
            </section>

            {/* Service Cards */}
            <section className="py-16" aria-label="Service categories">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.services.map((service) => (
                            <div
                                key={service.title}
                                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">
                                        {service.icon}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="flex items-start gap-2 text-sm text-slate-700"
                                        >
                                            <span className="material-symbols-outlined text-green-500 text-base mt-0.5">
                                                check_circle
                                            </span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hydraulic Lift USP Section */}
            <section
                className="py-20 bg-slate-900 text-white"
                aria-label="Hydraulic lift advantage"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-6">
                            {data.uspSection.heading}
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {data.uspSection.description}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {data.uspSection.benefits.map((benefit) => (
                            <div
                                key={benefit}
                                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                            >
                                <span className="material-symbols-outlined text-accent text-xl mt-0.5">
                                    verified
                                </span>
                                <span className="text-sm text-slate-200">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner data={data.cta} />
        </main>
    );
}
