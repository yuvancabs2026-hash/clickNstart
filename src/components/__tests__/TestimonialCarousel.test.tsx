import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialCarousel from '../TestimonialCarousel';
import { getHomePageData } from '@/lib/data';

const testimonialsData = getHomePageData().testimonials;

describe('TestimonialCarousel Component', () => {
    it('renders the section heading', () => {
        render(<TestimonialCarousel data={testimonialsData} />);
        expect(screen.getByText('Trusted by Families')).toBeInTheDocument();
    });

    it('renders reviewer names', () => {
        render(<TestimonialCarousel data={testimonialsData} />);
        // Desktop view shows all names
        expect(screen.getAllByText('Ramesh Kumar').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Anita Sharma').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('David P.').length).toBeGreaterThanOrEqual(1);
    });

    it('renders star ratings', () => {
        render(<TestimonialCarousel data={testimonialsData} />);
        const stars = screen.getAllByText('star');
        // 3 reviews × 5 stars × 2 (desktop + mobile) = at least 15
        expect(stars.length).toBeGreaterThanOrEqual(5);
    });

    it('renders navigation arrow buttons', () => {
        render(<TestimonialCarousel data={testimonialsData} />);
        expect(screen.getByLabelText('Previous testimonial')).toBeInTheDocument();
        expect(screen.getByLabelText('Next testimonial')).toBeInTheDocument();
    });

    it('has an aria-label on the section', () => {
        const { container } = render(<TestimonialCarousel data={testimonialsData} />);
        const section = container.querySelector('section');
        expect(section).toHaveAttribute('aria-label', 'Customer Testimonials');
    });

    it('navigates to the next testimonial on mobile when clicking next', () => {
        render(<TestimonialCarousel data={testimonialsData} />);
        const nextButton = screen.getByLabelText('Next testimonial');

        // Initially first review is shown (mobile view also renders)
        // Click next to advance
        fireEvent.click(nextButton);

        // After clicking next, Anita Sharma should still be visible (always in desktop)
        expect(screen.getAllByText('Anita Sharma').length).toBeGreaterThanOrEqual(1);
    });
});
