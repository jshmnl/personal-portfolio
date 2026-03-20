"use client"

import { useEffect, useRef, useState } from "react"

const TYPING_SPEED = 70   // ms per character while typing
const DELETE_SPEED = 35   // ms per character while deleting (faster)
const PAUSE_TYPED = 2200  // ms to hold the fully-typed text before deleting
const PAUSE_DELETED = 450 // ms gap before the next word starts

export default function TypingText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting" | "gap">(
    "typing",
  )
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    clearTimeout(timer.current)
    const current = texts[textIndex]

    if (phase === "typing") {
      if (displayed.length < current.length) {
        // Type next character
        timer.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          TYPING_SPEED,
        )
      } else {
        // Fully typed — hold before deleting
        timer.current = setTimeout(() => setPhase("deleting"), PAUSE_TYPED)
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        // Delete last character
        timer.current = setTimeout(
          () => setDisplayed((s) => s.slice(0, -1)),
          DELETE_SPEED,
        )
      } else {
        // Fully cleared — gap before next word
        timer.current = setTimeout(() => {
          setTextIndex((i) => (i + 1) % texts.length)
          setPhase("typing")
        }, PAUSE_DELETED)
      }
    }

    return () => clearTimeout(timer.current)
  }, [displayed, textIndex, phase, texts])

  const showCursor = phase === "typing" || phase === "deleting"

  return (
    <span>
      {displayed}
      <span
        aria-hidden="true"
        className={`inline-block w-[3px] h-[0.85em] bg-foreground ml-1 align-middle ${
          showCursor ? "animate-pulse" : "opacity-0"
        }`}
      />
    </span>
  )
}
