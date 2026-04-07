import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getLegalPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Privacy Policy for YuvanCabs Bengaluru — learn how we collect, use, and protect your personal information.',
    alternates: {
        canonical: 'https://yuvancabs.com/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    const data = getLegalPageData('privacy-policy');

    return (
        <main>
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Privacy Policy' },
                ]}
            />

            <section className="py-16" aria-label="Privacy Policy">
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
