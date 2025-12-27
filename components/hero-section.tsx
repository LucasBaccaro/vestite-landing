"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useEffect } from "react"
import { WaitlistForm } from "@/components/waitlist-form"


const appScreens = [
  { src: "/images/app-chat.png", alt: "Vestite Asistente IA" },
  { src: "/images/app-home.png", alt: "Vestite Home Screen" },
  { src: "/images/app-studio.png", alt: "Vestite AI Studio" },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % appScreens.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden px-4 pt-4 pb-16 md:pt-6 md:pb-24 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 md:mb-16">
          <span className="text-2xl font-semibold tracking-tight">Vestite</span>
          <Badge variant="secondary" className="hidden sm:flex gap-1.5 px-3 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Beta próximamente
          </Badge>
        </header>

        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

          <Badge variant="secondary" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Disponible pronto para iOS y Android
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Tu armario digital
            <br />
            <span className="text-muted-foreground">potenciado con IA</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Organizá tu guardarropa, probate outfits virtualmente y recibí recomendaciones personalizadas según el clima
            y la ocasión. Todo con inteligencia artificial.
          </p>

          <div className="mt-8 flex justify-center">
            <WaitlistForm
              className="w-full max-w-md"
              variant="hero"
              inputClassName="h-12 bg-background border-accent text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary shadow-sm"
              buttonClassName="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-md focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Unite +1000 personas esperando el lanzamiento
          </p>
        </div>

        <div className="md:hidden flex flex-col items-center">
          <div className="relative w-64 rounded-[2.5rem] border-8 border-black bg-card overflow-hidden">
            <Image
              src={appScreens[activeIndex].src || "/placeholder.svg"}
              alt={appScreens[activeIndex].alt}
              width={390}
              height={844}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {appScreens.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-accent" : "w-2 bg-primary/20"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: same as before with shadows */}
        <div className="hidden md:flex relative items-center justify-center gap-4 md:gap-8">
          <div className="relative -rotate-6 transform transition-transform hover:rotate-0 hover:scale-105 duration-500">
            <div className="relative w-48 md:w-64 lg:w-72 rounded-[2.5rem] border-8 border-black bg-card shadow-2xl overflow-hidden">
              <Image
                src="/images/app-chat.png"
                alt="Vestite Asistente IA"
                width={390}
                height={844}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 transform transition-transform hover:scale-105 duration-500">
            <div className="relative w-56 md:w-72 lg:w-80 rounded-[2.5rem] border-8 border-black bg-card shadow-2xl overflow-hidden">
              <Image
                src="/images/app-home.png"
                alt="Vestite Home Screen"
                width={390}
                height={844}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="relative rotate-6 transform transition-transform hover:rotate-0 hover:scale-105 duration-500">
            <div className="relative w-48 md:w-64 lg:w-72 rounded-[2.5rem] border-8 border-black bg-card shadow-2xl overflow-hidden">
              <Image
                src="/images/app-studio.png"
                alt="Vestite AI Studio"
                width={390}
                height={844}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
