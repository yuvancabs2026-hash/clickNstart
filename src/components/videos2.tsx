'use client';

import React from "react";

const WheelchairTaxiReels = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Wheelchair Taxi Service in Action
        </h2>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Watch real-life demonstrations of our wheelchair accessible taxi,
          including how passengers are safely onboarded using a hydraulic lift
          and genuine feedback from customers who experienced comfortable,
          stress-free medical transportation.
        </p>

        {/* Reels Container */}
        <div className="flex flex-wrap justify-center gap-10">

          {/* Reel 1 */}
          <div className="w-65 sm:w-70 md:w-75">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 bg-black">

              <div className="relative w-full aspect-9/16">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/uz16a4Fr5qA"
                  title="Wheelchair Onboarding Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

            </div>

            <div className="mt-3 text-left">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Safe Wheelchair Onboarding
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                See how our hydraulic lift enables seamless entry into the taxi
                without lifting, ensuring maximum safety and comfort.
              </p>
            </div>
          </div>

          {/* Reel 2 */}
          <div className="w-65 sm:w-70 md:w-75">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 bg-black">

              <div className="relative w-full aspect-9/16">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/0dmP6THffcQ"
                  title="Customer Feedback Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

            </div>

            <div className="mt-3 text-left">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Real Customer Experience
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Hear directly from our customer about the reliability, comfort,
                and dignity provided during their wheelchair taxi journey.
              </p>
            </div>
          </div>

        </div>

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto mt-16 text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-4">
          <p>
            Our wheelchair taxi service is designed to provide safe, reliable,
            and accessible transportation for elderly individuals, patients,
            and people with mobility challenges. With advanced hydraulic lift
            technology, passengers can remain seated in their wheelchair while
            being smoothly lifted into the vehicle, eliminating the need for
            manual lifting.
          </p>

          <p>
            This service is ideal for hospital visits, dialysis appointments,
            rehabilitation sessions, airport transfers, and daily travel needs.
            We focus on ensuring dignity, comfort, and complete peace of mind
            for both passengers and caregivers.
          </p>

          <p>
            If you are looking for a wheelchair accessible taxi near you,
            our service combines trained staff, modern vehicles, and safety-first
            operations to deliver a hassle-free travel experience every time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WheelchairTaxiReels;