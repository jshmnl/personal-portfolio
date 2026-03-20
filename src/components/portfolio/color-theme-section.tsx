"use client"

import { CheckCircle2Icon } from "lucide-react"
import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const themes = [
  {
    name: "blue",
    main: "oklch(67.47% 0.1726 259.49)",
    darkMain: "oklch(67.47% 0.1726 259.49)",
    bg: "oklch(93.46% 0.0305 255.11)",
    darkBg: "oklch(29.23% 0.0626 270.49)",
    radius: "5",
    shadowX: "4",
    shadowY: "4",
    previewMain: "bg-[#5294FF] dark:bg-[#5294FF]",
    previewBg: "bg-[#DCEBFE] dark:bg-[#20294B]",
    rounded: "rounded-[5px]!",
    boxShadow: "4px 4px 0 0 rgba(0,0,0,1)",
  },
  {
    name: "green",
    main: "oklch(79.76% 0.2044 153.08)",
    darkMain: "oklch(73.03% 0.1865 153.23)",
    bg: "oklch(96.47% 0.0401 157.79)",
    darkBg: "oklch(22.45% 0.0316 158.41)",
    radius: "15",
    shadowX: "0",
    shadowY: "4",
    previewMain: "bg-[#05E17A] dark:bg-[#1EFA94]",
    previewBg: "bg-[#DEFCE9] dark:bg-[#0E2016]",
    rounded: "rounded-[15px]!",
    boxShadow: "0 4px 0 0 rgba(0,0,0,1)",
  },
  {
    name: "orange",
    main: "oklch(72.27% 0.1894 50.19)",
    darkMain: "oklch(67.56% 0.1796 49.61)",
    bg: "oklch(95.38% 0.0357 72.89)",
    darkBg: "oklch(26.86% 0.0327 60.06)",
    radius: "10",
    shadowX: "-4",
    shadowY: "-4",
    previewMain: "bg-[#FF7A05] dark:bg-[#FF871F]",
    previewBg: "bg-[#FFEDD6] dark:bg-[#322215]",
    rounded: "rounded-[10px]!",
    boxShadow: "-4px -4px 0 0 rgba(0,0,0,1)",
  },
  {
    name: "violet",
    main: "oklch(70.28% 0.1753 295.36)",
    darkMain: "oklch(70.28% 0.1753 295.36)",
    bg: "oklch(93.88% 0.033 300.19)",
    darkBg: "oklch(30.14% 0.0826 296.5)",
    radius: "0",
    shadowX: "4",
    shadowY: "-4",
    previewMain: "bg-[#A985FF] dark:bg-[#A985FF]",
    previewBg: "bg-[#EEE6FE] dark:bg-[#332352]",
    rounded: "rounded-none!",
    boxShadow: "4px -4px 0 0 rgba(0,0,0,1)",
  },
]

export default function ColorThemeSection() {
  const [active, setActive] = useState(themes[0])

  const applyTheme = (theme: (typeof themes)[0]) => {
    const r = document.querySelector(":root") as HTMLElement
    const isDark = document.documentElement.classList.contains("dark")

    r.style.setProperty("--main", isDark ? theme.darkMain : theme.main)
    r.style.setProperty("--background", isDark ? theme.darkBg : theme.bg)
    r.style.setProperty("--light-main", theme.main)
    r.style.setProperty("--dark-main", theme.darkMain)
    r.style.setProperty("--light-background", theme.bg)
    r.style.setProperty("--dark-background", theme.darkBg)
    r.style.setProperty("--border-radius", theme.radius + "px")
    r.style.setProperty("--box-shadow-x", theme.shadowX + "px")
    r.style.setProperty("--box-shadow-y", theme.shadowY + "px")
    r.style.setProperty(
      "--reverse-box-shadow-x",
      -parseInt(theme.shadowX) + "px",
    )
    r.style.setProperty(
      "--reverse-box-shadow-y",
      -parseInt(theme.shadowY) + "px",
    )

    // Persist via the same localStorage keys SetStylingPref reads
    localStorage.setItem(
      "color",
      JSON.stringify({
        main: theme.main,
        darkMain: theme.darkMain,
        bg: theme.bg,
        darkBg: theme.darkBg,
      }),
    )
    localStorage.setItem("borderRadius", theme.radius)
    localStorage.setItem("boxShadow", `${theme.shadowX},${theme.shadowY}`)

    setActive(theme)
  }

  return (
    <section
      id="colors"
      className="scroll-mt-[70px] border-b-4 border-border bg-background py-16 lg:py-[100px]"
    >
      <h2 className="mb-5 px-5 text-center 2xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-heading">
        Try Theme Colors
      </h2>
      <p className="text-center px-5 xl:text-xl md:text-lg sm:text-base text-sm">
        Click a color to apply it across the entire portfolio instantly.
      </p>

      <div className="mx-auto max-w-[800px] w-full mt-20 sm:px-5 px-5">
        <div className="grid md:gap-10 gap-5">
          {/* Color buttons */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 sm:w-full w-2/3 mx-auto">
            {themes.map((theme) => (
              <Button
                key={theme.name}
                className={`h-full border-2 border-border md:text-xl sm:text-sm text-xs sm:px-4 px-2 ${theme.previewMain}`}
                onClick={() => applyTheme(theme)}
              >
                try {theme.name}
              </Button>
            ))}
          </div>

          {/* Preview panel */}
          <div
            className={`${active.previewBg} sm:border-x-2 border-x-0 border-y-2 sm:shadow-shadow shadow-none flex flex-col justify-between sm:p-8 p-4 border-border h-[350px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px]`}
          >
            <Alert
              style={{ boxShadow: active.boxShadow }}
              className={`${active.previewMain} ${active.rounded} transition-all duration-200`}
            >
              <CheckCircle2Icon />
              <AlertTitle>Theme applied successfully</AlertTitle>
              <AlertDescription>
                This is a preview of the selected color theme.
              </AlertDescription>
            </Alert>

            <Accordion type="single" defaultValue="item-1">
              <AccordionItem
                style={{ boxShadow: active.boxShadow }}
                className={`${active.rounded} transition-all duration-200`}
                value="item-1"
              >
                <AccordionTrigger className={`${active.previewMain}`}>
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex items-center justify-between gap-2">
              <Button
                style={{ boxShadow: active.boxShadow }}
                className={`${active.previewMain} ${active.rounded} transition-all duration-200 pointer-events-none`}
                size="sm"
              >
                Button
              </Button>
              <Button
                variant="noShadow"
                className={`${active.previewMain} ${active.rounded} transition-all duration-200`}
                size="sm"
              >
                Button
              </Button>
              <Badge
                className={`${active.previewMain} ${active.rounded} transition-all hidden md:block duration-200`}
              >
                Badge
              </Badge>
              <div className="hidden sm:block">
                <Select>
                  <SelectTrigger
                    className={`${active.previewMain} ${active.rounded} w-[180px] transition-all duration-200`}
                  >
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent
                    className={`${active.previewMain} ${active.rounded} transition-all duration-200`}
                  >
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem className={active.rounded} value="apple">
                        Apple
                      </SelectItem>
                      <SelectItem className={active.rounded} value="banana">
                        Banana
                      </SelectItem>
                      <SelectItem className={active.rounded} value="blueberry">
                        Blueberry
                      </SelectItem>
                      <SelectItem className={active.rounded} value="grapes">
                        Grapes
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
