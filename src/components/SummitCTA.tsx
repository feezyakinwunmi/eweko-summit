import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SummitCTAProps {
title?: string;
description?: string;
}

export default function SummitCTA({
title = "Be part of the conversation.",
description = "Join farmers, businesses, investors, policymakers, technology providers and food-system leaders working toward a more resilient and inclusive food system.",
}: SummitCTAProps) {
return ( <section className="section-space"> <div className="container-eas"> <div className="relative overflow-hidden rounded-[2rem] bg-[#102414] px-6 py-14 text-white sm:px-10 md:px-16 md:py-20"> <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#558244]/30 blur-3xl" /> <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#558244]/20 blur-3xl" />


      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9cc58b]">
            EAS 2026
          </p>

          <h2 className="display-heading text-4xl font-semibold sm:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/register"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#558244] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#659951]"
          >
            Register
            <ArrowUpRight
              size={17}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            href="/sponsorship"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/5"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
