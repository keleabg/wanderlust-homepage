"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-gradient-to-t from-white/5 to-transparent py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white font-bold">DA</div>
          <div>
            <div className="font-semibold">Dala Travel</div>
            <div className="text-xs text-muted-foreground">Bringing local experiences to the world</div>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/careers" className="hover:text-primary">Careers</Link>
          <Link href="/terms" className="hover:text-primary">Terms</Link>
          <Link href="/privacy" className="hover:text-primary">Privacy</Link>
        </nav>

        <div className="text-sm text-muted-foreground">Made with ❤️ in Nairobi • Lagos • Accra</div>
      </div>
    </footer>
  );
}
