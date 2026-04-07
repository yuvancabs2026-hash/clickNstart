import robots from "@/app/robots";

describe("Robots Generator", () => {
    it("returns the correct robots.txt configuration", () => {
        const result = robots();

        expect(result.rules).toBeDefined();
        if (Array.isArray(result.rules)) {
            expect(result.rules[0].userAgent).toBe("*");
            expect(result.rules[0].allow).toBe("/");
        } else {
            expect(result.rules.userAgent).toBe("*");
            expect(result.rules.allow).toBe("/");
        }

        expect(result.sitemap).toBe("https://yuvancabs.com/sitemap.xml");
    });
});
