import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bakery.png"
          alt="Pagnotte di pane a lievitazione naturale appena sfornate su un tavolo di legno infarinato"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-24">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
          Micro forno artigianale
        </span>

        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
          Pane a lievitazione naturale, sfornato ogni mattina.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Lievito madre, farine macinate a pietra e lunghe fermentazioni. Poche
          pagnotte al giorno, cotte a legna e portate a casa vostra ancora tiepide.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:opacity-95"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Ordina su WhatsApp
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            Le sfornate di oggi
          </a>
        </div>
      </div>
    </section>
  )
}
