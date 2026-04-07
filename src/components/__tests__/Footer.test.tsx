import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';
import { getGlobalData } from '@/lib/data';

// Mock next/image for test environment
jest.mock('next/image', () => {
    return function MockImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img {...props} />;
    };
});

const footerData = getGlobalData().footer;

describe('Footer Component', () => {
    it('renders the brand name', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('YuvanCabs')).toBeInTheDocument();
    });

    it('renders the phone number', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('+91 81058 25544')).toBeInTheDocument();
    });

    it('renders service area links', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('Indiranagar')).toBeInTheDocument();
        expect(screen.getByText('Koramangala')).toBeInTheDocument();
        expect(screen.getByText('Whitefield')).toBeInTheDocument();
    });

    it('renders footer column headings', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('Service Areas')).toBeInTheDocument();
        expect(screen.getByText('Company')).toBeInTheDocument();
        expect(screen.getByText('Support')).toBeInTheDocument();
    });

    it('renders the copyright text', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText(/© 2026 YuvanCabs Bengaluru/)).toBeInTheDocument();
    });

    it('uses a semantic <footer> element', () => {
        const { container } = render(<Footer data={footerData} />);
        const footer = container.querySelector('footer');
        expect(footer).toBeInTheDocument();
    });
});
