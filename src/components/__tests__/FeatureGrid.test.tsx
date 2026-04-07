import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureGrid from '../FeatureGrid';
import { getHomePageData } from '@/lib/data';

const featuresData = getHomePageData().features;

describe('FeatureGrid Component', () => {
    it('renders the section heading', () => {
        render(<FeatureGrid data={featuresData} />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent('Why the Lift Matters');
    });

    it('renders 3 feature cards', () => {
        render(<FeatureGrid data={featuresData} />);
        expect(screen.getByText('Zero Physical Strain')).toBeInTheDocument();
        expect(screen.getByText('Punctual Hospital Drops')).toBeInTheDocument();
        expect(screen.getByText('Dignity & Safety')).toBeInTheDocument();
    });

    it('has an aria-label on the section', () => {
        const { container } = render(<FeatureGrid data={featuresData} />);
        const section = container.querySelector('section');
        expect(section).toHaveAttribute('aria-label', 'Why the Lift Matters');
    });

    it('uses a semantic <section> element', () => {
        const { container } = render(<FeatureGrid data={featuresData} />);
        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
    });

    it('renders a responsive grid container', () => {
        const { container } = render(<FeatureGrid data={featuresData} />);
        const grid = container.querySelector('.grid.md\\:grid-cols-3');
        expect(grid).toBeInTheDocument();
    });
});
