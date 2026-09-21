"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

const CONSENT_KEY = "cookie_consent_maps"

type GoogleMapProps = {
  src: string
  title: string
}

export function GoogleMap({ src, title }: GoogleMapProps) {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.localStorage.getItem(CONSENT_KEY) === "true") {
      setConsent(true)
    }
  }, [])

  function handleAccept() {
    window.localStorage.setItem(CONSENT_KEY, "true")
    setConsent(true)
  }

  function handleRevoke() {
    window.localStorage.removeItem(CONSENT_KEY)
    setConsent(false)
  }

  if (!consent) {
    return (
      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 bg-secondary/60 px-6 text-center">
        <MapPin className="size-8 text-primary" aria-hidden="true" />
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Per visualizzare la mappa è necessario accettare i cookie di terze parti di Google Maps.
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95"
        >
          Accetta e mostra la mappa
        </button>
      </div>
    )
  }

  return (
    <div>
      <iframe
        title={title}
        src={src}
        className="aspect-[16/10] w-full grayscale-[0.2]"
        loading="lazy"
      />
      <p className="bg-card px-3 py-2.5 text-center text-xs text-muted-foreground">
        Hai accettato i cookie della mappa.{" "}
        <button
          type="button"
          onClick={handleRevoke}
          className="font-semibold text-primary underline underline-offset-4 hover:opacity-80"
        >
          Clicca qui per rimuovere il consenso
        </button>
      </p>
    </div>
  )
}
