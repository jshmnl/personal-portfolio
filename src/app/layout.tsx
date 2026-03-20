import "@/styling/globals.css"

import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import SetStylingPref from "@/components/app/set-styling-pref"
import ScrollToTop from "@/components/app/scroll-to-top"
import { ThemeProvider } from "@/components/app/theme-provider"
import PortfolioNavbar from "@/components/portfolio/portfolio-navbar"
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "Joshua Manuel — Full-Stack Developer",
  description:
    "Portfolio of Joshua Manuel, a Full-Stack Developer specializing in React, Next.js, Laravel, TypeScript, and more. B.S. Computer Science, Lyceum of the Philippines Manila.",
  keywords: [
    "Joshua Manuel",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Portfolio",
    "Philippines",
  ],
  authors: [{ name: "Joshua Manuel" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <PortfolioNavbar />
          {children}
          <SetStylingPref />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
