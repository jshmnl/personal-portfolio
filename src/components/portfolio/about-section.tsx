import { GraduationCap, Briefcase } from "lucide-react"
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">

          {/* ── Left: profile photo card ── */}
          <div className="lg:col-span-2">
            <div className="rounded-base border-2 border-border bg-background shadow-shadow overflow-hidden">
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
              <div className="p-5">
                <h3 className="font-heading text-xl mb-0.5">Joshua Manuel</h3>
                <p className="text-sm font-base opacity-60">
                  Full-Stack Developer · Software Engineer
                </p>
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
                <h4 className="font-heading text-base leading-none">Who I Am</h4>
              </div>
              <p className="text-sm font-base leading-relaxed">
                I&apos;m Joshua — a full-stack engineer who builds things that matter in the
                real world. I&apos;ve shipped a government procurement system for the Bureau
                of Treasury and a Philippine labor law research platform powered by a custom
                ML engine. I care about code that holds up under real pressure.
              </p>
            </div>

            {/* What I've Built */}
            <div className="rounded-base border-2 border-border bg-background p-5 shadow-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-9 rounded-base bg-main border-2 border-border flex items-center justify-center text-main-foreground shrink-0">
                  <Briefcase className="size-4" />
                </div>
                <h4 className="font-heading text-base">What I&apos;ve Built</h4>
              </div>
              <div className="flex flex-col gap-4 text-sm font-base leading-relaxed">
                <p>
                  During my internship at the Bureau of Treasury (Database Administration
                  Division), I built a procurement monitoring system used in a government
                  environment. I designed the MSSQL database schema, implemented
                  role-based access control to manage internal users securely, and
                  developed an audit trail system to track all data changes for compliance
                  and accountability. The system helped organize procurement records and
                  move parts of the workflow away from manual tracking.
                </p>
                <p>
                  For my thesis, I developed a Philippine labor law case research platform
                  aimed at making legal analysis more accessible. I built a rule-based
                  engine that evaluates cases using weighted legal factors and designed a
                  scoring system to estimate case relevance and strength. The platform
                  translates complex legal reasoning into a structured, easy-to-understand
                  assessment, allowing non-experts to explore and evaluate labor law cases
                  more effectively.
                </p>
              </div>
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

          </div>
        </div>
      </div>
    </section>
  )
}
