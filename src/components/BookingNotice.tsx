import React from "react";

const ServicePromiseBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-linear-to-br from-teal-600 to-cyan-700 text-white overflow-hidden">

      {/* Subtle glow effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Main Emotional Statement */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
          Dignified Travel, <br className="hidden sm:block" />
          Whenever You Need It
        </h2>

        {/* Supporting Line */}
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          From planned hospital visits to unexpected moments, our wheelchair-accessible cabs
          are always ready to support you — with care, comfort, and reliability.
        </p>

        {/* Big Highlights */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">

          <div>
            <p className="text-5xl font-bold tracking-tight">24/7</p>
            <p className="text-white/80 mt-1">Service Available</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-white/30" />

          <div>
            <p className="text-5xl font-bold tracking-tight">3 Days</p>
            <p className="text-white/80 mt-1">Advance Booking Recommended</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-white/30" />

          <div>
            <p className="text-5xl font-bold tracking-tight">Emergency</p>
            <p className="text-white/80 mt-1">Support Available</p>
          </div>

        </div>

        {/* Closing reassurance */}
        <p className="mt-12 text-white/90 text-lg font-medium">
          We’re not just a cab service — we’re here when it truly matters.
        </p>

      </div>
    </section>
  );
};

export default ServicePromiseBanner;