import { BriefcaseBusiness, GraduationCap } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    id: "ojt",
    icon: BriefcaseBusiness,
    role: "Full-Stack Developer",
    org: "Bureau of the Treasury (PH)",
    division: "Database Administration Division",
    type: "On-the-Job Training",
    period: "Aug 2025 – Feb 2026",
    context:
      "6-month government internship building internal web tools for a live production environment serving the Database Administration Division.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
  },
  {
    id: "thesis",
    icon: GraduationCap,
    role: "Lead Developer & Researcher",
    org: "Lyceum of the Philippines Manila",
    division: "B.S. Computer Science",
    type: "Undergraduate Thesis",
    period: "S.Y. 2025–2026",
    context:
      "Academic capstone project developing a Philippine labor law research platform with a custom rule-based ML engine for case analysis.",
    tech: ["React", "Python", "Flask", "Machine Learning"],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-[70px] border-t-4 border-b-4 border-border bg-background py-16 lg:py-[100px] px-5"
    >
      <div className="mx-auto w-[1300px] max-w-full">
        <h2 className="sm:mb-20 mb-14 text-center 2xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-heading">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-background border-2 shadow-shadow flex flex-col justify-between sm:p-8 p-4 gap-6 border-border rounded-base bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px]"
            >
              {/* Role + org */}
              <Alert>
                <exp.icon />
                <AlertTitle>{exp.role}</AlertTitle>
                <AlertDescription>
                  {exp.org} · {exp.division}
                </AlertDescription>
              </Alert>

              {/* Single context sentence */}
              <p className="text-sm font-base leading-relaxed">
                {exp.context}
              </p>

              {/* Bottom row — type badge + tech + period */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <Button size="sm" variant="default">{exp.type}</Button>
                  {exp.tech.map((t) => (
                    <Button key={t} size="sm" variant="noShadow">{t}</Button>
                  ))}
                </div>
                <span className="text-xs font-base opacity-50 shrink-0">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
