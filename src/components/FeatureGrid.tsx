import React from 'react';
import type { FeatureGridData } from '@/types/content';

interface FeatureGridProps {
    data: FeatureGridData;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ data }) => {
    return (
        <section
            className="py-24 bg-surface-light border-y border-slate-100"
            id="features"
            aria-label={data.heading}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {data.subheading}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {data.features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-background-light p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all group"
                        >
                            <div
                                className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center ${feature.iconColor} mb-6 group-hover:scale-110 transition-transform`}
                            >
                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
