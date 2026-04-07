import React from 'react';
import type { RoutePageData } from '@/types/content';

interface RouteDetailsProps {
    data: Pick<RoutePageData, 'travelTime' | 'distance' | 'pricingEstimate' | 'landmarks' | 'description' | 'destination'>;
}

const RouteDetails: React.FC<RouteDetailsProps> = ({ data }) => {
    return (
        <section className="py-16 md:py-24 bg-surface-light" aria-label={`Trip details for ${data.destination}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-background-light rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {/* Detail Block 1: Travel Time */}
                        <div className="p-8 xl:p-12 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                                <span className="material-symbols-outlined text-4xl">schedule</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Travel Time</h3>
                            <p className="text-slate-600 font-medium">{data.travelTime}</p>
                        </div>

                        {/* Detail Block 2: Distance */}
                        <div className="p-8 xl:p-12 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                                <span className="material-symbols-outlined text-4xl">distance</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Distance</h3>
                            <p className="text-slate-600 font-medium">{data.distance}</p>
                        </div>

                        {/* Detail Block 3: Pricing */}
                        <div className="p-8 xl:p-12 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                                <span className="material-symbols-outlined text-4xl">payments</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Estimated Fare</h3>
                            <p className="text-slate-600 font-medium">{data.pricingEstimate}</p>
                        </div>
                    </div>

                    <div className="p-8 xl:p-12 border-t border-slate-200 bg-slate-50/50">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-brand-teal">pin_drop</span>
                            Key Landmarks &amp; Areas Served
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {data.landmarks.map((landmark: string, idx: number) => (
                                <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                                    {landmark}
                                </span>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-600 leading-relaxed max-w-3xl">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RouteDetails;
