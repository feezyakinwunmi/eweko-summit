import Link from "next/link";
import {
ArrowUpRight,
Building2,
Handshake,
Lightbulb,
Store,
Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const exhibitionEmail =
"mailto:summit@ewekoaggregate.com?subject=EAS%202026%20Exhibition%20Enquiry&body=Hello%20Eweko%20Team%2C%0A%0AI%20am%20interested%20in%20exhibiting%20at%20the%20Eweko%20Agribusiness%20Summit%202026.%0A%0APlease%20send%20me%20more%20information%20about%20the%20exhibition%20opportunities%2C%20requirements%2C%20and%20available%20packages.%0A%0AThank%20you.";


const opportunities = [
{
icon: Store,
title: "Showcase your solution",
text: "Put your product, service, technology or business model in front of relevant food-system stakeholders.",
},
{
icon: Users,
title: "Meet decision makers",
text: "Connect with farmers, agribusinesses, buyers, financiers, policymakers, researchers and potential partners.",
},
{
icon: Handshake,
title: "Build partnerships",
text: "Use the Summit as a platform to identify deployment, distribution, investment and collaboration opportunities.",
},
{
icon: Lightbulb,
title: "Demonstrate innovation",
text: "Participate in practical technology and innovation showcases designed around real food-system challenges.",
},
];

const exhibitors = [
"Agritech & digital agriculture",
"Cold-chain & storage",
"Logistics & transportation",
"Processing & packaging",
"Irrigation & mechanisation",
"Renewable energy",
"Financial technology",
"Market-linkage solutions",
"Food safety & quality",
"Agricultural inputs",
"Research & technology",
"Food enterprises",
];

export default function ExhibitionPage() {
return (
<>
<PageHero eyebrow="Exhibition" title="Put your solution where the food system meets." description="EAS 2026 provides a focused platform for relevant businesses, technology providers and solution builders to demonstrate practical products and services." />

  <section className="section-space">
    <div className="container-eas">
      <SectionHeading
        eyebrow="Why Exhibit"
        title="More than a booth."
        description="The EAS exhibition is designed around meaningful engagement rather than passive display."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {opportunities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="card-hover rounded-[1.5rem] border border-black/8 p-7 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efe3] text-[#558244]">
                <Icon size={21} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#102414]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#667066]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  <section className="bg-[#f5f3ea] py-20 md:py-28">
    <div className="container-eas grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-start">
      <div>
        <SectionHeading
          eyebrow="Who Should Exhibit"
          title="Bring practical solutions."
          description="Exhibition spaces are intended for products, services and technologies relevant to the Summit's food-system focus."
        />

        <a
          href={exhibitionEmail}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#102414] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#18351d]"
        >
          Enquire about exhibition
          <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {exhibitors.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-white p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8efe3] text-xs font-bold text-[#558244]">
              {index + 1}
            </span>

            <span className="text-sm font-medium text-[#102414]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="section-space">
    <div className="container-eas">
      <div className="overflow-hidden rounded-[2rem] bg-[#102414] p-8 text-white sm:p-12 md:p-16">
        <div className="max-w-3xl">
          <Building2 className="text-[#9cc58b]" size={30} />

          <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
            Exhibition can be part of your sponsorship package.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/55">
            Organisations interested in both visibility and exhibition
            opportunities can explore the sponsorship and partnership
            routes available for EAS 2026.
          </p>

          <Link
            href="/sponsorship"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#558244] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#659951]"
          >
            Explore sponsorship
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  </section>
</>

);
}