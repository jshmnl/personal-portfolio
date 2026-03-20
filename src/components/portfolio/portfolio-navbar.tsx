"use client"

import { Check, Menu, Palette, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

import { ThemeSwitcher } from "@/components/app/theme-switcher"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

const colorSwatches = [
  {
    name: "Blue",
    hex: "#5294FF",
    main: "oklch(67.47% 0.1726 259.49)",
    darkMain: "oklch(67.47% 0.1726 259.49)",
    bg: "oklch(93.46% 0.0305 255.11)",
    darkBg: "oklch(29.23% 0.0626 270.49)",
  },
  {
    name: "Green",
    hex: "#05E17A",
    main: "oklch(79.76% 0.2044 153.08)",
    darkMain: "oklch(73.03% 0.1865 153.23)",
    bg: "oklch(96.47% 0.0401 157.79)",
    darkBg: "oklch(22.45% 0.0316 158.41)",
  },
  {
    name: "Orange",
    hex: "#FF7A05",
    main: "oklch(72.27% 0.1894 50.19)",
    darkMain: "oklch(67.56% 0.1796 49.61)",
    bg: "oklch(95.38% 0.0357 72.89)",
    darkBg: "oklch(26.86% 0.0327 60.06)",
  },
  {
    name: "Violet",
    hex: "#A985FF",
    main: "oklch(70.28% 0.1753 295.36)",
    darkMain: "oklch(70.28% 0.1753 295.36)",
    bg: "oklch(93.88% 0.033 300.19)",
    darkBg: "oklch(30.14% 0.0826 296.5)",
  },
]

export default function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeColor, setActiveColor] = useState("Orange")

  useEffect(() => {
    const stored = localStorage.getItem("color")
    if (stored) {
      const obj = JSON.parse(stored)
      const match = colorSwatches.find((s) => s.main === obj.main)
      if (match) setActiveColor(match.name)
    }
  }, [])

  const applyTheme = (swatch: (typeof colorSwatches)[0]) => {
    const r = document.querySelector(":root") as HTMLElement
    const isDark = document.documentElement.classList.contains("dark")

    r.style.setProperty("--main", isDark ? swatch.darkMain : swatch.main)
    r.style.setProperty("--background", isDark ? swatch.darkBg : swatch.bg)
    r.style.setProperty("--light-main", swatch.main)
    r.style.setProperty("--dark-main", swatch.darkMain)
    r.style.setProperty("--light-background", swatch.bg)
    r.style.setProperty("--dark-background", swatch.darkBg)

    localStorage.setItem(
      "color",
      JSON.stringify({
        main: swatch.main,
        darkMain: swatch.darkMain,
        bg: swatch.bg,
        darkBg: swatch.darkBg,
      }),
    )

    setActiveColor(swatch.name)
  }

  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b-4 border-border bg-secondary-background">
      <div className="flex h-[70px] items-center px-5">
        <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">

          {/* Left: logo + links */}
          <div className="flex items-center xl:gap-10 gap-6">
            <Link
              className="text-[22px] size-8 rounded-base flex bg-main text-main-foreground border-2 border-black items-center justify-center font-heading shrink-0"
              href="#home"
            >
              J
            </Link>

            <div className="items-center text-base font-base xl:gap-10 lg:flex gap-8 hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-all hover:text-main"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: theme dropdown + dark mode + hamburger */}
          <div className="flex items-center gap-3">

            {/* Theme dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="neutral" size="sm" className="gap-2 hidden lg:flex">
                  <Palette className="size-4" />
                  Theme
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {colorSwatches.map((swatch) => (
                  <DropdownMenuItem
                    key={swatch.name}
                    onClick={() => applyTheme(swatch)}
                    className="flex items-center gap-2.5 cursor-pointer"
                  >
                    <span
                      className="size-4 rounded-base border-2 border-border shrink-0"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="flex-1">{swatch.name}</span>
                    {activeColor === swatch.name && (
                      <Check className="size-3.5 shrink-0" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeSwitcher />

            <Button
              variant="neutral"
              size="icon"
              className="lg:hidden size-9 shadow-nav hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="size-5 stroke-foreground" />
              ) : (
                <Menu className="size-5 stroke-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t-4 border-border bg-secondary-background px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-base py-1 transition-all hover:text-main"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme picker in mobile menu */}
          <div className="flex items-center gap-2.5 pt-3 border-t-2 border-border/20 flex-wrap">
            <span className="text-xs font-base text-foreground/50 shrink-0">Theme:</span>
            {colorSwatches.map((swatch) => (
              <button
                key={swatch.name}
                title={swatch.name}
                onClick={() => applyTheme(swatch)}
                className={cn(
                  "size-5 rounded-base border-2 border-border transition-all duration-150",
                  activeColor === swatch.name
                    ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "shadow-none hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]",
                )}
                style={{ backgroundColor: swatch.hex }}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
