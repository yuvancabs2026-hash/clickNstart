import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';
import { getHomePageData } from '@/lib/data';

const heroData = getHomePageData().hero;

describe('Hero Component', () => {
    it('renders the primary keyword in an h1 element', () => {
        render(<Hero data={heroData} />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toMatch(/Automated Wheelchair Taxi/i);
    });

    it('renders the hydraulic lift badge', () => {
        render(<Hero data={heroData} />);
        expect(screen.getByText('Zero-Effort Hydraulic Lift')).toBeInTheDocument();
    });

    it('renders CTA buttons', () => {
        render(<Hero data={heroData} />);
        expect(screen.getByText('Book Your Ride')).toBeInTheDocument();
        expect(screen.getByText('See How It Works')).toBeInTheDocument();
    });

    it('renders trust signals', () => {
        render(<Hero data={heroData} />);
        expect(screen.getByText('Verified Drivers')).toBeInTheDocument();
        expect(screen.getByText('Sanitized Daily')).toBeInTheDocument();
        expect(screen.getByText('On-Time Guarantee')).toBeInTheDocument();
    });

    it('uses a semantic <header> element', () => {
        const { container } = render(<Hero data={heroData} />);
        const header = container.querySelector('header');
        expect(header).toBeInTheDocument();
    });

    it('renders the hydraulic lift system card', () => {
        render(<Hero data={heroData} />);
        expect(screen.getByText('Hydraulic Lift System')).toBeInTheDocument();
        expect(screen.getByText('Capacity: 300kg')).toBeInTheDocument();
    });
});
