"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
{ label: "About", href: "/about" },
{ label: "Speakers", href: "/speakers" },
{ label: "Agenda", href: "/agenda" },
{ label: "Exhibition", href: "/exhibition" },
{ label: "Sponsorship", href: "/sponsorship" },
{ label: "Partners", href: "/partners" },
];

export default function Navbar() {
const [open, setOpen] = useState(false);

return ( <header className="fixed inset-x-0 top-0 z-50"> <div className="container-eas pt-4"> <nav className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#102414]/90 px-4 py-3 text-white shadow-2xl backdrop-blur-xl md:px-6">
<Link
href="/"
onClick={() => setOpen(false)}
className="flex items-center gap-3"
> 
<img
src="/logo.png"
alt="Eweko Logo"
className="h-10 w-30 rounded-full object-cover"
/>

        <div className="hidden sm:block">
          <div className="text-sm font-bold tracking-tight">
            EWEKO AGRIBUSINESS
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
            Summit 2026
          </div>
        </div>
      </Link>

      <div className="hidden items-center gap-7 lg:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-white/75 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}

        <Link
           href="https://forms.gle/WiLHN4KP8P5V2G1Q7"
          className="group flex items-center gap-2 rounded-full bg-[#558244] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#659951]"
        >
          Register
          <ArrowUpRight
            size={16}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="rounded-xl border border-white/10 p-2 lg:hidden"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </nav>

    {open && (
      <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#102414] p-3 text-white shadow-2xl lg:hidden">
        <div className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-[#558244] px-4 py-3.5 text-center text-sm font-semibold"
          >
            Register for EAS 2026
          </Link>
        </div>
      </div>
    )}
  </div>
</header>


);
}
