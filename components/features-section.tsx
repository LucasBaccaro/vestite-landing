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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col sm:flex-row items-start gap-6 p-4 md:p-6"
    >
      {/* Number / Icon Area */}
      <div className="flex-none">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl">
          <feature.icon className="h-8 w-8 text-white" />
          <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
            {index + 1}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left">
        <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-2">
          {feature.title}
        </h3>
        <p className="text-sm md:text-base text-white/70 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="px-4 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Potenciado por Inteligencia Artificial</h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Tecnología de última generación para transformar cómo elegís tu ropa cada día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>


      </div>
    </section>
  )
}
