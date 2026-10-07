import {
  ArrowUpRight,
  Check,
  Crown,
  Gem,
  Handshake,
  Landmark,
  Lightbulb,
  Medal,
  Sparkles,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const sponsorshipEmail =
  "mailto:summit@ewekoaggregate.com?subject=EAS%202026%20Sponsorship%20Enquiry&body=Hello%20Eweko%20Team%2C%0A%0AI%20am%20interested%20in%20partnering%20with%20the%20Eweko%20Agribusiness%20Summit%202026.%0A%0AI%20would%20like%20to%20receive%20the%20full%20sponsorship%20prospectus%20and%20available%20package%20details.%0A%0AOrganisation%3A%20%0AName%3A%20%0APhone%3A%20%0AInterested%20Package%3A%20%0A%0AThank%20you.";

const packages = [
  {
    tier: "01",
    name: "Platinum",
    subtitle: "Anchor Partner",
    price: "₦10,000,000",
    icon: Crown,
    description:
      "Ideal for major financial institutions, development programmes or projects, large agribusinesses, FMCGs, telecommunications companies and infrastructure organisations seeking high-level positioning.",
    featured: false,
    tone: "platinum",
    benefits: [
      "Top-tier brand visibility",
      "One confirmed high-level programme contribution, with an opportunity to nominate one additional representative subject to programme relevance and availability",
      "Premium exhibition space 36sqm (6m x 6m), customized with TV LED and elevated platform",
      "Consent-based introductions to relevant Summit participants and organizations",
      "8 VIP Passes",
      "Access to aggregated or anonymised Summit insights",
      "Recognition in the official post-event report",
    ],
  },
  {
    tier: "02",
    name: "Gold",
    subtitle: "Value Chain Partner",
    price: "₦6,000,000",
    icon: Gem,
    description:
      "Ideal for established input, machinery, processing, logistics, cold-chain, finance, insurance and market-access organisations.",
    featured: true,
    tone: "gold",
    benefits: [
      "Prominent second-tier branding",
      "Opportunity to nominate one technically relevant representative, subject to programme approval, and one curated solution spotlight",
      "Premium exhibition space 6m x 3m with priority positioning, customized with TV LED and elevated platform",
      "Facilitated B2B introductions based on mutual interest and participant consent",
      "5 VIP Passes",
      "Selected digital visibility and recognition in post-event communications",
    ],
  },
  {
    tier: "03",
    name: "Silver",
    subtitle: "Ecosystem Supporter",
    price: "₦3,000,000",
    icon: Medal,
    description:
      "Ideal for agritech companies, regional processors, service providers, off-takers and growing agribusinesses seeking focused visibility and participation.",
    featured: false,
    tone: "silver",
    benefits: [
      "Logo on selected Summit materials and website",
      "Verbal recognition during the opening programme and one digital sponsor profile or approved interview feature",
      "Standard exhibition space 3m x 3m",
      "Opportunity for selected introductions based on mutual interest and participant consent",
      "3 VIP Passes",
      "Post-event acknowledgement",
    ],
  },
];

const specialistPartners = [
  {
    icon: Landmark,
    title: "Strategic Partner",
    text: "For institutions providing strategic leadership, ecosystem support, credibility and long-term collaboration.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Partner",
    text: "For research, evidence and knowledge organisations supporting learning, documentation and the Summit roadmap.",
  },
  {
    icon: Sparkles,
    title: "Technology Partner",
    text: "For technology and solution providers demonstrating practical innovations for the food system.",
  },
  {
    icon: Handshake,
    title: "Market & Finance Partner",
    text: "For organisations creating pathways to markets, finance, investment and enterprise development.",
  },
];

const comparisonRows = [
  {
    title: "Premium visibility",
    platinum: true,
    gold: true,
    silver: false,
  },
  {
    title: "Programme recognition",
    platinum: true,
    gold: true,
    silver: true,
  },
  {
    title: "Exhibition opportunity",
    platinum: true,
    gold: true,
    silver: true,
  },
  {
    title: "Solution showcase",
    platinum: true,
    gold: true,
    silver: false,
  },
  {
    title: "Stakeholder engagement",
    platinum: true,
    gold: true,
    silver: true,
  },
  {
    title: "Post-Summit engagement",
    platinum: true,
    gold: true,
    silver: false,
  },
];

function PackageIcon({
  tone,
  icon: Icon,
}: {
  tone: "platinum" | "gold" | "silver";
  icon: typeof Crown;
}) {
  const styles = {
    platinum: "bg-white text-[#6d7470] border border-[#d9ddda]",
    gold: "bg-[#f5df9a] text-[#8a6818] border border-[#e2c66d]",
    silver: "bg-[#e5e8e7] text-[#68706d] border border-[#cbd0ce]",
  };

  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles[tone]}`}
    >
      <Icon size={24} strokeWidth={1.8} />
    </div>
  );
}

function Benefit({ children }: { children: string }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-[#59615b]">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8efe3] text-[#558244]">
        <Check size={12} strokeWidth={2.5} />
      </span>

      <span>{children}</span>
    </li>
  );
}

function createPackageEmail(packageName: string, price: string) {
  const subject = encodeURIComponent(
    `EAS 2026 ${packageName} Sponsorship Enquiry`
  );

  const body = encodeURIComponent(
    `Hello Eweko Team,

I am interested in the ${packageName} sponsorship package (${price}) for the Eweko Agribusiness Summit 2026.

Please send me the full package details, requirements and next steps.

Organisation:
Name:
Phone:

Thank you.`
  );

  return `mailto:summit@ewekoaggregate.com?subject=${subject}&body=${body}`;
}

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership & Sponsorship"
        title="Put your organisation at the centre of meaningful food-system action."
        description="EAS 2026 offers premium sponsorship and partnership opportunities for organisations committed to building a more resilient, inclusive and commercially viable food system."
      />

      <section className="section-space">
        <div className="container-eas">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#558244]">
              Sponsorship Opportunities
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#102414] sm:text-5xl">
              Choose your level of impact.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667066]">
              EAS 2026 brings together the people, businesses, institutions
              and technologies shaping the future of food production, markets
              and value retention.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className={`relative overflow-hidden rounded-[2rem] border ${
                    item.featured
                      ? "border-[#d4b44f] shadow-[0_25px_70px_rgba(110,85,20,0.12)]"
                      : "border-black/10"
                  } bg-white`}
                >
                  {item.featured && (
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-[#c9a63d]" />
                  )}

                  {item.featured && (
                    <div className="absolute right-6 top-6 rounded-full bg-[#f8e9b4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#755812]">
                      Recommended
                    </div>
                  )}

                  <div
                    className={`p-7 sm:p-8 ${
                      item.featured ? "bg-[#fffdf6]" : ""
                    }`}
                  >
                    <PackageIcon
                      tone={item.tone as "platinum" | "gold" | "silver"}
                      icon={Icon}
                    />

                    <div className="mt-7">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b938d]">
                        {item.tier} / {item.subtitle}
                      </p>

                      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#102414]">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-2xl font-semibold tracking-tight text-[#558244]">
                        {item.price}
                      </p>

                      <p className="mt-4 min-h-[96px] text-sm leading-7 text-[#667066]">
                        {item.description}
                      </p>
                    </div>

                    <div className="my-7 h-px bg-black/10" />

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#102414]">
                      Deliverables &amp; benefits
                    </p>

                    <ul className="mt-5 space-y-3.5">
                      {item.benefits.map((benefit) => (
                        <Benefit key={benefit}>{benefit}</Benefit>
                      ))}
                    </ul>

                    <a
                      href={createPackageEmail(item.name, item.price)}
                      className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                        item.featured
                          ? "bg-[#b99632] text-white hover:bg-[#a6862d]"
                          : "bg-[#102414] text-white hover:bg-[#18351d]"
                      }`}
                    >
                      Enquire about {item.name}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ea] py-20 md:py-28">
        <div className="container-eas">
          <SectionHeading
            eyebrow="Specialist Partnership Routes"
            title="Not every partnership needs a sponsorship tier."
            description="EAS 2026 also welcomes organisations whose strongest contribution comes through knowledge, technology, markets, finance or strategic collaboration."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {specialistPartners.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efe3] text-[#558244]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#102414]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#667066]">
                    {item.text}
                  </p>

                  <a
                    href={sponsorshipEmail}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#558244] transition hover:text-[#102414]"
                  >
                    Discuss this route
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-eas">
          <SectionHeading
            eyebrow="At A Glance"
            title="Compare the sponsorship levels."
            description="The final sponsorship prospectus will define the confirmed deliverables and commercial terms for each package."
          />

          <div className="mt-12 overflow-x-auto rounded-[1.75rem] border border-black/10 bg-white">
            <div className="min-w-[650px]">
              <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] bg-[#102414] text-white">
                <div className="p-5 text-sm font-semibold sm:p-6">
                  Partnership benefit
                </div>

                <div className="p-5 text-center text-sm font-semibold sm:p-6">
                  Platinum
                  <span className="mt-1 block text-[10px] font-normal text-white/50">
                    ₦10M
                  </span>
                </div>

                <div className="p-5 text-center text-sm font-semibold text-[#e7cc72] sm:p-6">
                  Gold
                  <span className="mt-1 block text-[10px] font-normal text-[#e7cc72]/60">
                    ₦6M
                  </span>
                </div>

                <div className="p-5 text-center text-sm font-semibold sm:p-6">
                  Silver
                  <span className="mt-1 block text-[10px] font-normal text-white/50">
                    ₦3M
                  </span>
                </div>
              </div>

              {comparisonRows.map((row, index) => (
                <div
                  key={row.title}
                  className={`grid grid-cols-[1.5fr_repeat(3,1fr)] ${
                    index % 2 === 0 ? "bg-[#fafbf9]" : "bg-white"
                  }`}
                >
                  <div className="p-5 text-sm font-medium text-[#102414] sm:p-6">
                    {row.title}
                  </div>

                  {[row.platinum, row.gold, row.silver].map(
                    (available, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center border-l border-black/5 p-5 sm:p-6"
                      >
                        {available ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8efe3] text-[#558244]">
                            <Check size={14} />
                          </span>
                        ) : (
                          <span className="text-sm text-black/20">—</span>
                        )}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-eas">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#102414] p-8 text-white sm:p-12 md:p-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#9cc58b]/10" />

            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#9cc58b]/10" />

            <div className="relative max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#558244]">
                <Star size={21} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9cc58b]">
                EAS 2026 Partnership
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Your brand can help move the food system forward.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                Request the full sponsorship prospectus to discuss available
                packages, partnership opportunities, exhibition options and
                the right route for your organisation.
              </p>

              <a
                href={sponsorshipEmail}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#558244] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#659951]"
              >
                Request sponsorship prospectus
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}