import { Clock, Croissant, Calendar } from "lucide-react"

const hours = [
  { day: "Lunedì", time: "Chiuso", closed: true },
  { day: "Martedì – Venerdì", time: "08:30 – 13:30 · 15:30 – 18:30" },
  { day: "Sabato", time: "08:30 – 13:00" },
  { day: "Domenica", time: "Chiuso", closed: true },
]

const bakeTimes = [
  { time: "08:30", what: "Pagnotte madre, cornetti e sfoglie del mattino" },
  { time: "11:00", what: "Focaccia calda e pizza" },
  { time: "15:00", what: "Seconda infornata di pane" },
]

const breadCalendar = [
  { day: "Martedì", bread: "Le nostre pagnotte classiche" },
  { day: "Mercoledì", bread: "Pagnotte classiche + Pane al Cacao" },
  { day: "Giovedì", bread: "Pagnotte classiche + Pane Campagnolo" },
  { day: "Venerdì", bread: "Le nostre pagnotte classiche" },
  { day: "Sabato", bread: "Pagnotte classiche e speciali weekend" },
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

                  <div className="mt-14 grid gap-7 md:grid-cols-2">
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

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Calendar className="size-5 text-primary" aria-hidden="true" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Calendario del pane
            </h3>
          </div>
          <ul className="mt-6 divide-y divide-border">
            {breadCalendar.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between gap-4 py-3.5"
              >
                <span className="font-medium text-foreground">{row.day}</span>
                <span className="text-right text-sm text-muted-foreground">
                  {row.bread}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Ogni giorno sforniamo pani speciali diversi per offrirti sempre gusti nuovi.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-2xl rounded-2xl border border-border bg-card/50 p-8">
          <div className="flex items-center justify-center gap-3">
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
      </div>



    </section>
  )
}
