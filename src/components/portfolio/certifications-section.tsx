import { Users, Monitor, Globe, BookOpen, Paintbrush } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    icon: Users,
    org: "Junior Philippine Computer Society",
    type: "Seminar",
    name: "Emerge: Ways to Cope with the ever-changing Technology in the Future",
    date: "October 2022",
  },
  {
    icon: Monitor,
    org: "IC3 Digital Literacy Certification",
    type: "Technical Certification",
    name: "IC3 GS5 Computing Fundamentals (Office 2016)",
    date: "January 2023",
  },
  {
    icon: Globe,
    org: "Test of English for International Communication",
    type: "Language Certification",
    name: "Certificate in English Proficiency",
    date: "December 2023",
  },
  {
    icon: BookOpen,
    org: "Lyceum Computer Society",
    type: "Seminar",
    name: "Behind Blockchain, Digital Currency, Cloud Gaming, Data Analytics",
    date: "April 2024",
  },
  {
    icon: Paintbrush,
    org: "TESDA National Assessment",
    type: "Government Certification",
    name: "National Certificate III in Visual Graphic Design",
    date: "December 2024",
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
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-background border-2 border-border rounded-base shadow-shadow flex flex-col justify-between sm:p-8 p-4 gap-6 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px]"
            >
              {/* Issuer */}
              <Alert>
                <cert.icon />
                <AlertTitle>{cert.org}</AlertTitle>
                <AlertDescription>{cert.type}</AlertDescription>
              </Alert>

              {/* Certification / event name */}
              <div className="rounded-base border-2 border-border overflow-hidden shadow-shadow">
                <div className="bg-main text-main-foreground px-4 py-3 font-heading text-sm leading-snug">
                  {cert.name}
                </div>
              </div>

              {/* Footer — date */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Button size="sm" variant="default">{cert.type}</Button>
                <span className="text-xs font-base opacity-50 shrink-0">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
