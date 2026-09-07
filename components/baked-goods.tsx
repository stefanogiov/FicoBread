import { whatsappLink } from "@/lib/site"

type Product = {
  name: string
  image: string
  description: string
  tags: string[]
}

const products: Product[] = [
  {
    name: "Pagnotta Madre",
    image: "/images/product-sourdough.png",
    description:
      "La nostra pagnotta di grano semi-integrale, crosta croccante e mollica alveolata. 1 kg.",
    tags: ["Lievito madre", "Ogni giorno"],
  },
  {
    name: "Focaccia alle Erbe",
    image: "/images/product-focaccia.png",
    description:
      "Soffice e dorata, con olio extravergine, rosmarino e sale grosso. Perfetta da condividere.",
    tags: ["Lievito madre", "Solo weekend"],
  },
  {
    name: "Ciabatta Rustica",
    image: "/images/product-ciabatta.png",
    description:
      "Ad alta idratazione, leggera e croccante. Ideale per bruschette e panini.",
    tags: ["Lievito madre", "Ogni giorno"],
  },
  {
    name: "Cornetti al Burro",
    image: "/images/product-croissant.png",
    description:
      "Sfoglia lievitata a lungo con burro di montagna. Solo la mattina, finché durano.",
    tags: ["Sfoglia", "Solo mattina"],
  },
]

const tagStyles: Record<string, string> = {
  "Solo weekend": "bg-primary/12 text-primary",
  "Solo mattina": "bg-primary/12 text-primary",
  "Ogni giorno": "bg-accent/12 text-accent",
  "Lievito madre": "bg-secondary text-secondary-foreground",
  Sfoglia: "bg-secondary text-secondary-foreground",
}

export function BakedGoods() {
  return (
    <section
      id="products"
      className="scroll-mt-20 border-y border-border bg-secondary/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Sfornate di oggi
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Cosa esce dal forno
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Le quantità sono limitate: consigliamo di prenotare in anticipo per
            non restare senza pane.
          </p>
        </div>

        <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        tagStyles[tag] ?? "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Ciao! Vorrei prenotare alcune sfornate di oggi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-95"
          >
            Prenota le tue sfornate
          </a>
        </div>
      </div>
    </section>
  )
}
