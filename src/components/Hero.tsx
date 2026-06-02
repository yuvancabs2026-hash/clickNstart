import React from 'react';
import Image from 'next/image';
import type { HeroData } from '@/types/content';

interface HeroProps {
    data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <header className="relative pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl transform translate-y-1/4 -translate-x-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-primary font-semibold text-sm mb-6 border border-slate-200">
                            <span className="material-symbols-outlined text-base">accessible_forward</span>
                            <span>{data.badge}</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
                            {data.headingLine1}{' '}
                            <br className="hidden lg:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                                {data.headingHighlight}
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            {data.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
href="tel:+918197814490"                                    className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
                                aria-label={data.ctaPrimary.ariaLabel}
                            >
                                {data.ctaPrimary.label}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                            <a
    href="https://youtu.be/xbn5IdLhSnA"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
    aria-label="Watch wheelchair taxi hydraulic lift demo video"
>
    <span className="material-symbols-outlined text-primary">
        {data.ctaSecondary.icon}
    </span>
    {data.ctaSecondary.label}
</a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
                            {data.trustBadges.map((badge) => (
                                <div key={badge.label} className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    <span className="text-sm font-medium">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image Visual */}
                    <div className="flex-1 w-full relative">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-200 group">
                            <Image
                                src="/images/hero.png"
                                alt="Wheelchair accessible taxi with automatic hydraulic lift in Bangalore"
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
            </div>
        </header>
    );
};

export default Hero;
