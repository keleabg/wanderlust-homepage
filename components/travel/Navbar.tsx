"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideMenu } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md rounded-b-2xl shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white font-bold shadow-lg">
            DA
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-semibold">Dala Travel</div>
            <div className="text-xs text-muted-foreground">Explore Africa • Local-first</div>
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/flights" className="text-sm font-medium hover:text-primary transition">Flights</Link>
        <Link href="/hotels" className="text-sm font-medium hover:text-primary transition">Hotels</Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary transition">About Us</Link>
        <Link href="/contact" className="text-sm font-medium hover:text-primary transition">Contact</Link>
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <Button variant="ghost" size="sm">Sign in</Button>
        </div>
        <div className="md:hidden">
          <Button variant="outline" size="sm">
            <LucideMenu />
          </Button>
        </div>
      </div>
    </header>
  );
}
