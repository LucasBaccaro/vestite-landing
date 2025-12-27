import { Sparkles, CloudSun, Camera, Shirt } from "lucide-react"

const features = [
  {
    icon: Shirt,
    title: "Armario Digital",
    description: "Fotografiá tus prendas y la IA las analiza automáticamente, categorizando y describiendo cada pieza.",
  },
  {
    icon: Sparkles,
    title: "Prueba Virtual",
    description: "Probate cualquier combinación de tu armario virtualmente con generación de imágenes fotorrealistas.",
  },
  {
    icon: Camera,
    title: "Asistente IA",
    description:
      "Contale a tu asistente personal qué ocasión tenés y recibí outfits perfectos de tu propio guardarropa.",
  },
  {
    icon: CloudSun,
    title: "Clima Integrado",
    description:
      "Recomendaciones inteligentes basadas en el clima actual de tu ubicación para que siempre estés cómodo.",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-[#FDFBF7]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Potenciado por Inteligencia Artificial</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnología de última generación para transformar cómo elegís tu ropa cada día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background border border-accent/50 shadow-lg transition-all"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors">
                <feature.icon className="h-6 w-6 text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
