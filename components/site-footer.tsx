import { Wheat } from "lucide-react"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <Wheat className="size-5 text-primary" aria-hidden="true" />
          <span className="font-serif text-lg font-semibold text-foreground">
            {site.name}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {site.address.street}, {site.address.city}
        </p>
        <p className="text-sm text-muted-foreground">
          © 2025 {site.name}. Storie di pane, pizza e lievitati.
        </p>
      </div>
    </footer>
  )
}
