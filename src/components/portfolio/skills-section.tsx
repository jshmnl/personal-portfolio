"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "C#",
      "Python",
      "Java",
      "Kotlin",
      "C/C++",
      "VB.NET",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Alpine.js"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Laravel",
      "Node.js",
      "ASP.NET Core",
      ".NET Core",
      ".NET Framework",
      "Express.js",
      "Flask",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MSSQL", "SQL Server", "Supabase", "Firebase"],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: ["React Native", "Expo", "Android Studio", ".NET MAUI"],
  },
  {
    id: "design",
    label: "Design & Tools",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Illustrator",
      "VS Code",
      "Responsive Design",
      "UI/UX Principles",
    ],
  },
]

export default function SkillsSection() {
  const [active, setActive] = useState("languages")
  const activeCategory = skillCategories.find((c) => c.id === active)!

  return (
    <section
      id="skills"
      className="scroll-mt-[70px] border-y-4 border-border bg-background py-16 lg:py-[100px] px-5"
    >
      <div className="mx-auto w-[1300px] max-w-full">
        <h2 className="text-center mb-14 sm:mb-20 2xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-heading">
          My Skills
        </h2>

        {/* Category buttons — exact style from StylingCustomizer "try" buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {skillCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={active === cat.id ? "default" : "neutral"}
              onClick={() => setActive(cat.id)}
              className="h-full border-2 border-border md:text-xl sm:text-sm text-xs sm:px-4 px-2"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Skill badges */}
        <div className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">
          <div className="flex flex-wrap gap-3">
            {activeCategory.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
