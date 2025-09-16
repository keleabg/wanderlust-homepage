"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-localStorage";

export function DealsCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [selectedDeal, setSelectedDeal] = useLocalStorage<number | null>("selected_deal", null);

  const deals = [
    { id: 1, title: "Zanzibar Beach Break", sub: "5 nights · All-inclusive", img: 1011 },
    { id: 2, title: "Serengeti Safari", sub: "3 nights · Guided tour", img: 1022 },
    { id: 3, title: "Marrakech Short Stay", sub: "4 nights · Riads & Tours", img: 1033 },
    { id: 4, title: "Cape Town Explorer", sub: "6 nights · Coastal drives", img: 1044 },
  ];

  function scroll(dir: number) {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Hot deals</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => scroll(-1)}>Prev</Button>
          <Button variant="ghost" size="sm" onClick={() => scroll(1)}>Next</Button>
        </div>
      </div>

      <div ref={ref} className="flex gap-4 overflow-x-auto pb-3 -mx-2 px-2 touch-pan-x scrollbar-none">
        {deals.map((d) => (
          <div key={d.id} className="min-w-[300px] max-w-[300px] rounded-xl bg-gradient-to-br from-white/60 to-white/10 p-3 shadow-md border border-border">
            <div className="h-40 w-full rounded-lg overflow-hidden">
              <img src={`https://picsum.photos/600/360?random=${d.img}`} alt={d.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="mt-3">
              <div className="font-semibold">{d.title}</div>
              <div className="text-sm text-muted-foreground">{d.sub}</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm">From <span className="font-bold text-primary">$399</span></div>
                <Button size="sm" onClick={() => setSelectedDeal(d.id)}>Save</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-sm text-muted-foreground">{selectedDeal ? `You saved deal #${selectedDeal}` : "Tap Save to keep a deal for later"}</div>
    </section>
  );
}
