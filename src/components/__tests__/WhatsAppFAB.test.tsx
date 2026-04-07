import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhatsAppFAB from '../WhatsAppFAB';
import { getGlobalData } from '@/lib/data';

const whatsappData = getGlobalData().whatsapp;

describe('WhatsAppFAB Component', () => {
    it('renders a WhatsApp link', () => {
        render(<WhatsAppFAB data={whatsappData} />);
        expect(screen.getByLabelText('Chat on WhatsApp')).toBeInTheDocument();
    });

    it('has the correct WhatsApp href', () => {
        render(<WhatsAppFAB data={whatsappData} />);
        const link = screen.getByLabelText('Chat on WhatsApp');
        expect(link).toHaveAttribute('href', whatsappData.href);
    });

    it('renders the chat icon button', () => {
        render(<WhatsAppFAB data={whatsappData} />);
        expect(screen.getByLabelText('WhatsApp Chat Button')).toBeInTheDocument();
    });
});
