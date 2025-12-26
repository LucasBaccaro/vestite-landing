"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2 } from "lucide-react"

interface WaitlistFormProps {
    className?: string
    inputClassName?: string
    buttonClassName?: string
    variant?: "default" | "hero"
}

export function WaitlistForm({
    className = "",
    inputClassName = "",
    buttonClassName = "",
    variant = "default"
}: WaitlistFormProps) {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus("loading")

        try {
            const response = await fetch("/api/join-waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            if (!response.ok) throw new Error("Failed to join waitlist")

            setStatus("success")
            setEmail("")
        } catch (error) {
            console.error(error)
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className={`flex items-center justify-center gap-3 p-4 rounded-xl ${variant === 'hero' ? 'bg-green-50 text-green-700' : 'bg-primary-foreground/10'}`}>
                <CheckCircle2 className={`h-6 w-6 ${variant === 'hero' ? 'text-green-600' : 'text-accent'}`} />
                <span className="text-lg font-medium">¡Genial! Te avisaremos cuando lancemos.</span>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
            <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClassName}
            />
            <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className={buttonClassName}
            >
                {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : "Unirme"}
            </Button>
            {status === "error" && <p className="text-red-500 text-sm mt-2">Algo salió mal. Intenta de nuevo.</p>}
        </form>
    )
}
