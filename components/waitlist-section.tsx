"use client"

import type React from "react"

import { AppleIcon, AndroidIcon } from "@/components/platform-icons"
import { WaitlistForm } from "@/components/waitlist-form"

export function WaitlistSection() {

  return (
    <section className="px-4 py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <AppleIcon className="h-8 w-8" />
          <AndroidIcon className="h-8 w-8" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Sumate a la lista de espera</h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Sé de los primeros en probar Vestite cuando lancemos la beta. Disponible para iOS y Android.
        </p>

        <WaitlistForm
          className="max-w-md mx-auto"
          inputClassName="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-accent"
          buttonClassName="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
        />

        <p className="mt-6 text-sm text-primary-foreground/60">
          Sin spam. Solo te avisaremos cuando esté lista la beta.
        </p>
      </div>
    </section>
  )
}
