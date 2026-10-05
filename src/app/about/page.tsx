import Link from "next/link";
import {
ArrowRight,
Check,
MapPin,
Target,
Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SummitCTA from "@/components/SummitCTA";
import { summitPillars } from "@/data/summit";

const principles = [
["Farmer centred", "Farmers and producer organisations contribute meaningfully across the programme."],
["Ecosystem driven", "Production, markets, infrastructure, finance, technology, research and policy are treated as connected parts of one system."],
["Market connected", "Production and investment discussions respond to verified demand, quality, timing, volumes and commercial viability."],
["Evidence informed", "The Summit distinguishes verified evidence from assumptions and makes better local loss data a priority."],
["Action oriented", "Sessions must lead to defined recommendations, partnerships, pilots, commitments or technical work."],
["Food safe & inclusive", "Loss reduction must protect food safety and nutritional value while considering women, youth and small enterprises."],
];

export default function AboutPage() {
return (
<> <PageHero
     eyebrow="About EAS 2026"
     title="A platform built around the realities of the food system."
     description="Eweko Agribusiness Summit 2026 connects farmers and production realities with the markets, infrastructure, finance, technology, policy and partnerships needed to build a more resilient and inclusive food system."
   />


  <section className="section-space">
    <div className="container-eas grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
      <div>
        <SectionHeading
          eyebrow="The Summit"
          title="Produce more. Lose less. Connect better."
        />

        <div className="mt-8 space-y-5 text-base leading-8 text-[#667066]">
          <p>
            EAS 2026 is a one-day hybrid convening designed to bring
            together farmers, businesses, investors, policymakers,
            researchers, technology providers and development partners.
          </p>

          <p>
            The inaugural edition focuses on Southwest Nigeria as a
            practical starting point for wider regional learning. Epe
            provides a distinctive setting where farming, fisheries,
            aggregation, logistics, growing settlements and metropolitan
            demand meet.
          </p>

          <p>
            The Summit is intentionally larger than a discussion about
            production alone. It looks at the full journey from production
            to market while keeping food loss and waste as a strong
            cross-cutting priority.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-[#102414] p-8 text-white sm:p-10">
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#558244]/30 blur-3xl" />

        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#558244]">
            <Target size={25} />
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#9cc58b]">
            Core Question
          </p>

          <h3 className="mt-4 text-3xl font-semibold leading-tight">
            How can the region produce more, lose less and connect farmers
            more reliably to profitable markets?
          </h3>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/50">
            The Summit will turn this question into practical discussions,
            partnerships and a stakeholder-informed roadmap.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-[#f5f3ea] py-20 md:py-28">
    <div className="container-eas">
      <SectionHeading
        eyebrow="Why Southwest Nigeria"
        title="A food economy with enormous potential."
        description="Southwest Nigeria combines major consumption centres, diverse production zones, active agribusinesses, universities, research institutions, financial institutions, transport corridors, processors and fast-growing food markets."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: MapPin,
            title: "Why Epe",
            text: "A peri-urban food economy where production, fisheries, aggregation, logistics and metropolitan demand meet.",
          },
          {
            icon: Users,
            title: "Who is at the table",
            text: "Farmers, producer groups, buyers, processors, investors, government, researchers, technology providers and development partners.",
          },
          {
            icon: Target,
            title: "What comes next",
            text: "A practical Resilient and Inclusive Food Systems Roadmap grounded in evidence, ownership and follow-through.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="card-hover rounded-[1.5rem] border border-black/5 bg-white p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efe3] text-[#558244]">
                <Icon size={21} />
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#102414]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667066]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  <section className="section-space">
    <div className="container-eas">
      <SectionHeading
        eyebrow="Programme Architecture"
        title="Five connected pillars."
        description="Food loss and waste is embedded across the programme rather than treated as an isolated environmental topic."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summitPillars.map((pillar) => (
          <div
            key={pillar.number}
            className="card-hover rounded-[1.5rem] border border-black/8 bg-white p-7"
          >
            <span className="text-sm font-bold text-[#558244]">
              {pillar.number}
            </span>

            <h3 className="mt-5 text-xl font-bold leading-snug text-[#102414]">
              {pillar.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#667066]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="bg-[#102414] py-20 text-white md:py-28">
    <div className="container-eas">
      <SectionHeading
        eyebrow="Design Principles"
        title="How EAS will operate."
        description="The inaugural edition is deliberately designed to remain practical, inclusive and focused on outcomes."
      />

      <div className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-2">
        {principles.map(([title, text]) => (
          <div
            key={title}
            className="flex gap-4 border-t border-white/10 pt-6"
          >
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#558244]">
              <Check size={15} />
            </div>

            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/50">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <SummitCTA />
</>


);
}
