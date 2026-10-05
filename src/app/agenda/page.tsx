import { CalendarDays, Clock3, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SummitCTA from "@/components/SummitCTA";
import { agenda } from "@/data/summit";

export default function AgendaPage() {
return (
<> <PageHero
     eyebrow="Programme"
     title="A day designed for conversation, connection and action."
     description="Explore the EAS 2026 programme, from opening remarks and keynote sessions to solution showcases, stakeholder dialogue and the final call to action."
   />


  <section className="section-space">
    <div className="container-eas">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-[#f5f3ea] p-6">
          <CalendarDays className="text-[#558244]" size={22} />
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#667066]">
            Date
          </p>
          <p className="mt-2 font-bold text-[#102414]">
            4 November 2026
          </p>
        </div>

        <div className="rounded-2xl bg-[#f5f3ea] p-6">
          <Clock3 className="text-[#558244]" size={22} />
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#667066]">
            Format
          </p>
          <p className="mt-2 font-bold text-[#102414]">
            One-day hybrid summit
          </p>
        </div>

        <div className="rounded-2xl bg-[#f5f3ea] p-6">
          <MapPin className="text-[#558244]" size={22} />
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#667066]">
            Venue
          </p>
          <p className="mt-2 font-bold text-[#102414]">
            LASU Epe Campus
          </p>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading
          eyebrow="4 November 2026"
          title="Summit Agenda"
          description="The programme combines keynote perspectives, practical panels, solution showcases, networking and a final action framework."
        />

        <div className="mt-12">
          {agenda.map((item, index) => (
            <div
              key={`${item.time}-${item.title}`}
              className="group grid gap-4 border-t border-black/10 py-7 md:grid-cols-[180px_1fr_auto] md:gap-8"
            >
              <div>
                <p className="text-sm font-bold text-[#558244]">
                  {item.time}
                </p>
                <p className="mt-1 text-xs text-[#9aa19a]">
                  {item.duration}
                </p>
              </div>

              <div>
                <div className="mb-2 inline-flex rounded-full bg-[#e8efe3] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#558244]">
                  {item.type}
                </div>

                <h3 className="text-xl font-bold text-[#102414] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#667066]">
                  {item.description}
                </p>

                <p className="mt-4 text-xs font-semibold text-[#102414]">
                  Lead:{" "}
                  <span className="font-normal text-[#667066]">
                    {item.lead}
                  </span>
                </p>
              </div>

              <div className="hidden text-right text-xs font-semibold text-[#c1c6c1] md:block">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <SummitCTA title="Want to be part of the programme?" />
</>


);
}
