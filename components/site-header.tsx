import Link from "next/link"
import { Wheat } from "lucide-react"

const links = [
  { href: "#about", label: "Il Forno" },
  { href: "#products", label: "Le Sfornate" },
  { href: "#schedule", label: "Orari" },
  { href: "#contact", label: "Contatti" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-2">
          <Wheat className="size-5 text-primary" aria-hidden="true" />
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Fico Bread
          </span>
        </Link>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Prenota
        </a>
      </div>
    </header>
  )
}
