import { getHomePageData, getGlobalData } from '@/lib/data';

describe('Data Layer', () => {
    describe('getHomePageData()', () => {
        const data = getHomePageData();

        it('returns hero data with all required fields', () => {
            expect(data.hero).toBeDefined();
            expect(data.hero.badge).toBeTruthy();
            expect(data.hero.headingLine1).toBeTruthy();
            expect(data.hero.headingHighlight).toBeTruthy();
            expect(data.hero.description).toBeTruthy();
            expect(data.hero.ctaPrimary.label).toBeTruthy();
            expect(data.hero.ctaPrimary.href).toBeTruthy();
            expect(data.hero.ctaSecondary.label).toBeTruthy();
            expect(data.hero.trustBadges.length).toBeGreaterThanOrEqual(1);
            expect(data.hero.liftCard.title).toBeTruthy();
        });

        it('returns features data with at least 1 feature', () => {
            expect(data.features).toBeDefined();
            expect(data.features.heading).toBeTruthy();
            expect(data.features.features.length).toBeGreaterThanOrEqual(1);
            data.features.features.forEach((f) => {
                expect(f.title).toBeTruthy();
                expect(f.description).toBeTruthy();
                expect(f.icon).toBeTruthy();
            });
        });

        it('returns testimonials data with at least 1 review', () => {
            expect(data.testimonials).toBeDefined();
            expect(data.testimonials.heading).toBeTruthy();
            expect(data.testimonials.reviews.length).toBeGreaterThanOrEqual(1);
            data.testimonials.reviews.forEach((r) => {
                expect(r.quote).toBeTruthy();
                expect(r.name).toBeTruthy();
                expect(r.stars).toBeGreaterThanOrEqual(1);
                expect(r.stars).toBeLessThanOrEqual(5);
            });
        });

        it('returns CTA data with booking link and phone link', () => {
            expect(data.cta).toBeDefined();
            expect(data.cta.heading).toBeTruthy();
            expect(data.cta.whatsapp.href).toMatch(/yuvancabs\.com\/booking/);
            expect(data.cta.phone.href).toMatch(/^tel:/);
        });
    });

    describe('getGlobalData()', () => {
        const data = getGlobalData();

        it('returns nav data with brand and links', () => {
            expect(data.nav).toBeDefined();
            expect(data.nav.brand).toBeTruthy();
            expect(data.nav.navLinks.length).toBeGreaterThanOrEqual(1);
            data.nav.navLinks.forEach((link) => {
                expect(link.label).toBeTruthy();
                expect(link.href).toBeTruthy();
            });
        });

        it('returns footer data with columns', () => {
            expect(data.footer).toBeDefined();
            expect(data.footer.brand).toBeTruthy();
            expect(data.footer.phone).toBeTruthy();
            expect(data.footer.columns.length).toBeGreaterThanOrEqual(1);
            data.footer.columns.forEach((col) => {
                expect(col.title).toBeTruthy();
                expect(col.links.length).toBeGreaterThanOrEqual(1);
            });
        });

        it('returns WhatsApp FAB data', () => {
            expect(data.whatsapp).toBeDefined();
            expect(data.whatsapp.href).toMatch(/wa\.me/);
            expect(data.whatsapp.href).toBeTruthy();
            expect(data.whatsapp.ariaLabel).toBeTruthy();
        });
    });
});
