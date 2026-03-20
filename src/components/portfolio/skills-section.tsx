"use client"

import { useState, useEffect, useRef } from "react"
import type { CSSProperties } from "react"

import { Button } from "@/components/ui/button"
import {
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiSharp,
  SiPython,
  SiKotlin,
  SiCplusplus,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiAlpinedotjs,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiExpo,
  SiAndroidstudio,
  SiFigma,
  SiGit,
  SiGithub,
  SiUnity,
  SiPytorch,
} from "react-icons/si"
import { DiJava } from "react-icons/di"
import { FaDatabase, FaCode } from "react-icons/fa6"

// Adobe-style badge icons (dark bg + product abbreviation in brand color)
function AdobePs({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" className={className} style={style}>
      <rect width="24" height="24" rx="3" fill="#111111" />
      <text
        x="12" y="17"
        textAnchor="middle"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        fontSize="9.5"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >Ps</text>
    </svg>
  )
}

function AdobeAi({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" className={className} style={style}>
      <rect width="24" height="24" rx="3" fill="#111111" />
      <text
        x="12" y="17"
        textAnchor="middle"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        fontSize="9.5"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >Ai</text>
    </svg>
  )
}

type IconComponent = React.ComponentType<{ style?: CSSProperties; className?: string }>

type Skill = {
  label: string
  icon: IconComponent
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
      { label: "C#", icon: SiSharp, color: "#239120" },
      { label: "Python", icon: SiPython, color: "#3776AB" },
      { label: "Java", icon: DiJava as IconComponent, color: "#E76F00" },
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
      { label: "CSS", icon: SiCss, color: "#1572B6" },
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
      { label: "MSSQL", icon: FaDatabase as IconComponent, color: "#CC2927" },
      { label: "SQL Server", icon: FaDatabase as IconComponent, color: "#CC2927" },
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
      { label: "Photoshop", icon: AdobePs, color: "#31A8FF" },
      { label: "Illustrator", icon: AdobeAi, color: "#FF9A00" },
      { label: "VS Code", icon: FaCode as IconComponent, color: "#007ACC" },
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "GitHub", icon: SiGithub, color: "#181717" },
      { label: "Unity", icon: SiUnity, color: "#000000" },
      { label: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    ],
  },
]

export default function SkillsSection() {
  const [active, setActive] = useState("languages")
  const [visible, setVisible] = useState("languages")
  const [fading, setFading] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function switchCategory(id: string) {
    if (id === active) return
    setFading(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setActive(id)
      setVisible(id)
      setFading(false)
    }, 180)
  }

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }, [])

  const activeCategory = skillCategories.find((c) => c.id === visible)!

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
              onClick={() => switchCategory(cat.id)}
              className="h-full border-2 border-border md:text-xl sm:text-sm text-xs sm:px-4 px-2"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Skill cards with logos */}
        <div className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 transition-opacity duration-180 ease-in-out"
            style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(6px)" : "translateY(0)", transition: "opacity 180ms ease, transform 180ms ease" }}
          >
            {activeCategory.skills.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-base border-2 border-border bg-background px-4 py-3 shadow-shadow"
              >
                <Icon className="shrink-0 text-2xl" />
                <span className="font-base text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
