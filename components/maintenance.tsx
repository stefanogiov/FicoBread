import { Flame } from "lucide-react"

export default function Maintenance() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center">
      <div className="relative">
        <img src="images/logo.png" alt="Logo FicoBread" width="200" height="auto"></img>
      </div>

      {/* <div className="relative">
        <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/20 blur-xl" />
        <Flame className="relative size-16 text-primary" />
      </div> */}
      
      <h1 className="mt-8 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        Stiamo scaldando i forni!
      </h1>
      
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Il nuovo sito di Fico Bread è quasi pronto. Torna a trovarci presto per scoprire tutte le nostre sfornate.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="https://www.instagram.com/fico_bread?stkn=d2F0YzZpZmQxYXQ1" // Sostituisci con il link reale
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Seguici su Instagram
        </a>
      </div>

      <p className="mt-12 text-sm font-medium uppercase tracking-widest text-primary/60">
        Coming Soon
      </p>
    </div>
  )
}
