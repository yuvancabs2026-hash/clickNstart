import fs from 'fs';
import path from 'path';

describe('Tailwind Theme Configuration', () => {
    it('should have custom theme tokens defined in globals.css', () => {
        const cssContent = fs.readFileSync(path.resolve(__dirname, '../globals.css'), 'utf-8');

        // Check for primary colors
        expect(cssContent).toMatch(/--color-primary:\s*#0e7490/);
        expect(cssContent).toMatch(/--color-secondary:\s*#155e75/);
        expect(cssContent).toMatch(/--color-accent:\s*#06b6d4/);

        // Check for background colors
        expect(cssContent).toMatch(/--color-background-light:\s*#f8fafc/);
        expect(cssContent).toMatch(/--color-background-dark:\s*#0f172a/);
        expect(cssContent).toMatch(/--color-surface-light:\s*#ffffff/);
        expect(cssContent).toMatch(/--color-surface-dark:\s*#1e293b/);

        // Check for typography
        expect(cssContent).toMatch(/--font-display:\s*"Inter",\s*sans-serif/);
        expect(cssContent).toMatch(/--font-body:\s*"Inter",\s*sans-serif/);
    });
});
