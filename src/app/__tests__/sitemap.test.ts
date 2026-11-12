import sitemap from "@/app/sitemap";

describe("Sitemap Generator", () => {
    it("returns entries for all core pages", async () => {
        const result = await sitemap();
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThanOrEqual(8);

        const urls = result.map((entry) => entry.url);
        expect(urls).toContain("https://clicknstart.in");
        expect(urls).toContain("https://clicknstart.in/services");
        expect(urls).toContain("https://clicknstart.in/booking");
        expect(urls).toContain("https://clicknstart.in/about");
        expect(urls).toContain("https://clicknstart.in/contact");
        expect(urls).toContain("https://clicknstart.in/faq");
        expect(urls).toContain("https://clicknstart.in/privacy-policy");
        expect(urls).toContain("https://clicknstart.in/terms-of-service");
    });

    it("sets homepage as highest priority", async () => {
        const result = await sitemap();
        const homeEntry = result.find((e) => e.url === "https://clicknstart.in");
        expect(homeEntry?.priority).toBe(1);
        expect(homeEntry?.changeFrequency).toBe("weekly");
    });

    it("includes the Chennai wheelchair taxi landing page", async () => {
        const result = await sitemap();
        expect(result.map((entry) => entry.url)).toContain(
            "https://clicknstart.in/routes/wheelchair-taxi-chennai",
        );
        expect(result.map((entry) => entry.url)).toContain(
            "https://clicknstart.in/blog/wheelchair-taxi-chennai-hospital-dialysis-guide",
        );
    });

    it("all entries have lastModified dates", async () => {
        const result = await sitemap();
        result.forEach((entry) => {
            expect(entry.lastModified).toBeDefined();
        });
    });
});
