import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock the components so tests remain unit-level
jest.mock("@/components/Hero", () => {
    return function MockHero() {
        return <header data-testid="hero">Hero</header>;
    };
});

jest.mock("@/components/FeatureGrid", () => {
    return function MockFeatureGrid() {
        return <section data-testid="feature-grid">FeatureGrid</section>;
    };
});

jest.mock("@/components/TestimonialCarousel", () => {
    return function MockTestimonialCarousel() {
        return <section data-testid="testimonial-carousel">TestimonialCarousel</section>;
    };
});

jest.mock("@/components/CTABanner", () => {
    return function MockCTABanner() {
        return <section data-testid="cta-banner">CTABanner</section>;
    };
});

describe("Home Page", () => {
    it("uses a <main> element as the root container", () => {
        render(<Home />);
        const main = document.querySelector("main");
        expect(main).toBeInTheDocument();
    });

    it("renders the Hero section", () => {
        render(<Home />);
        expect(screen.getByTestId("hero")).toBeInTheDocument();
    });

    it("renders the FeatureGrid section", () => {
        render(<Home />);
        expect(screen.getByTestId("feature-grid")).toBeInTheDocument();
    });

    it("renders the TestimonialCarousel section", () => {
        render(<Home />);
        expect(screen.getByTestId("testimonial-carousel")).toBeInTheDocument();
    });

    it("renders the CTABanner section", () => {
        render(<Home />);
        expect(screen.getByTestId("cta-banner")).toBeInTheDocument();
    });
});
