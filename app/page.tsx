"use client";

import React from "react";
import { Navbar } from "@/components/travel/Navbar";
import { HeroSearch } from "@/components/travel/HeroSearch";
import { DestinationCard } from "@/components/travel/DestinationCard";
import { DealsCarousel } from "@/components/travel/DealsCarousel";
import { Footer } from "@/components/travel/Footer";

export default function Page() {
  const featured = [
    { id: 1, title: "Table Mountain", location: "Cape Town, South Africa", img: 201 },
    { id: 2, title: "Zanzibar Beaches", location: "Zanzibar, Tanzania", img: 202 },
    { id: 3, title: "Serengeti Plains", location: "Serengeti, Tanzania", img: 203 },
    { id: 4, title: "Marrakech Riads", location: "Marrakech, Morocco", img: 204 },
    { id: 5, title: "Kigali Cafés", location: "Kigali, Rwanda", img: 205 },
    { id: 6, title: "Nairobi Escapes", location: "Nairobi, Kenya", img: 206 },
    { id: 7, title: "Accra Coast", location: "Accra, Ghana", img: 207 },
    { id: 8, title: "Victoria Falls", location: "Livingstone, Zambia / Zimbabwe", img: 208 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 -right-28 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-cyan-200/20 via-purple-200/10 to-rose-200/10 blur-3xl animate-blob" />

          <HeroSearch />

          <section className="max-w-7xl mx-auto px-6 md:px-12 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Featured destinations</h2>
              <div className="text-sm text-muted-foreground hidden sm:block">Handpicked experiences across Africa</div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((f) => (
                <DestinationCard key={f.id} title={f.title} location={f.location} imgId={f.img} />
              ))}
            </div>

            <DealsCarousel />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
