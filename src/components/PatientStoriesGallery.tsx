'use client';

import React from "react";
import Image from "next/image";

const images = [
  "/wheelchair/img (1).jpg",
  "/wheelchair/img (1).png",
  "/wheelchair/img (2).png",
  "/wheelchair/img (3).png",
  "/wheelchair/img (4).png",
  "/wheelchair/img (5).png",
  "/wheelchair/img (6).png",
  "/wheelchair/img (7).png",
  "/wheelchair/img (8).png",
  "/wheelchair/img (9).png",
  "/wheelchair/img (10).png"
];

const PatientStoriesGallery = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 text-center mb-16">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Real People. Real Care.
        </h2>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Our wheelchair taxi service helps elderly patients and wheelchair users
          travel safely without pain or strain. Families trust our hydraulic lift
          wheelchair taxi for hospital visits, dialysis transport, and safe
          medical travel.
        </p>

      </div>

      {/* Infinite Gallery */}
      <div className="relative">

<div className="flex animate-gallery-scroll gap-6 w-max">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] h-[220px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt="Wheelchair taxi patient transport service"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>

      {/* Emotional SEO text */}
      <div className="max-w-3xl mx-auto mt-20 text-center text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
        Transporting a wheelchair patient can be physically exhausting and
        emotionally stressful for families. Our wheelchair taxi eliminates that
        burden with a hydraulic lift system that safely lifts the wheelchair
        into the vehicle. Patients remain comfortably seated while our trained
        staff assist them, ensuring zero strain on the patient and caregivers.
        It’s a safer and more dignified way for wheelchair users and elderly
        passengers to travel to hospitals, dialysis centers, and medical
        appointments.
      </div>

     

    </section>
  );
};

export default PatientStoriesGallery;