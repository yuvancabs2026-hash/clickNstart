import React from 'react';
import type { WhatsAppFABData } from '@/types/content';

interface WhatsAppFABProps {
    data: WhatsAppFABData;
}

const WhatsAppFAB: React.FC<WhatsAppFABProps> = ({ data }) => {
    return (
        <a className="fixed bottom-6 right-6 z-50 group" href={data.href} aria-label={data.ariaLabel}>
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <button className="relative bg-[#25D366] hover:bg-[#20b858] text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-105" aria-label="WhatsApp Chat Button">
                <span className="material-symbols-outlined text-3xl">chat</span>
            </button>
        </a>
    );
};

export default WhatsAppFAB;
