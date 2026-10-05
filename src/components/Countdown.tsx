"use client";

import { useEffect, useState } from "react";

const targetDate = new Date(
"2026-11-04T09:00:00+01:00"
).getTime();

function calculateTime() {
const difference = targetDate - Date.now();

if (difference <= 0) {
return {
days: 0,
hours: 0,
minutes: 0,
seconds: 0,
};
}

return {
days: Math.floor(
difference / (1000 * 60 * 60 * 24)
),
hours: Math.floor(
(difference / (1000 * 60 * 60)) % 24
),
minutes: Math.floor(
(difference / (1000 * 60)) % 60
),
seconds: Math.floor(
(difference / 1000) % 60
),
};
}

export default function Countdown() {
const [time, setTime] = useState(calculateTime());

useEffect(() => {
const timer = window.setInterval(() => {
setTime(calculateTime());
}, 1000);


return () => window.clearInterval(timer);


}, []);

const items = [
["Days", time.days],
["Hrs", time.hours],
["Min", time.minutes],
["Sec", time.seconds],
];

return ( <div className="grid grid-cols-4 gap-1.5">
{items.map(([label, value]) => ( <div
       key={label}
       className="rounded-lg bg-white/10 px-2 py-2 text-center"
     > <div className="text-lg font-bold leading-none sm:text-xl">
{String(value).padStart(2, "0")} </div>


      <div className="mt-1 text-[7px] font-bold uppercase tracking-wider text-white/40 sm:text-[8px]">
        {label}
      </div>
    </div>
  ))}
</div>


);
}
