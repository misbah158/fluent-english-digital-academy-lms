"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { Logo } from "./logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-blue-800" href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-blue-900 to-violet-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Join Now
          </Link>
        </div>
        <button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-slate-200 p-3 text-slate-900 lg:hidden"
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open ? (
        <div className="mx-5 mb-4 rounded-3xl border border-slate-100 bg-white p-4 shadow-xl lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50" href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2 block rounded-2xl bg-blue-900 px-4 py-3 text-center font-bold text-white">
            Join Now
          </Link>
        </div>
      ) : null}
    </header>
  );
}
