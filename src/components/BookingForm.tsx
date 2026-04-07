'use client';

import { useState } from 'react';
import type { BookingPageData } from '@/types/content';

interface BookingFormProps {
    data: BookingPageData;
}

export default function BookingForm({ data }: BookingFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickup: '',
        destination: '',
        datetime: '',
        notes: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = data.whatsappTemplate
            .replace('{name}', formData.name)
            .replace('{phone}', formData.phone)
            .replace('{pickup}', formData.pickup)
            .replace('{destination}', formData.destination)
            .replace('{datetime}', formData.datetime)
            .replace('{notes}', formData.notes || 'None');

        const encoded = encodeURIComponent(message);
        window.open(
            `https://wa.me/${data.whatsappNumber}?text=${encoded}`,
            '_blank'
        );
    };

    const inputClass =
        'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors';

    return (
        <form onSubmit={handleSubmit} className="space-y-5" id="booking-form">
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="pickup"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                    Pickup Location *
                </label>
                <input
                    type="text"
                    id="pickup"
                    name="pickup"
                    required
                    placeholder="e.g., Indiranagar, Bangalore"
                    value={formData.pickup}
                    onChange={handleChange}
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    htmlFor="destination"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                    Destination *
                </label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    required
                    placeholder="e.g., Manipal Hospital, Old Airport Road"
                    value={formData.destination}
                    onChange={handleChange}
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    htmlFor="datetime"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                    Preferred Date & Time *
                </label>
                <input
                    type="datetime-local"
                    id="datetime"
                    name="datetime"
                    required
                    value={formData.datetime}
                    onChange={handleChange}
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    htmlFor="notes"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                    Special Requirements
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="e.g., electric wheelchair, extra luggage, caregiver riding along"
                    value={formData.notes}
                    onChange={handleChange}
                    className={inputClass}
                />
            </div>

            <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-3"
            >
                <span className="material-symbols-outlined text-2xl">chat</span>
                Send Booking via WhatsApp
            </button>
        </form>
    );
}
