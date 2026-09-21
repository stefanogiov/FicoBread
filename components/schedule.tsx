import { Clock, Croissant, Calendar, Sparkles, MessageCircle, Phone } from "lucide-react"
import { site, whatsappLink } from "@/lib/site"

const hours = [
  { day: "Lunedì", time: "Chiuso", closed: true },
  { day: "Martedì – Venerdì", time: "08:30 – 13:30 · 15:30 – 18:30" },
  { day: "Sabato", time: "08:30 – 13:00" },
  { day: "Domenica", time: "Chiuso", closed: true },
]

const bakeTimes = [
  {
    time: "08:30",
    title: "Prima sfornata",
    what: "Pagnotte madre, cornetti e sfoglie del mattino",
  },
  {
    time: "11:00",
    title: "Seconda sfornata",
    what: "Focaccia calda, teglie e pizza",
  },
  {
    time: "15:00",
    title: "Pomeriggio",
    what: "Seconda infornata di pane fresco per la sera",
  },
]

const breadCalendar = [
  {
    day: "Martedì",
    title: "Pagnotte Classiche",
    badge: "Classici",
    isSpecial: false,
    breads: ["Rustico", "Semi-Integrale", "Multicereali e Semi"],
    description: "I grandi classici a lievito madre e lenta maturazione.",
  },
  {
    day: "Mercoledì",
    title: "Il Campagnolo (il pane della nonna)",
    badge: "Speciale",
    isSpecial: true,
    breads: ["Rustico", "Integrale 100%", "Campagnolo", "Multicereali e Semi"],
    description: "Fatto con patate lesse, farina tipo 1 e farro.",
  },
  {
    day: "Giovedì",
    title: "Pane Cafone",
    badge: "Speciale",
    isSpecial: true,
    breads: ["Rustico", "Integrale 100%", "Semola (Cafone)", "Multicereali e Semi"],
    description: "Fatto con semola di grano duro.",
  },
  {
    day: "Venerdì",
    title: "Cacao & Segale",
    badge: "Speciale",
    isSpecial: true,
    breads: ["Rustico", "Integrale 100%", "Cacao", "Segale", "Multicereali e Semi"],
    description: "Pani speciali al cacao e alla segale insieme ai nostri impasti classici.",
  },
  {
    day: "Sabato",
    title: "Weekend & Speciali",
    badge: "Weekend",
    isSpecial: true,
    breads: [
      "Rustico",
      "Integrale 100%",
      "Farro",
      "Cacao",
      "Multicereali e Semi",
      "Occasionalmente pani speciali",
    ],
    description: "Banco al completo con pani classici, farro, cacao e creazioni speciali.",
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Orari & Sfornate
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Quando siamo aperti e il nostro calendario del pane
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground">
          Ogni giorno sforniamo le nostre pagnotte classiche a lievito madre, con impasti speciali a rotazione durante la settimana.
        </p>
      </div>

      {/* CALENDARIO DEL PANE - In primo piano */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-card via-card to-card/60 p-6 shadow-sm md:p-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Calendar className="size-6" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Calendario settimanale del pane
                </h3>
                <span className="hidden items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary sm:inline-flex">
                  <Sparkles className="size-3" /> Specialità
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Scopri quali pani speciali trovi al banco giorno per giorno
              </p>
            </div>
          </div>

          <a
            href={whatsappLink("Ciao! Vorrei info e prenotare il pane speciale della settimana.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="size-3.5" />
            Prenota il tuo pane
          </a>
        </div>

        {/* Griglia dei 5 giorni */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {breadCalendar.map((item) => (
            <div
              key={item.day}
              className={`relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 ${
                item.isSpecial
                  ? "border-primary/40 bg-primary/[0.04] shadow-sm hover:border-primary hover:shadow-md"
                  : "border-border bg-background/60 hover:border-muted-foreground/30 hover:bg-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif text-lg font-bold text-foreground">
                    {item.day}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                      item.isSpecial
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="mt-4">
                  <h4
                    className={`font-serif text-base font-semibold leading-snug ${
                      item.isSpecial ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-border/70 pt-3">
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Al banco:
                </span>
                <ul className="mt-1.5 space-y-1">
                  {item.breads.map((bread) => (
                    <li
                      key={bread}
                      className={`text-xs ${
                        bread.includes("Cacao") || bread.includes("Campagnolo") || bread.includes("Semola") || bread.includes("Segale") || bread.includes("Farro") || bread.toLowerCase().includes("special")
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      • {bread}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Nota informativa a piè di calendario */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl bg-secondary/50 px-5 py-3.5 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            <strong className="text-foreground">Nota bene:</strong> I pani speciali escono in quantità limitata. Per non rischiare di non trovarli, <strong className="text-foreground">sono molto gradite le prenotazioni via telefono o WhatsApp</strong> (anche il giorno prima).
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:opacity-80"
            >
              <Phone className="size-3" /> Chiama: {site.phone}
            </a>
            <span className="hidden text-muted-foreground/40 sm:inline">•</span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:opacity-80"
            >
              <MessageCircle className="size-3" /> Scrivici su WhatsApp →
            </a>
          </div>
        </div>
      </div>

      {/* ORARI APERTURA E ORARI SFORNATE */}
      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {/* Orari di apertura */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <Clock className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Orari di apertura
              </h3>
              <p className="text-xs text-muted-foreground">Siamo aperti dal martedì al sabato</p>
            </div>
          </div>
          <ul className="mt-6 divide-y divide-border">
            {hours.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between gap-4 py-3.5"
              >
                <span className="font-medium text-foreground">{row.day}</span>
                <span
                  className={
                    row.closed
                      ? "rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
                      : "text-right text-sm font-medium text-muted-foreground"
                  }
                >
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Orari delle sfornate */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <Croissant className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Orari delle sfornate
              </h3>
              <p className="text-xs text-muted-foreground">I momenti migliori per trovare prodotti caldi</p>
            </div>
          </div>
          <ul className="mt-6 flex flex-col gap-4">
            {bakeTimes.map((row) => (
              <li key={row.time} className="flex items-center gap-4 rounded-xl border border-border/50 bg-background/40 p-3">
                <span className="flex min-w-16 justify-center rounded-lg bg-secondary px-3 py-2 font-serif text-lg font-semibold text-primary">
                  {row.time}
                </span>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                    {row.title}
                  </span>
                  <span className="text-xs text-muted-foreground">{row.what}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            I prodotti appena sfornati finiscono in fretta: vieni all&apos;orario indicato o prenota per il ritiro via telefono o WhatsApp.
          </p>
        </div>
      </div>
    </section>
  )
}
