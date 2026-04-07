'use client';

import { useState } from 'react';
import type { FAQItem } from '@/types/content';

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow hover:shadow-sm"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                            id={`faq-question-${index}`}
                        >
                            <span className="text-lg font-semibold text-slate-900 pr-4">
                                {item.question}
                            </span>
                            <span
                                className={`material-symbols-outlined text-slate-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            >
                                expand_more
                            </span>
                        </button>
                        <div
                            id={`faq-answer-${index}`}
                            role="region"
                            aria-labelledby={`faq-question-${index}`}
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}
                        >
                            <p className="px-6 text-slate-600 leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
