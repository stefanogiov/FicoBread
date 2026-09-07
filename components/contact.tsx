"use client"

import { useState } from "react"
import { MapPin, Mail, MessageCircle, Check } from "lucide-react"
import { site, whatsappLink } from "@/lib/site"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "")
    const message = String(data.get("message") ?? "")
    const composed = `Ciao, sono ${name}. ${message}`.trim()
    setSent(true)
    window.open(whatsappLink(composed), "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-secondary/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contatti e dove siamo
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Passa a trovarci o scrivici
          </h2>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title={`Mappa: ${site.address.street}, ${site.address.city}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.378792376667!2d12.88469467591255!3d41.83421317124654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f81e9014de823%3A0x8abd0232ddbb4361!2sFico%20Bread%20-%20Storie%20di%20pane%2C%20pizza%20e%20lievitati!5e1!3m2!1sit!2sit!4v1788773753963!5m2!1sit!2sit"
                className="aspect-[16/10] w-full grayscale-[0.2]"
                loading="lazy"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Indirizzo
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {site.address.street}
                  <br />
                  {site.address.city}
                </p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
              >
                <MessageCircle className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-foreground">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Ordina e prenota
                </p>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
              >
                <Mail className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-foreground">Email</p>
                <p className="mt-1 break-all text-sm leading-relaxed text-muted-foreground">
                  {site.email}
                </p>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nome
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Il tuo nome"
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@esempio.it"
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Vorrei ordinare due pagnotte per sabato..."
                className="min-h-32 flex-1 resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-95"
            >
              {sent ? (
                <>
                  <Check className="size-5" aria-hidden="true" />
                  Aperto in WhatsApp
                </>
              ) : (
                <>
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Invia su WhatsApp
                </>
              )}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Rispondiamo in giornata durante gli orari di apertura.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
