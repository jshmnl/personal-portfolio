"use client"

import { useLayoutEffect } from "react"

const PORTFOLIO_THEME_VERSION = "orange-v1"

const ORANGE_DEFAULT = {
  main: "oklch(72.27% 0.1894 50.19)",
  darkMain: "oklch(67.56% 0.1796 49.61)",
  bg: "oklch(95.38% 0.0357 72.89)",
  darkBg: "oklch(26.86% 0.0327 60.06)",
  chart1: "oklch(72.27% 0.1894 50.19)",
  chart2: "oklch(67.28% 0.2147 24.22)",
  chart3: "oklch(86.03% 0.176 92.36)",
  chart4: "oklch(79.76% 0.2044 153.08)",
  chart5: "oklch(66.34% 0.1806 277.2)",
}

export default function SetStylingPref() {
  useLayoutEffect(() => {
    // Reset to orange default if this is a new version or first visit
    if (localStorage.getItem("portfolioThemeVersion") !== PORTFOLIO_THEME_VERSION) {
      localStorage.setItem("portfolioThemeVersion", PORTFOLIO_THEME_VERSION)
      localStorage.setItem("color", JSON.stringify(ORANGE_DEFAULT))
    }

    const colorObj = JSON.parse(localStorage.getItem("color") as string)
    const borderRadius = localStorage.getItem("borderRadius")
    const boxShadow = localStorage.getItem("boxShadow")?.split(",")
    const fontWeight = localStorage.getItem("fontWeight")?.split(",")

    const r = window.document.querySelector(":root") as HTMLElement
    const isDarkMode = document.documentElement.classList.contains("dark")

    if (colorObj) {
      if (isDarkMode) {
        r.style.setProperty("--background", colorObj.darkBg)
        r.style.setProperty("--main", colorObj.darkMain)
        r.style.setProperty("--chart-1", colorObj.darkChart1)
        r.style.setProperty("--chart-2", colorObj.darkChart2)
        r.style.setProperty("--chart-3", colorObj.darkChart3)
        r.style.setProperty("--chart-4", colorObj.darkChart4)
        r.style.setProperty("--chart-5", colorObj.darkChart5)
      } else {
        r.style.setProperty("--background", colorObj.bg)
        r.style.setProperty("--main", colorObj.main)
        r.style.setProperty("--chart-1", colorObj.chart1)
        r.style.setProperty("--chart-2", colorObj.chart2)
        r.style.setProperty("--chart-3", colorObj.chart3)
        r.style.setProperty("--chart-4", colorObj.chart4)
        r.style.setProperty("--chart-5", colorObj.chart5)
      }

      r.style.setProperty("--dark-background", colorObj.darkBg)
      r.style.setProperty("--dark-main", colorObj.darkMain)
      r.style.setProperty("--light-background", colorObj.bg)
      r.style.setProperty("--light-main", colorObj.main)
    }

    if (borderRadius) {
      r.style.setProperty("--border-radius", borderRadius + "px")
    }

    if (boxShadow) {
      r.style.setProperty("--box-shadow-x", boxShadow[0] + "px")
      r.style.setProperty("--box-shadow-y", boxShadow[1] + "px")
    }

    if (fontWeight) {
      r.style.setProperty("--heading-font-weight", fontWeight[0])
      r.style.setProperty("--base-font-weight", fontWeight[1])
    }
  }, [])

  return <></>
}
