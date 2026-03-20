import { Code2, Monitor, Paintbrush } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const certifications = [
  {
    icon: Code2,
    date: "May 2024",
    title: "IT Specialist — Java",
    issuer: "Certiport / Pearson VUE",
  },
  {
    icon: Paintbrush,
    date: "December 2023",
    title: "Visual Graphic Design",
    subtitle: "National Certificate III",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
  },
  {
    icon: Monitor,
    date: "January 2023",
    title: "IC3 GS5 — Computing Fundamentals",
    issuer: "Certiport / IC3",
  },
]

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="scroll-mt-[70px] bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] py-16 lg:py-[100px] px-5"
    >
      <div className="mx-auto w-[1300px] max-w-full">
        <h2 className="sm:mb-20 mb-14 text-center 2xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-heading">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="size-11 rounded-base bg-main border-2 border-border flex items-center justify-center text-main-foreground mb-4 shadow-shadow">
                  <cert.icon className="size-5" />
                </div>
                <Badge className="w-fit mb-3">{cert.date}</Badge>
                <CardTitle className="text-base font-heading leading-snug">
                  {cert.title}
                </CardTitle>
                {cert.subtitle && (
                  <p className="text-xs font-base mt-0.5 text-foreground/70">
                    {cert.subtitle}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm font-base text-foreground/70 leading-snug">
                  {cert.issuer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
