"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Sprout,
  Users,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

import Countdown from "@/components/Countdown";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import { summitPillars, audience } from "@/data/summit";




const fadeUp: Variants = {
hidden: {
opacity: 0,
y: 30,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.6,
ease: "easeOut",
},
},
};


export default function Home() {
  return (
    <main className="overflow-x-hidden">
    {/* HERO */} <section className="relative min-h-[760px] overflow-hidden bg-[#102414] text-white md:min-h-[850px]"> <Image
       src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2200&q=90"
       alt="Agricultural field and food production"
       fill
       priority
       className="object-cover"
     />


    <div className="hero-overlay absolute inset-0" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#102414] via-transparent to-transparent" />

    <div className="container-eas relative flex min-h-[760px] items-end pb-14 pt-36 md:min-h-[850px] md:pb-20">
      <div className="w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl"
        >
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              Eweko Agribusiness Summit 2026
            </span>

            <span className="rounded-full border border-[#9cc58b]/30 bg-[#558244]/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c6e0ba] backdrop-blur-md">
              Hybrid Summit
            </span>
          </div>

          <h1 className="display-heading text-balance text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-[6.4rem]">
            Building a more resilient and inclusive food system.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Food Loss and Waste as a Core Pathway to Resilience,
            Inclusion and Value.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 rounded-full bg-[#558244] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#659951]"
            >
              Register for EAS 2026
              <ArrowUpRight
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/sponsorship"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:bg-white/15"
            >
              Become a partner
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 grid max-w-4xl gap-3 sm:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1.4fr]"
        >
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
            <CalendarDays
              size={19}
              className="text-[#9cc58b]"
            />

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              Date
            </p>

            <p className="mt-1 text-sm font-semibold">
              4 November 2026
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
            <MapPin
              size={19}
              className="text-[#9cc58b]"
            />

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              Venue
            </p>

            <p className="mt-1 text-sm font-semibold">
              LASU Epe Campus
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
            <Clock3
              size={19}
              className="text-[#9cc58b]"
            />

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              Summit begins in
            </p>

            <Countdown />
          </div>
        </motion.div>
      </div>
    </div>
  </section>

      {/* INTRO STRIP */}
      <section className="border-b border-black/5 bg-white">
        <div className="container-eas grid grid-cols-1 divide-y divide-black/5 py-2 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:py-0">
          {[
            { number: "250–300", label: "Expected physical participants" },
            { number: "5", label: "Connected programme pillars" },
            { number: "1", label: "Day of dialogue and action" },
          ].map(({ number, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 py-6 text-center sm:flex-row sm:justify-center sm:gap-5 sm:py-8 sm:text-left"
            >
              <span className="shrink-0 text-3xl font-bold tracking-tight text-[#558244] sm:text-4xl">
                {number}
              </span>
              <span className="text-sm font-medium leading-6 text-[#667066]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-space overflow-hidden">
        <div className="container-eas grid gap-14 sm:gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85"
                alt="Farmer working in an agricultural field"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 mx-auto w-auto max-w-[82%] rounded-[1.5rem] bg-[#102414] p-5 text-white shadow-2xl sm:left-auto sm:right-[-1.75rem] sm:mx-0 sm:w-[70%] sm:p-6">
              <Sprout size={24} className="text-[#9cc58b]" />
              <p className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                Farmer centred.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Ecosystem driven. Market connected. Action oriented.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-6 lg:mt-0"
          >
            <SectionHeading
              eyebrow="Why EAS 2026"
              title="The food-system challenge is bigger than production."
              description="Nigeria must produce more food, but it must also retain more of what is already produced."
            />

            <div className="mt-7 space-y-5 text-sm leading-7 text-[#667066] sm:mt-8 sm:text-base">
              <p>
                Low productivity, weak production planning, inconsistent
                quality, fragmented aggregation, limited processing and
                preservation, inadequate logistics, market mismatch and weak
                loss data reinforce one another.
              </p>
              <p>
                EAS 2026 brings these connected issues into one conversation —
                linking production to markets, infrastructure, finance,
                technology and policy.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#558244] sm:mt-8"
            >
              Explore the Summit
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-[#f5f3ea] py-16 md:py-28">
        <div className="container-eas">
          <SectionHeading
            eyebrow="Programme Architecture"
            title="Five connected pillars. One food system."
            description="The Summit looks across the entire production-to-market chain while keeping food loss and waste as a strong cross-cutting component."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {summitPillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.06, duration: 0.5 },
                  },
                }}
              >
                <PillarCard {...pillar} />
              </motion.div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#558244]"
            >
              Explore all programme areas
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* EPE / SOUTHWEST */}
      <section className="relative overflow-hidden bg-[#102414] py-16 text-white md:py-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=2000&q=85"
            alt="Agricultural landscape"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#102414]/80" />
        </div>

        <div className="container-eas relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9cc58b]">
              Why Southwest Nigeria · Why Epe
            </p>

            <h2 className="display-heading mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Bringing the food ecosystem closer to production realities.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:mt-7 sm:text-base sm:leading-8">
              Epe provides a distinctive setting where farming, fisheries,
              aggregation, logistics, growing settlements and metropolitan
              demand meet.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b8d9aa]"
            >
              Why Epe?
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              "Production",
              "Aggregation",
              "Logistics",
              "Processing",
              "Markets",
              "Consumption",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <span className="text-xs font-bold text-[#9cc58b]">
                  0{index + 1}
                </span>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="section-space">
        <div className="container-eas">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            {/* TEXT AREA */}
            <div className="min-w-0">
              <SectionHeading
                eyebrow="Who Should Attend"
                title="The right people need to be in the room."
                description="Participation is designed to keep farmer and enterprise voices visible alongside institutional actors."
              />

              <div className="mt-7 max-w-xl text-sm leading-7 text-[#667066] sm:mt-8 sm:text-base">
                <p>
                  EAS 2026 brings together the people who produce, move,
                  finance, process, regulate, innovate and connect food to
                  markets.
                </p>
              </div>

              <Link
                href="/register"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#558244] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#466e38] sm:mt-8 sm:w-auto"
              >
                Register to attend
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* EXPECTED ATTENDEES */}
            <div className="min-w-0">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#558244]">
                    Expected Attendees
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-[#102414] sm:text-2xl">
                    A cross-section of the food ecosystem
                  </h3>
                </div>
                <Users
                  size={24}
                  className="hidden shrink-0 text-[#558244] sm:block"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {audience.map((item, index) => (
                  <div
                    key={item}
                    className="group flex min-w-0 items-start gap-3 rounded-2xl border border-black/8 bg-white p-4 transition hover:border-[#558244]/30 hover:bg-[#f8faf6] sm:gap-4 sm:p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8efe3] text-[#558244]">
                      <Check size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold tracking-[0.12em] text-[#a4aaa4]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-1 break-words text-sm font-semibold leading-6 text-[#102414] sm:text-[15px]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-[#e8efe3] py-16 md:py-28">
        <div className="container-eas">
          <SectionHeading
            eyebrow="What Comes After"
            title="The Summit is designed to leave something behind."
            description="The intended legacy is not a final government policy produced in one day. It is a credible, stakeholder-informed roadmap that identifies priority bottlenecks, actions, responsible actors and partnership opportunities."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "EAS 2026 Communiqué",
                text: "A concise set of recommendations and voluntary commitments.",
              },
              {
                number: "02",
                title: "Food Systems Roadmap",
                text: "A practical first draft grounded in the Southwest case.",
              },
              {
                number: "03",
                title: "Action Portfolio",
                text: "Priority production, market, infrastructure, finance and policy actions.",
              },
              {
                number: "04",
                title: "Partnership Pipeline",
                text: "Potential projects, pilots, finance needs and responsible actors.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[1.5rem] bg-white p-6 sm:p-7"
              >
                <span className="text-sm font-bold text-[#558244]">
                  {item.number}
                </span>
                <h3 className="mt-6 text-xl font-bold text-[#102414] sm:mt-7">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#667066]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITION / SPONSORSHIP */}
      <section className="section-space">
        <div className="container-eas">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="group relative min-h-[400px] overflow-hidden rounded-[2rem] sm:min-h-[430px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Business networking"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102414] via-[#102414]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8d9aa]">
                  Exhibition
                </p>
                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Put your solution where the food system meets.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                  Showcase products, technologies, services and business
                  models to a relevant audience.
                </p>
                <Link
                  href="/exhibition"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold"
                >
                  Explore exhibition
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="group relative min-h-[400px] overflow-hidden rounded-[2rem] bg-[#558244] p-6 text-white sm:min-h-[430px] sm:p-9">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Sponsorship
                </p>
                <h3 className="mt-4 max-w-lg text-2xl font-semibold sm:text-4xl">
                  Partner with a platform built for action.
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                  Multiple partnership routes are available for organisations
                  contributing to stronger food systems.
                </p>

                <div className="mt-auto pt-10">
                  <div className="mb-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      "Strategic",
                      "Knowledge",
                      "Finance",
                      "Technology",
                      "Market",
                      "Media",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/15 bg-white/10 px-3 py-3 text-center text-[10px] font-semibold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/sponsorship"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#18351d] transition hover:bg-white/90 sm:w-auto"
                  >
                    Explore partnership
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS PLACEHOLDER */}
      <section className="border-y border-black/5 bg-[#fafbf9] py-14 md:py-20">
        <div className="container-eas">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#558244]">
                Partners & Sponsors
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#102414]">
                Organisations powering EAS 2026
              </h2>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#558244]"
            >
              View partners
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 lg:grid-cols-6">
            {["Partner", "Partner", "Partner", "Partner", "Partner", "Partner"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex h-20 items-center justify-center rounded-xl border border-dashed border-black/10 bg-white text-[10px] font-bold uppercase tracking-widest text-black/20 sm:h-24 sm:text-xs"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#102414] py-16 text-white md:py-28">
        <div className="container-eas">
          <div className="mx-auto max-w-4xl text-center">
            <Users size={28} className="mx-auto text-[#9cc58b]" />

            <h2 className="display-heading mt-6 text-3xl font-semibold leading-tight sm:mt-7 sm:text-5xl md:text-7xl">
              The next chapter of our food system starts with a conversation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:mt-7 sm:text-base sm:leading-8">
              Join EAS 2026 in Epe on 4 November for a day of ideas,
              connections, practical solutions and action.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#558244] px-7 py-4 text-sm font-semibold transition hover:bg-[#659951] sm:w-auto"
              >
                Register for EAS 2026
                <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/agenda"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold transition hover:bg-white/5 sm:w-auto"
              >
                View the agenda
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 