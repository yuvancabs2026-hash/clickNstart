import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumbs from '../Breadcrumbs';

describe('Breadcrumbs Component', () => {
    const items = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Current Post' },
    ];

    it('renders all breadcrumb items', () => {
        render(<Breadcrumbs items={items} />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Blog')).toBeInTheDocument();
        expect(screen.getByText('Current Post')).toBeInTheDocument();
    });

    it('renders the last item as non-link text', () => {
        render(<Breadcrumbs items={items} />);
        const lastItem = screen.getByText('Current Post');
        expect(lastItem.tagName).not.toBe('A');
    });

    it('renders intermediate items as links', () => {
        render(<Breadcrumbs items={items} />);
        const homeLink = screen.getByText('Home');
        expect(homeLink.tagName).toBe('A');
        expect(homeLink).toHaveAttribute('href', '/');

        const blogLink = screen.getByText('Blog');
        expect(blogLink.tagName).toBe('A');
        expect(blogLink).toHaveAttribute('href', '/blog');
    });

    it('has aria-label on the nav element', () => {
        const { container } = render(<Breadcrumbs items={items} />);
        const nav = container.querySelector('nav');
        expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('renders JSON-LD BreadcrumbList schema', () => {
        const { container } = render(<Breadcrumbs items={items} />);
        const script = container.querySelector('script[type="application/ld+json"]');
        expect(script).toBeInTheDocument();
        const data = JSON.parse(script!.textContent || '');
        expect(data['@type']).toBe('BreadcrumbList');
        expect(data.itemListElement).toHaveLength(3);
        expect(data.itemListElement[0].position).toBe(1);
        expect(data.itemListElement[0].name).toBe('Home');
    });

    it('sets aria-current="page" on the last item', () => {
        render(<Breadcrumbs items={items} />);
        const lastItem = screen.getByText('Current Post');
        expect(lastItem).toHaveAttribute('aria-current', 'page');
    });
});
