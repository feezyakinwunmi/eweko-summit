"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Mic,
  Sparkles,
  Users,
  X,
} from "lucide-react";

type Speaker = {
  name: string;
  role: string;
  organization: string;
  image: string;
  bio: string;
  session: string;
  category: string;
};

const speakers: Speaker[] = [
  {
    name: "Dr. Amaka Okafor",
    role: "Keynote Speaker",
    organization: "Innovation & Technology Leader",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
    bio: "Dr. Amaka Okafor is an innovation strategist and technology leader passionate about building systems that empower young people and create meaningful opportunities across Africa.",
    session: "The Future We Are Building",
    category: "Keynote Speaker",
  },
  {
    name: "David Adebayo",
    role: "Technology Entrepreneur",
    organization: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    bio: "David is a technology entrepreneur focused on building scalable products and developing the next generation of African founders and technology professionals.",
    session: "Building Technology That Matters",
    category: "Panel 01",
  },
  {
    name: "Sarah Williams",
    role: "Product & Innovation Expert",
    organization: "Product Strategy Consultant",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    bio: "Sarah works at the intersection of product, innovation and human-centered design, helping organizations turn complex problems into practical solutions.",
    session: "Building Technology That Matters",
    category: "Panel 01",
  },
  {
    name: "Michael Adekunle",
    role: "Business Strategist",
    organization: "Growth & Strategy",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    bio: "Michael is a business strategist with experience helping startups and organizations build sustainable growth models and navigate changing markets.",
    session: "Building Technology That Matters",
    category: "Panel 01",
  },
  {
    name: "Chioma Eze",
    role: "Founder & Creative Director",
    organization: "Creative Industry",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    bio: "Chioma is a creative entrepreneur passionate about African storytelling, culture and creating platforms where young creatives can thrive.",
    session: "Africa, Creativity & Global Influence",
    category: "Panel 02",
  },
  {
    name: "Tunde Balogun",
    role: "Investment & Finance Expert",
    organization: "Venture Capital",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    bio: "Tunde works with founders and investors to create sustainable businesses and unlock opportunities for emerging African companies.",
    session: "Funding the Next Generation",
    category: "Panel 02",
  },
  {
    name: "Jessica Morgan",
    role: "Leadership Coach",
    organization: "Leadership & Development",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    bio: "Jessica helps emerging leaders develop the mindset, skills and confidence required to lead teams and create lasting impact.",
    session: "Leadership Beyond the Title",
    category: "Fireside Chat",
  },
  {
    name: "Emmanuel Johnson",
    role: "Community Builder",
    organization: "Youth & Social Impact",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    bio: "Emmanuel builds communities around youth development, entrepreneurship and social innovation, connecting young people to opportunities.",
    session: "The Power of Community",
    category: "Special Guests",
  },
];

