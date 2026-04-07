'use client';

import React from "react";

const WheelchairTaxiVideo = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Wheelchair Taxi with Hydraulic Lift
        </h2>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-14">
          Our specialized wheelchair taxi uses a **hydraulic lift system**
          to safely transfer patients into the vehicle without lifting or
          physical strain. Patients remain seated in their wheelchair,
          ensuring **maximum comfort, safety, and dignity** during transport.
        </p>

        {/* Video Section */}
        <div className="relative flex justify-center items-center">

          {/* Floating Card 1 */}
          <div className="hidden md:block absolute -left-10 top-10 bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 p-4 rounded-xl max-w-[200px] text-left">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
              Hydraulic Lift System
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Smooth hydraulic platform lifts wheelchair directly into the taxi.
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="hidden md:block absolute -right-10 top-20 bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 p-4 rounded-xl max-w-[200px] text-left">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
              No Physical Strain
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Patients stay seated in wheelchair during the entire transfer process.
            </p>
          </div>

          

          {/* Video */}
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                // https://youtu.be/xbn5IdLhSnA
                src="https://www.youtube.com/embed/xbn5IdLhSnA?rel=0&modestbranding=1&controls=1"
                title="Wheelchair Taxi Hydraulic Lift Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

        {/* SEO Text Block */}
        <div className="max-w-3xl mx-auto mt-16 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          Our wheelchair accessible taxi service is designed for **elderly
          patients, hospital transfers, dialysis visits, rehabilitation
          transport, and non-emergency medical travel**. The hydraulic lift
          technology eliminates manual lifting, making it safer for both
          caregivers and passengers. This system ensures reliable,
          comfortable, and secure transportation for wheelchair users.
        </div>

      </div>
    </section>
  );
};

export default WheelchairTaxiVideo;