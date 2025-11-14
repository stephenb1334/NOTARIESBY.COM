"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

type HeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  ctaPrimary?: { href: string; label: string }
  ctaSecondary?: { href: string; label: string }
}

export function Hero({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="bg-gray-50 py-10 lg:py-14 border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        {eyebrow && <p className="text-sm font-medium text-primary mb-2">{eyebrow}</p>}
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-700 mt-3 max-w-2xl">{subtitle}</p>}
        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {ctaPrimary && (
              <Link href={ctaPrimary.href}>
                <Button size="lg" className="min-w-[180px]">
                  {ctaPrimary.label}
                </Button>
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href}>
                <Button size="lg" variant="outline" className="min-w-[180px] bg-transparent">
                  {ctaSecondary.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
