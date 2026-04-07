import sitemap from "@/app/sitemap";

describe("Sitemap Generator", () => {
    it("returns entries for all core pages", async () => {
        const result = await sitemap();
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThanOrEqual(8);

        const urls = result.map((entry) => entry.url);
        expect(urls).toContain("https://yuvancabs.com");
        expect(urls).toContain("https://yuvancabs.com/services");
        expect(urls).toContain("https://yuvancabs.com/booking");
        expect(urls).toContain("https://yuvancabs.com/about");
        expect(urls).toContain("https://yuvancabs.com/contact");
        expect(urls).toContain("https://yuvancabs.com/faq");
        expect(urls).toContain("https://yuvancabs.com/privacy-policy");
        expect(urls).toContain("https://yuvancabs.com/terms-of-service");
    });

    it("sets homepage as highest priority", async () => {
        const result = await sitemap();
        const homeEntry = result.find((e) => e.url === "https://yuvancabs.com");
        expect(homeEntry?.priority).toBe(1);
        expect(homeEntry?.changeFrequency).toBe("weekly");
    });

    it("all entries have lastModified dates", async () => {
        const result = await sitemap();
        result.forEach((entry) => {
            expect(entry.lastModified).toBeDefined();
        });
    });
});
