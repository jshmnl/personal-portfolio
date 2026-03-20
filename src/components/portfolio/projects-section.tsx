import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    type: "Professional Project",
    org: "Bureau of the Treasury",
    title: "Procurement Monitoring System",
    description:
      "A full-stack web application built for the Bureau of the Treasury to streamline and monitor government procurement processes. The system provides real-time tracking, reporting, and end-to-end management of procurement activities, replacing manual workflows with a centralized digital platform.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Full-Stack"],
  },
  {
    type: "Undergraduate Thesis",
    org: "Lyceum of the Philippines Manila",
    title: "Philippine Labor Law Outcome Predictor",
    description:
      "A full-stack React web application that predicts outcomes of Philippine labor law cases using machine learning. Trained NLP classification models on a curated legal case dataset to provide data-driven insights, helping users understand probable case resolutions under Philippine labor law.",
    tags: ["React", "Python", "Flask", "Machine Learning", "NLP", "Full-Stack"],
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-[70px] inset-0 flex relative overflow-hidden w-full px-5 flex-col items-center justify-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] z-0 py-16 lg:py-[100px]"
    >
      <div className="mx-auto w-[1300px] max-w-full">
        <h2 className="sm:mb-20 mb-14 text-center 2xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-heading">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-3">{project.type}</Badge>
                <CardTitle className="text-xl font-heading leading-snug">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm font-base mt-1">
                  {project.org}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm font-base leading-relaxed">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2 border-t-2 border-border pt-4 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="neutral" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
