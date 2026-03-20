import { BriefcaseBusiness, GraduationCap } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    id: "ojt",
    icon: BriefcaseBusiness,
    role: "Full-Stack Developer",
    org: "Bureau of the Treasury",
    period: "Aug 2025 – Feb 2026",
    project: "Procurement Monitoring System",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    bullets: [
      "Built and maintained a full-stack web application using Laravel and PHP",
      "Designed and implemented database schemas and RESTful APIs",
      "Developed a responsive frontend UI with Tailwind CSS",
      "Collaborated with government stakeholders to gather and implement system requirements",
    ],
  },
  {
    id: "thesis",
    icon: GraduationCap,
    role: "Undergraduate Thesis",
    org: "Lyceum of the Philippines Manila",
    period: "S.Y. 2025–2026",
    project: "Philippine Labor Law Outcome Predictor",
    tech: ["React", "Python", "Flask", "Machine Learning"],
    bullets: [
      "Designed and trained classification models on labor law case data",
      "Built an interactive React frontend for case input and result visualization",
      "Developed a REST API to serve model predictions in real time",
      "Conducted data preprocessing, feature engineering, and model evaluation",
    ],
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
              className="bg-background border-x-2 border-y-2 shadow-shadow flex flex-col justify-between sm:p-8 p-4 gap-6 border-border rounded-base bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px]"
            >
              {/* Alert */}
              <Alert>
                <exp.icon />
                <AlertTitle>{exp.role}</AlertTitle>
                <AlertDescription>{exp.org}</AlertDescription>
              </Alert>

              {/* Static blue-header box with white body */}
              <div className="rounded-base border-2 border-border overflow-hidden shadow-shadow">
                <div className="bg-main text-main-foreground px-4 py-3 font-heading text-sm">
                  {exp.project}
                </div>
                <div className="bg-secondary-background px-4 py-3 flex flex-col gap-2">
                  {exp.bullets.map((bullet) => (
                    <p key={bullet} className="text-sm font-base">
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>

              {/* Bottom row — all tech as default buttons + period */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
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
