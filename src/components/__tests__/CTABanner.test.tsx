import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CTABanner from '../CTABanner';
import { getHomePageData } from '@/lib/data';

const ctaData = getHomePageData().cta;

describe('CTABanner Component', () => {
    it('renders the heading', () => {
        render(<CTABanner data={ctaData} />);
        expect(screen.getByText('Ready to ride with dignity?')).toBeInTheDocument();
    });

    it('renders the subheading', () => {
        render(<CTABanner data={ctaData} />);
        expect(screen.getByText(/Book your YuvanCabs today/i)).toBeInTheDocument();
    });

    it('renders WhatsApp and phone CTA links', () => {
        render(<CTABanner data={ctaData} />);
        expect(screen.getByLabelText('Book via WhatsApp')).toBeInTheDocument();
        expect(screen.getByLabelText('Call us')).toBeInTheDocument();
    });

    it('has an aria-label on the section', () => {
        const { container } = render(<CTABanner data={ctaData} />);
        const section = container.querySelector('section');
        expect(section).toHaveAttribute('aria-label', 'Book a Ride');
    });
});
