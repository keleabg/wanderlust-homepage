"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-localStorage";

export function HeroSearch() {
  const [query, setQuery] = useLocalStorage<string>("last_search_query", "Zanzibar, Tanzania");
  const [fromDate, setFromDate] = useLocalStorage<string>("last_search_from", "");
  const [toDate, setToDate] = useLocalStorage<string>("last_search_to", "");
  const [travelers, setTravelers] = useLocalStorage<number>("last_search_travelers", 2);
  const [saved, setSaved] = useState(false);

  function onSearch(e?: React.FormEvent) {
    e?.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1500);
  }

  return (
    <section className="relative overflow-hidden pt-8 pb-12">
      <div className="absolute -top-20 -left-28 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-amber-300/30 via-rose-200/20 to-cyan-200/10 blur-3xl animate-blob" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Find your next African escape</h1>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">Discover curated experiences across the continent — from rooftop cafés in Marrakech to safaris in the Serengeti.</p>
            </div>

            <form onSubmit={onSearch} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <input
                  aria-label="Destination"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="p-3 rounded-lg border border-border bg-card text-card-foreground placeholder:opacity-60"
                  placeholder={`Try "Cape Town, South Africa"`}
                />

                <input
                  type="date"
                  aria-label="From date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="p-3 rounded-lg border border-border bg-card text-card-foreground"
                />

                <input
                  type="date"
                  aria-label="To date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="p-3 rounded-lg border border-border bg-card text-card-foreground"
                />

                <select
                  aria-label="Travelers"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="p-3 rounded-lg border border-border bg-card text-card-foreground"
                >
                  <option value={1}>1 traveler</option>
                  <option value={2}>2 travelers</option>
                  <option value={3}>3 travelers</option>
                  <option value={4}>4 travelers</option>
                </select>

                <div className="flex items-center gap-3">
                  <Button type="submit" className="w-full">Search</Button>
                </div>

                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  {saved ? "Search saved to localStorage ✅" : "We save your last search locally"}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-6 text-xs text-muted-foreground">Popular searches: Cape Town — Marrakech — Zanzibar — Kigali</div>
      </div>
    </section>
  );
}
