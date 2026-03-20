"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiCsharp,
  SiPython,
  SiKotlin,
  SiCplusplus,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAlpinedotjs,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiSupabase,
  SiFirebase,
  SiExpo,
  SiAndroidstudio,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiVisualstudiocode,
} from "react-icons/si"
import { DiJava } from "react-icons/di"
import { IconType } from "react-icons"

type Skill = {
  label: string
  icon: IconType
  color: string
}

const skillCategories: { id: string; label: string; skills: Skill[] }[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { label: "PHP", icon: SiPhp, color: "#777BB4" },
      { label: "C#", icon: SiCsharp, color: "#239120" },
      { label: "Python", icon: SiPython, color: "#3776AB" },
      { label: "Java", icon: DiJava, color: "#E76F00" },
      { label: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { label: "C/C++", icon: SiCplusplus, color: "#00599C" },
      { label: "VB.NET", icon: SiDotnet, color: "#512BD4" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { label: "HTML", icon: SiHtml5, color: "#E34F26" },
      { label: "CSS", icon: SiCss3, color: "#1572B6" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "Alpine.js", icon: SiAlpinedotjs, color: "#8BC0D0" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { label: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { label: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
      { label: ".NET Core", icon: SiDotnet, color: "#512BD4" },
      { label: ".NET Framework", icon: SiDotnet, color: "#512BD4" },
      { label: "Express.js", icon: SiExpress, color: "#000000" },
      { label: "Flask", icon: SiFlask, color: "#000000" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { label: "MySQL", icon: SiMysql, color: "#4479A1" },
      { label: "MSSQL", icon: SiMicrosoftsqlserver, color: "#CC2927" },
      { label: "SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },
      { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: [
      { label: "React Native", icon: SiReact, color: "#61DAFB" },
      { label: "Expo", icon: SiExpo, color: "#000020" },
      { label: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
      { label: ".NET MAUI", icon: SiDotnet, color: "#512BD4" },
    ],
  },
  {
    id: "design",
    label: "Design & Tools",
    skills: [
      { label: "Figma", icon: SiFigma, color: "#F24E1E" },
      { label: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { label: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
      { label: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
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

        {/* Category buttons */}
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

        {/* Skill cards with logos */}
        <div className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {activeCategory.skills.map(({ label, icon: Icon, color }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-base border-2 border-border bg-background px-4 py-3 shadow-shadow"
              >
                <Icon style={{ color }} className="shrink-0 text-2xl" />
                <span className="font-base text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
