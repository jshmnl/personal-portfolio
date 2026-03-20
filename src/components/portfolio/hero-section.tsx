"use client"

import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

import HeroComponents from "@/components/app/hero-components"
import Star9 from "@/components/stars/s9"
import Star14 from "@/components/stars/s14"
import Star20 from "@/components/stars/s20"

import TypingText from "@/components/portfolio/typing-text"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]"
    >
      {/* Side scrolling component cards */}
      <HeroComponents className="xl:-left-[130px] md:-left-[200px] lg:block hidden" />
      <HeroComponents
        className="xl:-right-[130px] md:-right-[200px] lg:block hidden"
        reverse
      />

      {/* Decorative stars on smaller screens where HeroComponents are hidden */}
      <Star20
        color="var(--main)"
        stroke="black"
        strokeWidth={3}
        size={250}
        className="absolute top-[120px] lg:hidden block -left-[125px] -z-10"
      />
      <Star14
        color="var(--main)"
        stroke="black"
        strokeWidth={3}
        size={250}
        className="absolute bottom-[120px] lg:hidden block -right-[125px] -z-10"
      />

      <div className="mx-auto w-[1300px] max-w-full">
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <h1 className="leading-normal 2xl:text-6xl xl:text-5xl md:text-5xl sm:text-[33px] text-2xl font-heading">
            Hi, I&apos;m{" "}
            <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 bg-main/50 rounded-base border-2 border-border/40 dark:border-border/70">
              Joshua Manuel
              <Star9
                className="absolute sm:block hidden md:-bottom-4 md:-right-5 -bottom-2.5 -right-2.5"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
              <Star9
                className="absolute sm:block hidden md:-top-4 md:-left-5 -top-2.5 -left-2.5"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
            </span>
          </h1>

          {/* Role — cycling typing animation */}
          <p className="min-h-[1.4em] w-full md:mt-[50px] md:mb-5 sm:mt-12 my-8 sm:mb-5 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl font-heading">
            <TypingText texts={["Full-Stack Developer", "Software Engineer"]} />
          </p>

          {/* Description — constrained to a comfortable reading width */}
          <p className="leading-relaxed max-w-[560px] md:mb-[52px] mb-8 md:text-lg sm:text-base text-sm font-base opacity-75">
            Full-stack engineer dedicated to delivering scalable web and mobile
            solutions. I transform complex business requirements into
            high-performance, production-ready applications.
          </p>

          {/* Degree / school / award badges */}
          <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
            <div className="rounded-base border-2 border-border bg-secondary-background px-3 py-1.5 text-sm font-base shadow-shadow">
              B.S. Computer Science
            </div>
            <div className="rounded-base border-2 border-border bg-secondary-background px-3 py-1.5 text-sm font-base shadow-shadow">
              Lyceum of the Philippines Manila
            </div>
            <div className="rounded-base border-2 border-border bg-main text-main-foreground px-3 py-1.5 text-sm font-heading shadow-shadow">
              5× Dean&apos;s Lister
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              className="flex items-center gap-2.5 w-max text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              href="#projects"
            >
              View Projects
              <ArrowUpRight className="md:size-[30px] size-5" />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 w-max text-foreground rounded-base border-2 border-border bg-secondary-background md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              View Resume
              <ExternalLink className="md:size-[30px] size-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