const sections = [
  {
    id: "01",
    title: "Keynote",
    subtitle: "The opening voice",
    description:
      "One voice. One perspective. A keynote designed to challenge how we think about the future.",
    category: "Keynote Speaker",
    icon: Mic,
  },
  {
    id: "02",
    title: "Panel 01",
    subtitle: "Builders & innovators",
    description:
      "Builders, founders and innovators discussing the ideas shaping tomorrow.",
    category: "Panel 01",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "Panel 02",
    subtitle: "Creative & capital",
    description:
      "Exploring Africa's creative, business and investment opportunities.",
    category: "Panel 02",
    icon: Sparkles,
  },
  {
    id: "04",
    title: "Fireside Chat",
    subtitle: "An intimate conversation",
    description:
      "An intimate conversation about leadership, growth and building with purpose.",
    category: "Fireside Chat",
    icon: Users,
  },
  {
    id: "05",
    title: "Special Guests",
    subtitle: "Community voices",
    description:
      "Meet some of the people helping move communities and industries forward.",
    category: "Special Guests",
    icon: Users,
  },
];

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f7f3] text-[#111]">
      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden bg-[#101010] px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -bottom-24 -right-8 h-64 w-64 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#558244]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Meta row */}
          <div className="mb-10 flex flex-wrap items-center gap-3 sm:mb-14">
            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
              <CalendarDays size={13} />
              4 November 2026
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
              <MapPin size={13} />
              LASU Epe Campus, Lagos
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-white/50">
                <span className="h-px w-8 bg-white/40" />
                Speakers & Voices
              </p>

              <h1 className="text-[clamp(3rem,8.5vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.06em]">
                Voices
                <br />
                <span className="text-white/35">that move.</span>
              </h1>
            </div>

            <div className="lg:pb-4">
              <p className="max-w-md text-base leading-7 text-white/60 sm:text-lg">
                Meet the founders, innovators, leaders and creatives coming
                together to share ideas, challenge perspectives and shape what
                comes next at EAS 2026.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">
                    {speakers.length}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Speakers
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">
                    {sections.length}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Programme blocks
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">
                    1
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Day together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPEAKER SECTIONS ================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-24 lg:space-y-32">
          {sections.map((section) => {
            const Icon = section.icon;
            const sectionSpeakers = speakers.filter(
              (s) => s.category === section.category
            );

            const isKeynote = section.category === "Keynote Speaker";
            const count = sectionSpeakers.length;

            // Grid class per section size
            const gridClass = isKeynote
              ? "grid"
              : count === 1
              ? "grid sm:grid-cols-2"
              : count === 2
              ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              : count === 3
              ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

            return (
              <motion.section
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {/* Section header */}
                <div className="mb-10 grid gap-6 border-t border-black/10 pt-8 lg:grid-cols-[auto_1fr_auto] lg:items-end lg:gap-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102414] text-white">
                      <Icon size={18} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
                      {section.id}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#558244]">
                      {section.subtitle}
                    </p>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-black/50 lg:justify-self-end lg:text-right">
                    {section.description}
                  </p>
                </div>

                {/* Keynote — full-width feature */}
                {isKeynote && (
                  <article className="group grid overflow-hidden rounded-[2rem] bg-[#111] text-white lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative min-h-[420px] overflow-hidden rounded-t-[2rem] sm:min-h-[520px] lg:min-h-[600px] lg:rounded-l-[2rem] lg:rounded-tr-none">
                      <Image
                        src={sectionSpeakers[0].image}
                        alt={sectionSpeakers[0].name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/30" />

                      <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                        <Mic size={12} className="text-[#9cc58b]" />
                        Keynote
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
                          Session
                        </p>
                        <h3 className="mt-4 max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                          {sectionSpeakers[0].session}
                        </h3>
                        <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                          {sectionSpeakers[0].bio}
                        </p>
                      </div>

                      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9cc58b]">
                            {sectionSpeakers[0].role}
                          </p>
                          <p className="mt-2 text-xl font-medium tracking-tight">
                            {sectionSpeakers[0].name}
                          </p>
                          <p className="mt-1 text-sm text-white/45">
                            {sectionSpeakers[0].organization}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedSpeaker(sectionSpeakers[0])}
                          className="group/btn flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
                        >
                          View profile
                          <ArrowUpRight
                            size={15}
                            className="transition group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                )}

                {/* Panel / Fireside / Guests — adaptive grid */}
                {!isKeynote && (
                  <div className={gridClass}>
                    {sectionSpeakers.map((speaker, index) => (
                      <motion.article
                        key={speaker.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.08,
                        }}
                        className="group flex flex-col"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-black">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                              {speaker.role}
                            </p>
                            <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                              {speaker.name}
                            </h3>
                            <p className="mt-1 text-xs text-white/55">
                              {speaker.organization}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col pt-5">
                          <h4 className="text-base font-medium leading-snug">
                            {speaker.session}
                          </h4>

                          <button
                            onClick={() => setSelectedSpeaker(speaker)}
                            className="mt-4 flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-black/60 transition hover:text-[#558244]"
                          >
                            View profile
                            <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                )}
              </motion.section>
            );
          })}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="relative overflow-hidden bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#558244]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-8 bg-white/40" />
            Be in the room
          </p>

          <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-3xl text-[clamp(2.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.055em]">
              Come for the
              <br />
              <span className="text-white/35">conversation.</span>
            </h2>

            <div className="lg:justify-self-end">
              <p className="mb-7 max-w-sm text-sm leading-7 text-white/55">
                Seats are limited and curated to keep farmer and enterprise
                voices visible alongside institutional actors.
              </p>
              <button className="group flex w-fit items-center gap-3 rounded-full bg-[#558244] px-6 py-4 text-sm font-semibold transition hover:bg-[#659951]">
                Register for the summit
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpeaker(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-[2rem] bg-[#f7f7f3]"
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-black/80"
                aria-label="Close speaker details"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative aspect-[4/5] min-h-[320px] overflow-hidden rounded-t-[2rem] bg-black md:aspect-auto md:min-h-[500px] md:rounded-l-[2rem] md:rounded-tr-none">
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                </div>

                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#558244]">
                    {selectedSpeaker.category}
                  </p>

                  <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                    {selectedSpeaker.name}
                  </h2>

                  <p className="mt-3 text-sm text-black/50">
                    {selectedSpeaker.role}
                    <span className="mx-2 text-black/20">•</span>
                    {selectedSpeaker.organization}
                  </p>

                  <div className="my-8 h-px bg-black/10" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                    Session
                  </p>

                  <p className="mt-3 text-xl font-medium leading-tight tracking-[-0.02em]">
                    {selectedSpeaker.session}
                  </p>

                  <p className="mt-8 text-sm leading-7 text-black/60">
                    {selectedSpeaker.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}