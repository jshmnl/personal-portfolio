import { GraduationCap } from "lucide-react"
import Image from "next/image"

import Star14 from "@/components/stars/s14"
import Star20 from "@/components/stars/s20"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[70px] inset-0 flex relative overflow-hidden w-full px-5 flex-col items-center justify-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] z-0 py-16 lg:py-[100px]"
    >
      <Star20
        color="var(--main)"
        stroke="black"
        strokeWidth={3}
        size={250}
        className="absolute top-[120px] lg:block hidden -left-[125px] -z-10"
      />
      <Star14
        color="var(--main)"
        stroke="black"
        strokeWidth={3}
        size={250}
        className="absolute bottom-[120px] lg:block hidden -right-[125px] -z-10"
      />

      <div className="mx-auto w-[1300px] max-w-full">
        <h2 className="sm:mb-20 mb-14 text-center 2xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-heading">
          About Me
        </h2>

        {/* 5-column grid: photo takes 2, info cards take 3 — mirrors the template's 3-col review layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">

          {/* ── Left: profile photo card ── */}
          <div className="lg:col-span-2">
            <div className="rounded-base border-2 border-border bg-background shadow-shadow overflow-hidden">

              {/* Square portrait photo */}
              <div className="w-full aspect-square overflow-hidden border-b-2 border-border">
                <Image
                  src="/profile.jpg"
                  alt="Joshua Manuel"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Identity footer */}
              <div className="p-5">
                <h3 className="font-heading text-xl mb-0.5">Joshua Manuel</h3>
                <p className="text-sm font-base opacity-60 mb-4">
                  Full-Stack Developer · Software Engineer
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-base border-2 border-border bg-main text-main-foreground px-2.5 py-1 text-xs font-heading shadow-shadow">
                    5× Dean&apos;s Lister
                  </span>
                  <span className="rounded-base border-2 border-border bg-background px-2.5 py-1 text-xs font-base shadow-shadow">
                    B.S. Computer Science
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: stacked info cards ── */}
          <div className="lg:col-span-3 flex flex-col gap-5 lg:gap-6">

            {/* Who I Am */}
            <div className="rounded-base border-2 border-border bg-background p-5 shadow-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-9 rounded-base bg-main border-2 border-border flex items-center justify-center text-main-foreground font-heading text-sm shrink-0">
                  J
                </div>
                <div>
                  <h4 className="font-heading text-base leading-none">
                    Who I Am
                  </h4>
                  <p className="text-xs font-base opacity-50 mt-0.5">
                    Lyceum of the Philippines Manila
                  </p>
                </div>
              </div>
              <p className="text-sm font-base leading-relaxed">
                Full-stack engineer dedicated to delivering scalable web and
                mobile solutions. I transform complex business requirements into
                high-performance, production-ready applications — from designing
                clean APIs to shipping pixel-perfect frontends.
              </p>
            </div>

            {/* Education */}
            <div className="rounded-base border-2 border-border bg-background p-5 shadow-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-9 rounded-base bg-main border-2 border-border flex items-center justify-center text-main-foreground shrink-0">
                  <GraduationCap className="size-4" />
                </div>
                <h4 className="font-heading text-base">Education</h4>
              </div>
              <p className="font-heading text-sm">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-xs font-base opacity-60 mt-0.5 mb-3">
                Lyceum of the Philippines Manila
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded-base border-2 border-border bg-main text-main-foreground px-2.5 py-1 text-xs font-heading shadow-shadow">
                  5× Dean&apos;s Lister
                </span>
                <span className="text-xs font-base opacity-50">
                  Consistent Academic Excellence
                </span>
              </div>
            </div>

            {/* At a Glance */}
            <div className="rounded-base border-2 border-border bg-background p-5 shadow-shadow">
              <h4 className="font-heading text-base mb-5">At a Glance</h4>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-x-6 gap-y-5">
                {[
                  { stat: "9+", label: "Languages" },
                  { stat: "10+", label: "Frameworks" },
                  { stat: "3", label: "Certifications" },
                  { stat: "2", label: "Major Projects" },
                  { stat: "5×", label: "Dean's List" },
                  { stat: "6 mo", label: "OJT Experience" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <p className="font-heading 2xl:text-2xl text-xl leading-none">
                      {stat}
                    </p>
                    <p className="text-xs font-base opacity-50 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
