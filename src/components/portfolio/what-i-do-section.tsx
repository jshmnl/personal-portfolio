import { Code2, Smartphone, Database, Brain } from "lucide-react"

const features = [
  {
    icon: Code2,
    heading: "Full-Stack Web",
    description:
      "I build production-ready web applications end-to-end — from database schema and server-side logic to responsive, pixel-perfect frontends using React, Next.js, Laravel, and Node.js.",
  },
  {
    icon: Smartphone,
    heading: "Mobile Development",
    description:
      "I develop cross-platform mobile apps using React Native and Expo, delivering clean, native-like experiences on Android with shared codebases.",
  },
  {
    icon: Database,
    heading: "Database Design",
    description:
      "I design and implement relational database schemas with a focus on data integrity, performance, and security — including role-based access control and audit trail systems.",
  },
  {
    icon: Brain,
    heading: "Systems & Logic",
    description:
      "I build rule-based engines and structured logic systems — including a weighted legal scoring platform that translates complex domain knowledge into accessible, data-driven assessments.",
  },
]

export default function WhatIDoSection() {
  return (
    <section className="border-b-4 border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {features.map((feature, i) => {
          const isMain = i === 1 || i === 2
          const Icon = feature.icon

          return (
            <div
              key={feature.heading}
              className={[
                "p-8 lg:p-12",
                isMain
                  ? "bg-main text-main-foreground"
                  : "bg-secondary-background text-foreground",
                // right border on left-column cells (sm+)
                i === 0 || i === 2 ? "sm:border-r-4 border-border" : "",
                // bottom border on top-row cells and all mobile cells except last
                i < 2 ? "border-b-4 border-border" : "",
                i === 2 ? "border-b-4 sm:border-b-0 border-border" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Icon
                className="mb-6 lg:size-20 size-14"
                strokeWidth={1.5}
              />
              <h3 className="font-heading lg:text-3xl text-2xl mb-3">
                {feature.heading}
              </h3>
              <p className="font-base text-base leading-relaxed opacity-80">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
