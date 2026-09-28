import { ArrowUpRight, ExternalLink, Star } from "lucide-react"

const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Fico+Bread+Storie+di+pane+pizza+e+lievitati+Palestrina"

const pressLinks = [
  {
    publication: "CiboToday",
    title: "La storia di Fico Bread, il forno di Palestrina di Emiliano Giovannetti",
    description: "La storia del forno di Emiliano Giovannetti e del suo pane artigianale.",
    href: "https://www.cibotoday.it/citta/roma/fico-bread-forno-palestrina-pane.html",
    image: "https://citynews-cibotoday.stgy.ovh/~media/original-hi/11369274519891/pain-au-chocolat-a-palestrina.jpg",
    imageAlt: "Sfogliati da Fico Bread",
  },
  {
    publication: "Monti Prenestini",
    title: "Emiliano e il ritorno al pane vero: a Palestrina nasce Fico Bread",
    description: "Il racconto della nascita di Fico Bread e del ritorno al pane vero.",
    href: "https://montiprenestini.info/emiliano-e-il-ritorno-al-pane-vero-a-palestrina-nasce-fico-bread/",
    image: "https://i0.wp.com/montiprenestini.info/wp-content/uploads/2025/09/WhatsApp-Image-2025-10-14-at-21.34.50-2.jpeg?resize=1536%2C1149&ssl=1",
    imageAlt: "Emiliano prepara il pane",
  },
]

export function SocialProof() {
  return (
    <section id="reviews" className="scroll-mt-20 border-y border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div id="press" className="scroll-mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Dicono di noi
              </span>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Gli articoli che parlano di noi
              </h2>
            </div>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Articoli di giornale, interviste e racconti dal territorio per
              conoscerci anche fuori dal forno.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {pressLinks.map((article) => (
              <li key={article.title}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      {article.publication}
                    </span>
                    <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-primary">Leggi l&apos;articolo →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 text-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Le vostre parole
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Il pane si racconta anche attraverso chi lo assaggia
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Le recensioni Google ci aiutano a crescere ogni giorno. Leggi le
              esperienze di chi e gia passato dal forno e lasciaci la tua.
            </p>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              <Star className="size-4 fill-current" aria-hidden="true" />
              Leggi le recensioni su Google
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}