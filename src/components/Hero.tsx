import React from 'react';
import Image from 'next/image';
import type { HeroData } from '@/types/content';
import HeroBookingForm from '@/components/HeroBookingForm';

interface HeroProps {
    data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <header className="relative overflow-hidden py-12 lg:py-20">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl transform translate-y-1/4 -translate-x-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h1 className="mb-8 max-w-6xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:mb-10 lg:text-6xl">
                    {data.headingLine1}{' '}
                    <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {data.headingHighlight}
                    </span>
                </h1>

                <div className="grid items-start gap-8 md:grid-cols-2 md:gap-8 xl:gap-16">
                    <div className="relative z-20 w-full">
                        <HeroBookingForm />
                    </div>

                    {/* Hero Image Visual */}
                    <div className="relative z-0 w-full">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-200 group">
                            <Image
                                src="/images/hero.png"
                                alt="Wheelchair-accessible taxi with an automatic hydraulic lift"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Floating UI Card overlay */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 z-20">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{data.liftCard.title}</h3>
                                        <p className="text-sm text-slate-500">{data.liftCard.capacity}</p>
                                    </div>
                                    <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                                        {data.liftCard.statusLabel}
                                    </div>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                                </div>
                                <div className="flex justify-between text-xs font-medium text-slate-500">
                                    <span>{data.liftCard.safetyLabel}</span>
                                    <span>{data.liftCard.readyLabel}</span>
                                </div>
                            </div>
                        </div>
                        {/* Decor blobs behind image */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl z-0"></div>
                    </div>
                </div>

                <section className="mt-10 max-w-5xl" aria-label="Wheelchair taxi service information">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-primary">
                        <span className="material-symbols-outlined text-base">accessible_forward</span>
                        <span>{data.badge}</span>
                    </div>
                    <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                        {data.description}
                    </p>

                    <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <a
                            href="https://youtu.be/xbn5IdLhSnA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-900 transition-colors hover:bg-slate-50"
                            aria-label="Watch wheelchair taxi hydraulic lift demo video"
                        >
                            <span className="material-symbols-outlined text-primary">
                                {data.ctaSecondary.icon}
                            </span>
                            {data.ctaSecondary.label}
                        </a>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-500">
                            {data.trustBadges.map((badge) => (
                                <div key={badge.label} className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    <span className="text-sm font-medium">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Hero;
