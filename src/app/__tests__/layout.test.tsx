import { metadata } from "@/app/layout";

describe("Root Layout Metadata", () => {
    it("has the correct title structure", () => {
        expect(metadata.title).toEqual({
            default: "YuvanCabs Bengaluru - Premium Wheelchair Taxi",
            template: "%s | YuvanCabs",
        });
    });

    it("has a description mentioning key services", () => {
        expect(metadata.description).toMatch(/wheelchair taxi/i);
        expect(metadata.description).toMatch(/Bengaluru/i);
        expect(metadata.description).toMatch(/hydraulic lift/i);
    });

    it("has core OpenGraph properties defined", () => {
        expect(metadata.openGraph).toBeDefined();
        if (metadata.openGraph) {
            const og = metadata.openGraph as Record<string, unknown>;
            expect(og.title).toBe("YuvanCabs Bengaluru - Premium Wheelchair Taxi");
            expect(og.siteName).toBe("YuvanCabs");
            expect(og.locale).toBe("en_IN");
            expect(og.type).toBe("website");
        }
    });

    it("has Twitter card properties defined", () => {
        expect(metadata.twitter).toBeDefined();
        if (metadata.twitter) {
            const twitter = metadata.twitter as Record<string, unknown>;
            expect(twitter.card).toBe("summary_large_image");
            expect(twitter.title).toBe("YuvanCabs Bengaluru - Premium Wheelchair Taxi");
        }
    });
});
