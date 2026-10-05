import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
eyebrow: string;
title: string;
description: string;
}

export default function PageHero({
eyebrow,
title,
description,
}: PageHeroProps) {
return ( <section className="eweko-gradient relative overflow-hidden pt-36 pb-20 text-white md:pt-44 md:pb-28"> <div className="absolute inset-0 grid-pattern opacity-30" />

  <div className="container-eas relative">
    <Link
      href="/"
      className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
    >
      <ArrowLeft size={16} />
      Back to home
    </Link>

    <div className="max-w-4xl">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#9cc58b]">
        {eyebrow}
      </p>

      <h1 className="display-heading text-balance text-5xl font-semibold sm:text-6xl md:text-7xl">
        {title}
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  </div>
</section>


);
}
