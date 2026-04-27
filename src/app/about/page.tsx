import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { getAboutPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'About Click N Start — Wheelchair Taxi Service Bangalore',
    description:
        'Learn about Click N Start — Bengaluru\'s first wheelchair taxi with automatic hydraulic lift. Our mission: dignified, safe, effortless mobility for every wheelchair user.',
    alternates: {
        canonical: 'https://clicknstart.in/about',
    },
};

export default function AboutPage() {
    const data = getAboutPageData();

    return (
        <main>
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'About' },
                ]}
            />

            {/* Page Header */}
            <section className="py-16 bg-linear-to-b from-slate-50 to-white" aria-label="About header">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-6">
                        {data.heading}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {data.subheading}
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-primary" aria-label="Key statistics">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {data.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/80 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20" aria-label="Our story">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">
                        {data.story.heading}
                    </h2>
                    <div className="space-y-6">
                        {data.story.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-lg text-slate-600 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section
                className="py-16 bg-slate-50 border-y border-slate-200"
                aria-label="Our mission"
            >
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                        {data.mission.heading}
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed italic">
                        &ldquo;{data.mission.text}&rdquo;
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-20" aria-label="Our values">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">
                        Our Values
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.values.map((value) => (
                            <div
                                key={value.title}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">
                                        {value.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner data={data.cta} />
        </main>
    );
}
