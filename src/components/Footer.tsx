import Link from "next/link";
import {
ArrowUpRight,
Mail,
Phone,
MapPin,
} from "lucide-react";

const links = [
{ label: "About", href: "/about" },
{ label: "Agenda", href: "/agenda" },
{ label: "Exhibition", href: "/exhibition" },
{ label: "Sponsorship", href: "/sponsorship" },
{ label: "Partners", href: "/partners" },
{ label: "Register", href: "/register" },
];

export default function Footer() {
return (
<footer className="bg-[#102414] text-white">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
{/* Brand */}
<div>
<Link href="/" className="inline-block">
<div className="text-2xl font-bold tracking-tight">
EWEKO
</div>

          <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/60">
            Agribusiness Summit 2026
          </div>
        </Link>

        <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
          Building a more resilient and inclusive food system through
          stronger markets, better technology, smarter investment and
          practical partnerships.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-[#8fb77a]" />
            <span>
              Olatunji Bello Auditorium, LASU Epe Campus,
              Epe, Lagos State
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-[#8fb77a]" />
            <span>Contact Eweko Integrated Services</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-[#8fb77a]" />
            <span>Event enquiries & partnership</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
          Explore
        </h3>

        <nav className="mt-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Summit */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
          Summit 2026
        </h3>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm text-white/50">Date</p>
            <p className="mt-1 text-sm font-medium text-white">
              4 November 2026
            </p>
          </div>

          <div>
            <p className="text-sm text-white/50">Format</p>
            <p className="mt-1 text-sm font-medium text-white">
              One-day Hybrid Summit
            </p>
          </div>

          <div>
            <p className="text-sm text-white/50">Focus</p>
            <p className="mt-1 text-sm font-medium leading-6 text-white">
              Food Loss & Waste as a Core Pathway to Resilience,
              Inclusion and Value
            </p>
          </div>
        </div>

        <Link
          href="/register"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#558244] px-5 py-3 text-sm font-semibold transition hover:bg-[#689752]"
        >
          Register for EAS 2026
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} Eweko Integrated Services Limited.
        All rights reserved.
      </p>

      <p>
        Eweko Agribusiness Summit 2026
      </p>
    </div>
  </div>
</footer>

);
}