import React from 'react';
import type { CTAData } from '@/types/content';

interface CTABannerProps {
    data: CTAData;
}

const CTABanner: React.FC<CTABannerProps> = ({ data }) => {
    return (
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden" aria-label="Book a Ride">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60 z-10"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
                <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6">
                    {data.heading}
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    {data.subheading}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href={data.whatsapp.href}
                        className="bg-primary hover:bg-secondary text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-3"
                        aria-label={data.whatsapp.ariaLabel}
                    >
                        <span className="material-symbols-outlined text-2xl">chat</span>
                        {data.whatsapp.label}
                    </a>
                    <a
                        href={data.phone.href}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3"
                        aria-label={data.phone.ariaLabel}
                    >
                        <span className="material-symbols-outlined text-2xl">call</span>
                        {data.phone.label}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
