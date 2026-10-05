import {
ArrowUpRight,
Building2,
Plus,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const partnershipEmail =
"mailto:summit@ewekoaggregate.com?subject=EAS%202026%20Partnership%20Enquiry&body=Hello%20Eweko%20Team%2C%0A%0AI%20am%20interested%20in%20becoming%20a%20partner%20of%20the%20Eweko%20Agribusiness%20Summit%202026.%0A%0APlease%20send%20me%20more%20information%20about%20the%20available%20partnership%20opportunities%20and%20requirements.%0A%0AOrganisation%3A%20%0AName%3A%20%0APhone%3A%20%0APartnership%20category%3A%20%0A%0AThank%20you.";

const categories = [
{
title: "Strategic Partners",
description:
"Institutions contributing technical leadership, credibility, evidence and long-term support.",
},
{
title: "Sponsors",
description:
"Organisations providing financial or approved in-kind support for EAS 2026.",
},
{
title: "Knowledge Partners",
description:
"Research and evidence organisations supporting documentation, facilitation and learning.",
},
{
title: "Technology Partners",
description:
"Solution providers demonstrating practical technologies and infrastructure.",
},
{
title: "Market & Finance Partners",
description:
"Organisations creating pathways to markets, finance, investment and enterprise development.",
},
{
title: "Media & Community Partners",
description:
"Partners helping connect the Summit to relevant audiences and communities.",
},
];

export default function PartnersPage() {
return (
<>
<PageHero eyebrow="Partners & Sponsors" title="A growing ecosystem behind EAS 2026." description="This page will showcase the organisations helping make the inaugural Eweko Agribusiness Summit possible." />

  <section className="section-space">
    <div className="container-eas">
      <SectionHeading
        eyebrow="Our Ecosystem"
        title="Partners will be featured here."
        description="Confirmed sponsors and partners will be added as partnerships are formally confirmed."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="group rounded-[1.5rem] border border-dashed border-[#558244]/30 bg-[#f8faf6] p-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#558244] shadow-sm">
              <Building2 size={20} />
            </div>

            <h3 className="mt-7 text-xl font-bold text-[#102414]">
              {category.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#667066]">
              {category.description}
            </p>

            <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#558244]">
              Partner logo
              <Plus size={14} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] bg-[#102414] p-8 text-white sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9cc58b]">
              Your organisation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Become one of our partners.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
              Join a growing network working toward a more resilient,
              inclusive and commercially viable food system.
            </p>
          </div>

          <a
            href={partnershipEmail}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#558244] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#659951]"
          >
            Partnership opportunities
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </div>
  </section>
</>

);
}