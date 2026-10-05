import { agenda } from "@/data/summit";

export default function AgendaTimeline() {
return ( <div className="space-y-0">
{agenda.map((item, index) => (
<div
key={`${item.time}-${item.title}`}
className="relative grid gap-5 border-b border-black/8 py-6 sm:grid-cols-[150px_1fr]"
> <div> <p className="text-sm font-bold text-[#558244]">
{item.time} </p> <p className="mt-1 text-xs text-[#a0a6a0]">
{item.duration} </p> </div>


      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#558244]">
          {item.type}
        </p>

        <h3 className="text-lg font-bold text-[#102414]">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#667066]">
          {item.description}
        </p>

        <p className="mt-3 text-xs text-[#667066]">
          <span className="font-bold text-[#102414]">Lead:</span>{" "}
          {item.lead}
        </p>
      </div>
    </div>
  ))}
</div>


);
}
