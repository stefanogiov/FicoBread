import { Clock, Croissant } from "lucide-react"

const hours = [
  { day: "Lunedì", time: "Chiuso", closed: true },
  { day: "Martedì – Venerdì", time: "07:30 – 13:30 · 16:30 – 19:30" },
  { day: "Sabato", time: "07:30 – 14:00" },
  { day: "Domenica", time: "08:00 – 13:00" },
]

const bakeTimes = [
  { time: "07:30", what: "Pagnotte madre & ciabatte" },
  { time: "08:00", what: "Cornetti e sfoglie del mattino" },
  { time: "11:00", what: "Seconda infornata di pane" },
  { time: "17:00", what: "Focaccia calda (mar–ven)" },
]

export function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Orari e sfornate
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Quando siamo aperti e quando esce il pane caldo
        </h2>
      </div>

      <div className="mt-14 grid gap-7 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Clock className="size-5 text-primary" aria-hidden="true" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Orari di apertura
            </h3>
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
                      ? "text-sm font-semibold uppercase tracking-wide text-primary"
                      : "text-right text-sm text-muted-foreground"
                  }
                >
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Croissant className="size-5 text-primary" aria-hidden="true" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Orari delle sfornate
            </h3>
          </div>
          <ul className="mt-6 flex flex-col gap-4">
            {bakeTimes.map((row) => (
              <li key={row.time} className="flex items-center gap-5">
                <span className="flex min-w-16 justify-center rounded-lg bg-secondary px-3 py-2 font-serif text-lg font-semibold text-primary">
                  {row.time}
                </span>
                <span className="text-muted-foreground">{row.what}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Il pane più richiesto finisce in fretta: arriva vicino all&apos;orario
            di sfornata o prenota via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  )
}
