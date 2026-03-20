import { Marquee } from "@devnomic/marquee"

import "@/styling/marquee.css"

import AboutSection from "@/components/portfolio/about-section"
import CertificationsSection from "@/components/portfolio/certifications-section"
import ContactSection from "@/components/portfolio/contact-section"
import ExperienceSection from "@/components/portfolio/experience-section"
import HeroSection from "@/components/portfolio/hero-section"
import ProjectsSection from "@/components/portfolio/projects-section"
import SkillsSection from "@/components/portfolio/skills-section"

// Stars — exactly matching the template's marquee arrangement
import Star8 from "@/components/stars/s8"
import Star11 from "@/components/stars/s11"
import Star16 from "@/components/stars/s16"
import Star22 from "@/components/stars/s22"
import Star26 from "@/components/stars/s26"
import Star29 from "@/components/stars/s29"
import Star32 from "@/components/stars/s32"
import Star37 from "@/components/stars/s37"

export default function Home() {
  return (
    <div className="text-foreground font-base">
      <HeroSection />

      {/* Top marquee — Python · Node.js · PostgreSQL · React Native */}
      <Marquee
        className="border-t-4 border-b-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
        direction="left"
        reverse
      >
        {Array.from({ length: 7 }).map((_, id) => (
          <div
            className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
            key={id}
          >
            <span>Python</span>
            <Star29 className="text-foreground" />
            <span>Node.js</span>
            <Star37 stroke="black" strokeWidth={6} color="var(--main)" />
            <span>PostgreSQL</span>
            <Star16 className="text-foreground" />
            <span>React Native</span>
            <Star8 color="var(--main)" stroke="black" strokeWidth={7} />
          </div>
        ))}
      </Marquee>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />

      {/* Bottom marquee — TypeScript · React · Laravel · Next.js */}
      <Marquee
        className="border-t-4 border-b-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
        direction="left"
      >
        {Array.from({ length: 7 }).map((_, id) => (
          <div
            className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
            key={id}
          >
            <span>TypeScript</span>
            <Star32 className="text-foreground" />
            <span>React</span>
            <Star22 stroke="black" strokeWidth={6} color="var(--main)" />
            <span>Laravel</span>
            <Star11 className="text-foreground" />
            <span>Next.js</span>
            <Star26 color="var(--main)" stroke="black" strokeWidth={7} />
          </div>
        ))}
      </Marquee>

      <ContactSection />

      <footer className="z-30 border-t-4 border-border bg-secondary-background px-5 py-5 text-center sm:text-base text-sm">
        © 2026 Joshua Manuel · Built with{" "}
        <span className="font-heading">Next.js</span> &amp;{" "}
        <span className="font-heading">Tailwind CSS</span>
      </footer>
    </div>
  )
}
