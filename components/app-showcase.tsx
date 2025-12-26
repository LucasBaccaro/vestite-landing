import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function AppShowcase() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Asistente IA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Conversá con tu estilista personal</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Contale qué evento tenés, qué estilo buscás o simplemente pedile inspiración. El asistente conoce todo tu
              guardarropa y te arma combinaciones perfectas.
            </p>
            <ul className="space-y-3">
              {[
                "Recomendaciones basadas en tu estilo",
                "Combinaciones con prendas que ya tenés",
                "Sugerencias según la ocasión y clima",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Phone */}
          <div className="flex justify-center">
            <div className="relative w-64 md:w-72 rounded-[2.5rem] border-8 border-primary/10 bg-card shadow-2xl overflow-hidden">
              <Image
                src="/images/simulator-20screenshot-20-20iphone-2016e-20-202025-12-15-20at-2014.png"
                alt="Vestite AI Assistant"
                width={390}
                height={844}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
