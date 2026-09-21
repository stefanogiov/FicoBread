import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Privacy & Cookie Policy — ${site.name}`,
  description: "Informativa privacy e cookie policy del sito.",
}

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Informativa
      </span>
      <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
        Privacy & Cookie Policy
      </h1>

      <div className="mt-10 flex flex-col gap-6 text-pretty leading-relaxed text-muted-foreground">
        <p>
          Questo sito utilizza esclusivamente <strong className="text-foreground">cookie tecnici</strong>,
          necessari al corretto funzionamento del sito stesso. Non vengono utilizzati cookie di
          profilazione né cookie di terze parti per finalità di marketing o analisi statistica.
        </p>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Google Maps
          </h2>
          <p className="mt-2">
            L&apos;unico servizio di terze parti presente nel sito è <strong className="text-foreground">Google Maps</strong>,
            utilizzato nella sezione contatti per mostrare la posizione del nostro forno. La mappa
            <strong className="text-foreground"> non viene caricata automaticamente</strong>: viene attivata solo su
            richiesta esplicita dell&apos;utente, tramite il pulsante &quot;Accetta e mostra la mappa&quot;. Solo in quel
            momento il browser contatta i server di Google e vengono impostati eventuali cookie di
            terze parti da parte di Google Maps.
          </p>
          <p className="mt-2">
            La scelta viene ricordata salvando una preferenza nel <strong className="text-foreground">localStorage</strong>{" "}
            del browser, così da non richiedere il consenso a ogni visita. Puoi revocare il consenso in
            qualsiasi momento dalla sezione contatti del sito, sotto la mappa.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Titolare del trattamento
          </h2>
          <p className="mt-2">
            {site.name} — {site.address.street}, {site.address.city}. Per qualsiasi richiesta relativa
            alla privacy puoi scriverci a{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>

        <Link
          href="/"
          className="mt-4 inline-flex w-fit items-center gap-2 font-semibold text-primary underline underline-offset-4 hover:opacity-80"
        >
          ← Torna alla home
        </Link>
      </div>
    </section>
  )
}
