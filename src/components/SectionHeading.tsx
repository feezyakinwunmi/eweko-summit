interface SectionHeadingProps {
eyebrow?: string;
title: string;
description?: string;
align?: "left" | "center";
}

export default function SectionHeading({
eyebrow,
title,
description,
align = "left",
}: SectionHeadingProps) {
return (
<div
className={
align === "center"
? "mx-auto max-w-3xl text-center"
: "max-w-3xl"
}
>
{eyebrow && ( <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#558244]">
{eyebrow} </p>
)}


  <h2 className="display-heading text-balance text-4xl font-semibold text-[#102414] sm:text-5xl md:text-6xl">
    {title}
  </h2>

  {description && (
    <p className="mt-6 text-base leading-7 text-[#667066] sm:text-lg sm:leading-8">
      {description}
    </p>
  )}
</div>


);
}
