import { Users, Monitor, Globe, BookOpen, Paintbrush, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const certifications = [
  {
    icon: Users,
    date: "October 2022",
    title: "Emerge: Ways to Cope with the ever-changing Technology in the Future",
    issuer: "Junior Philippine Computer Society",
  },
  {
    icon: Monitor,
    date: "January 2023",
    title: "IC3 GS5 Computing Fundamentals",
    subtitle: "Office 2016",
    issuer: "IC3 Digital Literacy Certification",
  },
  {
    icon: Globe,
    date: "December 2023",
    title: "Certificate in English Proficiency",
    issuer: "Test of English for International Communication",
  },
  {
    icon: BookOpen,
    date: "April 2024",
    title: "Behind Blockchain, Digital Currency, Cloud Gaming, Data Analytics",
    issuer: "Lyceum Computer Society",
  },
  {
    icon: Paintbrush,
    date: "December 2024",
    title: "National Certificate III in Visual Graphic Design",
    issuer: "TESDA National Assessment",
  },
  {
    icon: Sparkles,
    date: "February 2026",
    title: "AI Amplified Scholar Certificate",
    issuer: "Philippine Coding Camp · InnoVision 2026 Campus Series",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
