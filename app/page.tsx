import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BakedGoods } from "@/components/baked-goods"
import { Schedule } from "@/components/schedule"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

import Maintenance from "@/components/maintenance"


export default function Page() {
  const isMaintenanceMode = true // Cambia in false per mostrare il sito completo

  if (isMaintenanceMode) {
    return <Maintenance />
  }

  return (
    <>
      {/* ... rest of the code ... */}

      <SiteHeader />
      <main>
        <Hero />
        <About />
        <BakedGoods />
        <Schedule />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
