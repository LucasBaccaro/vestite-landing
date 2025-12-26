import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "Vestite - Tu Armario Digital con IA",
  description:
    "Descubrí tu estilo perfecto con inteligencia artificial. Organizá tu guardarropa, probate outfits virtualmente y recibí recomendaciones personalizadas. Unite a la lista de espera.",
  generator: "v0.app",
  keywords: [
    "moda",
    "armario digital",
    "IA",
    "outfits",
    "estilo personal",
    "vestimenta",
    "argentina",
    "app de moda",
    "fahsion tech"
  ],
  authors: [{ name: "Vestite Team" }],
  creator: "Vestite",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://vestite.app",
    title: "Vestite - Tu Armario Digital con IA",
    description: "La primera app argentina que te ayuda a organizar tu placard y crear outfits con IA. Unite a la beta.",
    siteName: "Vestite",
    images: [
      {
        url: "/og-image.png", // We should make sure this exists or user provides it
        width: 1200,
        height: 630,
        alt: "Vestite App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vestite - Tu Armario Digital con IA",
    description: "Organizá tu guardarropa y descubrí tu estilo con IA. Unite a la lista de espera.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://vestite.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
