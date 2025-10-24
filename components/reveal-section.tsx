"use client"

import type React from "react"
import { useReveal } from "@/hooks/use-reveal"

interface RevealSectionProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  className?: string
  as?: React.ElementType
}

export function RevealSection({
  children,
  direction = "left",
  className = "",
  as: Component = "div",
}: RevealSectionProps) {
  const ref = useReveal()

  return (
    <Component ref={ref} className={`reveal ${className}`} data-direction={direction}>
      {children}
    </Component>
  )
}
