import Link from "next/link";
import {
ArrowUpRight,
BriefcaseBusiness,
Building2,
Landmark,
Sprout,
Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const audiences = [
{
icon: Sprout,
title: "Farmers & Producers",
text: "Bring your production realities, challenges, opportunities and experiences to the conversation.",
},
{
icon: BriefcaseBusiness,
title: "Agribusinesses",
text: "Connect with buyers, investors, technology providers, farmers and potential partners.",
},
{
icon: Landmark,
title: "Finance & Investment",
text: "Explore opportunities across production, working capital, logistics, processing and infrastructure.",
},
{
icon: Building2,
title: "Government & Institutions",
text: "Contribute to practical policy, infrastructure and institutional solutions.",
},
{
icon: Users,
title: "Technology & Research",
text: "Demonstrate solutions and contribute evidence to the food-system conversation.",
},
];

export default function RegisterPage() {
return (
<> <PageHero
     eyebrow="Attend EAS 2026"
     title="Be in the room where food-system solutions are shaped."
     description="EAS 2026 brings together farmers, enterprises, markets, finance, technology, policy and research for one practical day of dialogue and action."
   />


  <section className="section-space">
    <div className="container-eas">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#558244]">
          Registration
        </p>

        <h2 className="display-heading mt-4 text-4xl font-semibold text-[#102414] sm:text-5xl">
          Reserve your place at EAS 2026.
        </h2>

        <p className="mt-6 text-base leading-8 text-[#667066]">
          Physical participation is expected to include approximately
          250–300 participants, with additional virtual participation.
          Registration details will be managed through the official Eweko
          registration channel.
        </p>

        <Link
          href="https://forms.gle/WiLHN4KP8P5V2G1Q7"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#558244] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#466e38]"
        >
          Register now
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {audiences.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="card-hover rounded-[1.5rem] border border-black/8 p-7"
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

  <section className="bg-[#f5f3ea] py-20 md:py-28">
    <div className="container-eas grid gap-10 md:grid-cols-3">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#558244]">
          Date
        </p>
        <p className="mt-3 text-2xl font-bold text-[#102414]">
          4 November 2026
        </p>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#558244]">
          Venue
        </p>
        <p className="mt-3 text-2xl font-bold text-[#102414]">
          Olatunji Bello Auditorium
        </p>
        <p className="mt-1 text-sm text-[#667066]">
          LASU Epe Campus, Epe, Lagos
        </p>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#558244]">
          Format
        </p>
        <p className="mt-3 text-2xl font-bold text-[#102414]">
          Hybrid
        </p>
        <p className="mt-1 text-sm text-[#667066]">
          Physical + virtual participation
        </p>
      </div>
    </div>
  </section>
</>


);
}
