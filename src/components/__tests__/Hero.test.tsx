import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
        expect(heading.querySelector('br')).toBeInTheDocument();
    });

    it('renders the hydraulic lift badge', () => {
        render(<Hero data={heroData} />);
        expect(screen.getByText('Zero-Effort Hydraulic Lift')).toBeInTheDocument();
    });

    it('renders CTA buttons', () => {
        render(<Hero data={heroData} />);
        expect(screen.getByRole('button', { name: /send trip details on whatsapp/i })).toBeInTheDocument();
        expect(screen.getByText('See How It Works')).toBeInTheDocument();
    });

    it('sends the entered pickup and destination to WhatsApp', () => {
        const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
        render(<Hero data={heroData} />);

        fireEvent.change(screen.getByLabelText('Pickup location'), {
            target: { value: 'Indiranagar, Bengaluru' },
        });
        fireEvent.change(screen.getByLabelText('Dropoff location'), {
            target: { value: 'Apollo Hospital, Chennai' },
        });
        fireEvent.click(screen.getByRole('button', { name: /send trip details on whatsapp/i }));

        expect(openSpy).toHaveBeenCalledWith(
            expect.stringContaining('wa.me/918197814490?text='),
            '_blank',
            'noopener,noreferrer',
        );
        const whatsappUrl = openSpy.mock.calls[0][0] as string;
        const message = decodeURIComponent(whatsappUrl.split('?text=')[1]);
        expect(message).toContain('Pickup location: Indiranagar, Bengaluru');
        expect(message).toContain('Dropoff location: Apollo Hospital, Chennai');
        expect(message).toContain('Pickup timing: Pickup now (please confirm availability)');
        expect(message).toContain('Please call me to confirm the cab and fare.');

        openSpy.mockRestore();
    });

    it('announces Chennai availability and suggests common destinations', () => {
        render(<Hero data={heroData} />);
        expect(screen.getByText('Now in Chennai too')).toBeInTheDocument();
        expect(screen.getByText('Wheelchair cab bookings available across Chennai')).toBeInTheDocument();
        expect(screen.getByLabelText('Dropoff location')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Pickup now' })).toHaveAttribute('aria-pressed', 'true');
        expect(screen.getByRole('button', { name: 'Schedule ahead' })).toHaveAttribute('aria-pressed', 'false');
        fireEvent.focus(screen.getByLabelText('Pickup location'));
        const suggestions = screen.getByRole('listbox', { name: 'Pickup location suggestions' });
        expect(suggestions).toHaveTextContent('Koramangala, Bengaluru');
        fireEvent.change(screen.getByLabelText('Pickup location'), { target: { value: 'Chennai' } });
        expect(screen.getByRole('listbox', { name: 'Pickup location suggestions' })).toHaveTextContent('Anna Nagar, Chennai');
    });

    it('keeps Chennai availability separate and supports pickup timing selection', () => {
        const { container } = render(<Hero data={heroData} />);
        const chennaiNotice = screen.getByText('Now in Chennai too').parentElement?.parentElement;
        const bookingCard = screen.getByRole('form', { name: 'Wheelchair taxi booking' }).parentElement;

        expect(chennaiNotice).not.toBeNull();
        expect(chennaiNotice?.parentElement).toBe(bookingCard?.parentElement);
        expect(bookingCard).not.toContainElement(chennaiNotice as HTMLElement);
        fireEvent.click(screen.getByRole('button', { name: 'Schedule ahead' }));
        expect(screen.getByRole('button', { name: 'Schedule ahead' })).toHaveAttribute('aria-pressed', 'true');

        const pickup = container.querySelector<HTMLInputElement>('#hero-pickup');
        const dropoff = container.querySelector<HTMLInputElement>('#hero-destination');
        expect(pickup?.parentElement).toHaveClass('border-slate-200');
        expect(dropoff?.parentElement).toHaveClass('border-primary/40');
    });

    it('places the heading first, the booking row next, and supporting content below', () => {
        render(<Hero data={heroData} />);
        const heroHeading = screen.getByRole('heading', { level: 1 });
        const bookingForm = screen.getByRole('form', { name: 'Wheelchair taxi booking' });
        const serviceDescription = screen.getByText(heroData.description);

        expect(heroHeading.compareDocumentPosition(bookingForm) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        expect(bookingForm.compareDocumentPosition(serviceDescription) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
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
