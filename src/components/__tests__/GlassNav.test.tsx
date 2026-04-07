import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlassNav from '../GlassNav';
import { getGlobalData } from '@/lib/data';

const navData = getGlobalData().nav;

describe('GlassNav Component', () => {
    it('renders the brand name', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getByText('YuvanCabs')).toBeInTheDocument();
    });

    it('renders the city tagline', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getByText('Bengaluru')).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
        expect(screen.getAllByText('Services')[0]).toBeInTheDocument();
        expect(screen.getAllByText('About')[0]).toBeInTheDocument();
        expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
    });

    it('renders the driver status indicator', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getAllByText('Driver Available')[0]).toBeInTheDocument();
    });

    it('uses a semantic <nav> element', () => {
        const { container } = render(<GlassNav data={navData} />);
        const nav = container.querySelector('nav');
        expect(nav).toBeInTheDocument();
    });
});
