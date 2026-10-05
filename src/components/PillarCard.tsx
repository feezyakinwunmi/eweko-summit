import { ArrowUpRight } from "lucide-react";

interface PillarCardProps {
number: string;
title: string;
description: string;
}

export default function PillarCard({
number,
title,
description,
}: PillarCardProps) {
return ( <div className="group relative overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"> <div className="flex items-start justify-between"> <span className="text-sm font-bold text-[#558244]">
{number} </span>


    <ArrowUpRight
      size={19}
      className="text-black/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#558244]"
    />
  </div>

  <h3 className="mt-8 text-xl font-bold leading-snug text-[#102414]">
    {title}
  </h3>

  <p className="mt-4 text-sm leading-7 text-[#667066]">
    {description}
  </p>
</div>


);
}
