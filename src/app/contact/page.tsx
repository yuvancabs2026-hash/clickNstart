import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { getContactPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Contact Click N Start — Wheelchair Taxi Bangalore',
    description:
        'Get in touch with Click N Start for wheelchair accessible taxi booking in Bengaluru. Call +91 81058 25544 or message us on WhatsApp. Open 24/7.',
    alternates: {
        canonical: 'https://clicknstart.com/contact',
    },
};

export default function ContactPage() {
    const data = getContactPageData();

    return (
        <main>
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact' },
                ]}
            />

            {/* Page Header */}
            <section className="py-16 bg-linear-to-b from-slate-50 to-white" aria-label="Contact header">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-6">
                        {data.heading}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {data.subheading}
                    </p>
                </div>
            </section>

            {/* Contact Info + Map */}
            <section className="py-16" aria-label="Contact details">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* NAP Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">
                                Get In Touch
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                                        <p className="text-slate-600">{data.nap.name}</p>
                                        <p className="text-slate-600">{data.nap.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                                        <a
                                            href={`tel:${data.nap.phone.replace(/\s/g, '')}`}
                                            className="text-primary hover:text-secondary font-medium transition-colors"
                                        >
                                            {data.nap.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                                        <a
                                            href={`mailto:${data.nap.email}`}
                                            className="text-primary hover:text-secondary font-medium transition-colors"
                                        >
                                            {data.nap.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Hours</h3>
                                        <p className="text-slate-600">{data.nap.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">
                                Find Us
                            </h2>
                            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                                <iframe
                                    src={data.mapEmbedUrl}
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Click N Start Bengaluru location on Google Maps"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner data={data.cta} />
        </main>
    );
}
