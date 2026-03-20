import { Download, Mail, Phone } from "lucide-react"

import Star14 from "@/components/stars/s14"
import Star20 from "@/components/stars/s20"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-[70px] inset-0 w-full relative flex flex-col items-center justify-center bg-main bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] px-5 lg:py-[200px] md:py-[150px] sm:py-[100px] py-[100px]"
    >
      <Star20
        color="var(--background)"
        stroke="black"
        strokeWidth={2}
        size={200}
        className="absolute top-[80px] lg:block hidden -left-[100px] -z-10 opacity-30"
      />
      <Star14
        color="var(--background)"
        stroke="black"
        strokeWidth={2}
        size={200}
        className="absolute bottom-[80px] lg:block hidden -right-[100px] -z-10 opacity-30"
      />

      <h2 className="text-center font-heading not-prose 2xl:text-5xl xl:text-5xl md:text-4xl sm:text-3xl text-[22px] text-main-foreground mb-4">
        Get in Touch
      </h2>
      <p className="text-main-foreground font-base text-center mb-14 sm:text-lg text-base opacity-80">
        Feel free to reach out — I&apos;m always open to new opportunities.
      </p>

      <div className="flex flex-col items-center gap-5 w-full max-w-md">
        <a
          href="mailto:joshuamanuel052204@gmail.com"
          className="flex items-center gap-3 w-full text-foreground rounded-base border-2 border-border bg-background dark:bg-secondary-background px-6 py-4 text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
        >
          <Mail className="size-5 shrink-0" />
          <span className="font-base">joshuamanuel052204@gmail.com</span>
        </a>

        <a
          href="tel:09456525799"
          className="flex items-center gap-3 w-full text-foreground rounded-base border-2 border-border bg-background dark:bg-secondary-background px-6 py-4 text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
        >
          <Phone className="size-5 shrink-0" />
          <span className="font-base">09456525799</span>
        </a>

        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center gap-2.5 w-full text-foreground rounded-base border-2 border-border bg-background dark:bg-secondary-background px-6 md:py-4 py-3 md:text-xl text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none font-heading"
        >
          Download Resume
          <Download className="md:size-6 size-5" />
        </a>
      </div>
    </section>
  )
}
