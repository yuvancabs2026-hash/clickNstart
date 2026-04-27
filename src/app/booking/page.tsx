import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import BookingForm from '@/components/BookingForm';
import { getBookingPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Book a Wheelchair Taxi in Bangalore',
    description:
        'Book Click N Start — Bengaluru\'s wheelchair accessible taxi with hydraulic lift. Easy WhatsApp booking, confirmed in 15 minutes. Call +91 81058 25544.',
    alternates: {
        canonical: 'https://clicknstart.com/booking',
    },
};

export default function BookingPage() {
    const data = getBookingPageData();

    return (
        <main>
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Book a Ride' },
                ]}
            />

            <section className="py-16 bg-gradient-to-b from-slate-50 to-white" aria-label="Booking form">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-6">
                            {data.heading}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {data.subheading}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <BookingForm data={data} />
                            </div>
                        </div>

                        {/* Instructions sidebar */}
                        <div className="lg:col-span-2">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <h2 className="text-lg font-bold text-slate-900 mb-4">
                                    How It Works
                                </h2>
                                <ol className="space-y-4">
                                    {data.instructions.map((instruction, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                                                {index + 1}
                                            </span>
                                            <span className="text-sm text-slate-600 leading-relaxed pt-0.5">
                                                {instruction}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner data={data.cta} />
        </main>
    );
}
