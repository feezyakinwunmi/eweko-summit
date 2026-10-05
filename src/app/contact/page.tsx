import Link from "next/link";
import {
ArrowUpRight,
Mail,
MapPin,
MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
return (
<> <PageHero
     eyebrow="Contact EAS"
     title="Let's talk about the Summit."
     description="For sponsorship, exhibition, partnership, media, participation and other enquiries, connect with the Eweko Integrated Services team."
   />


  <section className="section-space">
    <div className="container-eas grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#558244]">
          Eweko Integrated Services Limited
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#102414] sm:text-5xl">
          Start a conversation.
        </h2>

        <p className="mt-6 text-base leading-8 text-[#667066]">
          Whether you are interested in sponsoring the Summit, exhibiting
          your solution, joining as a partner or participating in the
          programme, we would be glad to hear from you.
        </p>

        <div className="mt-10 space-y-5">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8efe3] text-[#558244]">
              <MapPin size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#102414]">
                Summit Venue
              </p>
              <p className="mt-1 text-sm leading-6 text-[#667066]">
                Olatunji Bello Auditorium
                <br />
                LASU Epe Campus
                <br />
                Epe, Lagos State
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8efe3] text-[#558244]">
              <Mail size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#102414]">
                Email
              </p>
              <p className="mt-1 text-sm text-[#667066]">
                Summit contact details will be published here.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8efe3] text-[#558244]">
              <MessageCircle size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#102414]">
                Enquiries
              </p>
              <p className="mt-1 text-sm text-[#667066]">
                Sponsorship · Exhibition · Partnership · Media
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] bg-[#102414] p-7 text-white sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9cc58b]">
          Quick Links
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            ["Register for EAS", "/register"],
            ["Sponsorship", "/sponsorship"],
            ["Exhibition", "/exhibition"],
            ["Agenda", "/agenda"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between rounded-xl border border-white/10 p-5 transition hover:bg-white/5"
            >
              <span className="text-sm font-semibold">
                {label}
              </span>

              <ArrowUpRight
                size={17}
                className="text-white/40 transition group-hover:text-white"
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm leading-7 text-white/50">
            EAS is designed as an open, multi-stakeholder platform.
            Participation or sponsorship does not imply endorsement of any
            single company, technology, policy position or commercial
            solution.
          </p>
        </div>
      </div>
    </div>
  </section>
</>


);
}
