'use client';

import React, { useState, useCallback } from 'react';
import type { TestimonialsData } from '@/types/content';

interface TestimonialCarouselProps {
    data: TestimonialsData;
}

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1 text-yellow-400 mb-4" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl fill-current">star</span>
            ))}
        </div>
    );
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrev = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? data.reviews.length - 1 : prev - 1));
    }, [data.reviews.length]);

    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev === data.reviews.length - 1 ? 0 : prev + 1));
    }, [data.reviews.length]);

    return (
        <section className="py-24 bg-background-light" id="reviews" aria-label="Customer Testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-2">
                            {data.heading}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {data.subheading}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={goToPrev}
                            className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary transition-colors"
                            aria-label="Next testimonial"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Desktop: show all cards in grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.reviews.map((review) => (
                        <div
                            key={review.name}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
                        >
                            <StarRating count={review.stars} />
                            <blockquote className="text-slate-700 font-medium text-lg mb-6 flex-grow">
                                &ldquo;{review.quote}&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{review.name}</p>
                                    <p className="text-xs text-slate-500">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: show one card at a time */}
                <div className="md:hidden">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                        <StarRating count={data.reviews[activeIndex].stars} />
                        <blockquote className="text-slate-700 font-medium text-lg mb-6">
                            &ldquo;{data.reviews[activeIndex].quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                {data.reviews[activeIndex].name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">{data.reviews[activeIndex].name}</p>
                                <p className="text-xs text-slate-500">{data.reviews[activeIndex].location}</p>
                            </div>
                        </div>
                    </div>
                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {data.reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-primary w-6' : 'bg-slate-300'
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
