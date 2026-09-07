import { Clock, Sprout, Flame } from "lucide-react"

const steps = [
  {
    icon: Clock,
    title: "36 ore di lievitazione",
    body: "Ogni pagnotta riposa a lungo con il nostro lievito madre, rinfrescato ogni giorno da oltre dieci anni.",
  },
  {
    icon: Sprout,
    title: "Ingredienti del territorio",
    body: "Farine macinate a pietra da mulini locali, acqua e sale marino. Nient'altro: nessun additivo, nessuna fretta.",
  },
  {
    icon: Flame,
    title: "Cottura a legna",
    body: "Il forno a legna dà alla crosta il suo colore ambrato e alla mollica quel profumo che sa di casa.",
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Il nostro metodo
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Tempo, mani e lievito madre.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Fico Bread nasce da un&apos;ossessione semplice: fare del buon
            pane senza scorciatoie. Lavoriamo con la lievitazione naturale,
            impastiamo a mano e lasciamo che sia il tempo a sviluppare gusto,
            profumo e digeribilità.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Sforniamo piccole quantità ogni giorno, così ogni pagnotta arriva
            fresca. Quello che facciamo, lo facciamo bene e in poche mani.
          </p>
        </div>

        <ul className="flex flex-col gap-5">
          {steps.map((step) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <step.icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
