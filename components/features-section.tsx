"use client"

import { Sparkles, CloudSun, Camera, Shirt } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Shirt,
    title: "Armario Digital",
    description: "Sacale fotos a tus prendas. La IA las recorta y categoriza para crear tu guardarropa virtual.",
  },
  {
    icon: Camera,
    title: "Asistente IA",
    description: "Pedile outfits a tu asistente personal. Ideal para citas, entrevistas o el día a día.",
  },
  {
    icon: CloudSun,
    title: "Clima Integrado",
    description: "Sugerencias basadas en el clima real. Nunca más pases frío o calor por elegir mal tu ropa.",
  },
  {
    icon: Sparkles,
    title: "Prueba Virtual",
    description: "Visualizá cómo te quedan los outfits con IA antes de ponértelos. Magia pura.",
  },
]

function FeatureItem({ feature, index }: { feature: typeof features[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "-20% 0px -20% 0px" }} // Highlight when in center 60% of screen
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-8 py-16 md:py-24 border-b border-white/5 last:border-0"
    >
      {/* Number / Icon Area */}
      <div className="flex-none">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl">
          <feature.icon className="h-10 w-10 text-white" />
          <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            {index + 1}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
          {feature.title}
        </h3>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="px-4 bg-black min-h-screen flex items-center justify-center py-20">
      <div className="mx-auto max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Potenciado por Inteligencia Artificial</h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Tecnología de última generación para transformar cómo elegís tu ropa cada día.
          </p>
        </div>

        <div className="flex flex-col">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="h-24" /> {/* Spacer at bottom */}
      </div>
    </section>
  )
}
