'use client';

import { useState, type FocusEvent, type FormEvent } from 'react';

const locationSuggestions = [
    'Indiranagar, Bengaluru',
    'Koramangala, Bengaluru',
    'Whitefield, Bengaluru',
    'Jayanagar, Bengaluru',
    'HSR Layout, Bengaluru',
    'Electronic City, Bengaluru',
    'Kempegowda International Airport, Bengaluru',
    'Mysuru',
    'Hosur',
    'Chennai',
    'Adyar, Chennai',
    'Anna Nagar, Chennai',
    'T Nagar, Chennai',
    'Tambaram, Chennai',
    'OMR, Chennai',
];

type LocationField = 'pickup' | 'destination';

export default function HeroBookingForm() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [activeField, setActiveField] = useState<LocationField | null>(null);
    const [pickupTiming, setPickupTiming] = useState<'now' | 'scheduled'>('now');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const message = [
            'Hi Click N Start, I would like to book a wheelchair cab.',
            '',
            `Pickup location: ${pickup.trim()}`,
            `Dropoff location: ${destination.trim()}`,
            `Pickup timing: ${pickupTiming === 'now' ? 'Pickup now' : 'Schedule ahead'} (please confirm availability)`,
            '',
            'Please call me to confirm the cab and fare.',
        ].join('\n');

        window.open(
            `https://wa.me/918197814490?text=${encodeURIComponent(message)}`,
            '_blank',
            'noopener,noreferrer',
        );
    };

    const handleBlur = (field: LocationField) => (event: FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setActiveField((current) => current === field ? null : current);
        }
    };

    const renderLocationField = (
        field: LocationField,
        label: string,
        value: string,
        setValue: (value: string) => void,
        icon: string,
    ) => {
        const isActive = activeField === field;
        const filteredSuggestions = locationSuggestions
            .filter((location) => location.toLowerCase().includes(value.trim().toLowerCase()));
        const listId = `hero-${field}-suggestions`;
        const isPickup = field === 'pickup';

        return (
            <div className="relative" onBlur={handleBlur(field)}>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600" htmlFor={`hero-${field}`}>
                    {isPickup ? 'Pickup location' : 'Dropoff location'}
                </label>
                <div className={`relative flex items-center rounded-xl border transition-shadow focus-within:ring-2 focus-within:ring-primary/30 ${isPickup ? 'border-slate-200 bg-white focus-within:border-primary' : 'border-primary/40 bg-primary/5 focus-within:border-primary'} ${isActive ? 'z-30' : ''}`}>
                    <span className="material-symbols-outlined absolute left-4 text-primary" aria-hidden="true">
                        {icon}
                    </span>
                    <input
                        className="w-full rounded-xl bg-transparent py-4 pl-12 pr-4 text-base font-medium text-slate-900 placeholder:font-normal placeholder:text-slate-500 focus:outline-none"
                        id={`hero-${field}`}
                        name={`hero-${field}`}
                        type="text"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-expanded={isActive}
                        aria-controls={listId}
                        autoComplete="off"
                        placeholder={label}
                        required
                        value={value}
                        onFocus={() => setActiveField(field)}
                        onChange={(event) => {
                            setValue(event.target.value);
                            setActiveField(field);
                        }}
                    />
                    {isActive && (
                        <div
                            className="absolute left-0 right-0 top-full z-40 mt-2 max-h-64 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 text-left shadow-xl"
                            id={listId}
                            role="listbox"
                            aria-label={`${label} suggestions`}
                        >
                            {filteredSuggestions.length > 0 ? filteredSuggestions.map((location) => (
                                <button
                                    key={location}
                                    type="button"
                                    role="option"
                                    aria-selected={value === location}
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none"
                                    onMouseDown={(event) => event.preventDefault()}
                                    onClick={() => {
                                        setValue(location);
                                        setActiveField(null);
                                    }}
                                >
                                    <span className="material-symbols-outlined text-lg text-slate-500" aria-hidden="true">
                                        location_on
                                    </span>
                                    {location}
                                </button>
                            )) : (
                                <p className="px-3 py-3 text-sm text-slate-500">
                                    No matching suggestions. You can use the location you entered.
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full">
            <div className="mb-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-left">
                <span className="material-symbols-outlined shrink-0 text-2xl text-primary" aria-hidden="true">location_on</span>
                <div>
                    <div className="font-extrabold text-primary">
                        Now in Chennai too
                    </div>
                    <p className="text-sm font-medium text-slate-700">
                        Wheelchair cab bookings available across Chennai
                    </p>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 sm:p-6">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-bold text-slate-900">Plan your wheelchair cab ride</h2>
                    <div className="flex items-center gap-2" role="group" aria-label="Pickup timing">
                        <button
                            type="button"
                            aria-pressed={pickupTiming === 'now'}
                            onClick={() => setPickupTiming('now')}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${pickupTiming === 'now' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                        >
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">schedule</span>
                            Pickup now
                        </button>
                        <button
                            type="button"
                            aria-pressed={pickupTiming === 'scheduled'}
                            onClick={() => setPickupTiming('scheduled')}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${pickupTiming === 'scheduled' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                        >
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">event</span>
                            Schedule ahead
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3" aria-label="Wheelchair taxi booking">
                    {renderLocationField('pickup', 'Pickup location', pickup, setPickup, 'radio_button_checked')}
                    <div className="ml-[23px] h-3 border-l border-dashed border-slate-400" aria-hidden="true" />
                    {renderLocationField('destination', 'Dropoff location', destination, setDestination, 'location_on')}
                    <button
                        type="submit"
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-white shadow-md shadow-primary/20 transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                        Send trip details on WhatsApp
                    </button>
                </form>
                <p className="mt-3 text-center text-sm text-slate-600">
                    We’ll call to confirm availability, your wheelchair cab, and the fare.
                </p>
            </div>
        </div>
    );
}
