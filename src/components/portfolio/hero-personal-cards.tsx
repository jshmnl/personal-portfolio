import { Marquee } from "@devnomic/marquee"
import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Database,
  Smartphone,
  BadgeCheck,
  CircleDot,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// ── Cards ──────────────────────────────────────────────────────────────────

const RoleCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-main text-main-foreground p-4 shadow-shadow">
    <div className="flex items-center gap-2 mb-3">
      <BriefcaseBusiness className="size-4 shrink-0" />
      <span className="font-heading text-sm">On-the-Job Training</span>
    </div>
    <p className="font-heading text-base leading-snug mb-1">Full-Stack Developer</p>
    <p className="font-base text-xs opacity-80">Bureau of the Treasury (PH)</p>
    <p className="font-base text-xs opacity-60 mt-0.5">Aug 2025 – Feb 2026</p>
  </div>
)

const TechStackCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
    <div className="flex items-center gap-2 mb-3">
      <Code2 className="size-4 shrink-0" />
      <span className="font-heading text-sm">Tech Stack</span>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {["React", "Next.js", "Laravel", "TypeScript", "Python", "PHP", "Tailwind CSS", "Node.js"].map((t) => (
        <Badge key={t} variant="neutral" className="text-xs">{t}</Badge>
      ))}
    </div>
  </div>
)

const EducationCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-main text-main-foreground p-4 shadow-shadow">
    <div className="flex items-center gap-2 mb-3">
      <GraduationCap className="size-4 shrink-0" />
      <span className="font-heading text-sm">Education</span>
    </div>
    <p className="font-heading text-base leading-snug">B.S. Computer Science</p>
    <p className="font-base text-xs opacity-80 mt-0.5 mb-3">Lyceum of the Philippines Manila</p>
    <span className="inline-block rounded-base border-2 border-border bg-secondary-background text-foreground px-2.5 py-1 text-xs font-heading shadow-shadow">
      5× Dean&apos;s Lister
    </span>
  </div>
)

const ProcurementCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
    <Badge className="mb-3 text-xs">Professional Project</Badge>
    <p className="font-heading text-sm leading-snug mb-2">Procurement Monitoring System</p>
    <p className="font-base text-xs opacity-60 leading-relaxed">
      Government-grade web app for the Bureau of the Treasury (PH) — MSSQL schema, RBAC, and compliance audit trail.
    </p>
    <div className="flex flex-wrap gap-1.5 mt-3">
      {["Laravel", "PHP", "MSSQL"].map((t) => (
        <Badge key={t} variant="neutral" className="text-xs">{t}</Badge>
      ))}
    </div>
  </div>
)

const ThesisCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-main text-main-foreground p-4 shadow-shadow">
    <div className="rounded-base border-2 border-border bg-secondary-background text-foreground px-2.5 py-1 text-xs font-heading w-fit mb-3">
      Undergraduate Thesis
    </div>
    <p className="font-heading text-sm leading-snug mb-2">Philippine Labor Law Outcome Predictor</p>
    <p className="font-base text-xs opacity-80 leading-relaxed">
      Rule-based engine with weighted legal signals and a confidence scoring system for non-expert case assessment.
    </p>
    <div className="flex flex-wrap gap-1.5 mt-3">
      {["React", "Python", "Flask"].map((t) => (
        <span key={t} className="rounded-base border-2 border-border bg-secondary-background text-foreground px-2 py-0.5 text-xs font-base">
          {t}
        </span>
      ))}
    </div>
  </div>
)

const DatabaseCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
    <div className="flex items-center gap-2 mb-3">
      <Database className="size-4 shrink-0" />
      <span className="font-heading text-sm">Databases</span>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {["MSSQL", "PostgreSQL", "MySQL", "Supabase", "Firebase"].map((t) => (
        <Badge key={t} variant="neutral" className="text-xs">{t}</Badge>
      ))}
    </div>
  </div>
)

const CertificationsCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-main text-main-foreground p-4 shadow-shadow">
    <div className="flex items-center gap-2 mb-3">
      <BadgeCheck className="size-4 shrink-0" />
      <span className="font-heading text-sm">Certifications</span>
    </div>
    <div className="flex flex-col gap-1.5">
      {[
        "IC3 GS5 Computing Fundamentals",
        "TESDA NC III — Visual Graphic Design",
        "TOEIC — English Proficiency",
        "AI Amplified Scholar · InnoVision 2026",
      ].map((c) => (
        <p key={c} className="font-base text-xs opacity-80 leading-snug">· {c}</p>
      ))}
    </div>
  </div>
)

const MobileCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
    <div className="flex items-center gap-2 mb-3">
      <Smartphone className="size-4 shrink-0" />
      <span className="font-heading text-sm">Mobile Development</span>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {["React Native", "Expo", "Android Studio", ".NET MAUI"].map((t) => (
        <Badge key={t} variant="neutral" className="text-xs">{t}</Badge>
      ))}
    </div>
  </div>
)

const AvailabilityCard = () => (
  <div className="w-full rounded-base border-2 border-border bg-main text-main-foreground p-4 shadow-shadow">
    <div className="flex items-center gap-2">
      <CircleDot className="size-4 shrink-0" />
      <span className="font-heading text-sm">Status</span>
    </div>
    <p className="font-heading text-base mt-3">Open to Opportunities</p>
    <p className="font-base text-xs opacity-70 mt-1">
      Fresh graduate · Full-stack · Philippines
    </p>
  </div>
)

// ── Column component ───────────────────────────────────────────────────────

export default function HeroPersonalCards({
  className,
  reverse,
}: {
  className?: string
  reverse?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-full w-[300px] absolute top-[70px] pointer-events-none overflow-y-hidden",
        className,
      )}
    >
      <Marquee
        direction="up"
        reverse={reverse}
        className="flex flex-col w-full max-w-full h-full overflow-hidden pr-3 [&>*]:gap-[16px]"
      >
        <RoleCard />
        <TechStackCard />
        <EducationCard />
        <ProcurementCard />
        <ThesisCard />
        <DatabaseCard />
        <CertificationsCard />
        <MobileCard />
        <AvailabilityCard />
      </Marquee>
    </div>
  )
}
