import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BakedGoods } from "@/components/baked-goods"
import { Schedule } from "@/components/schedule"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
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
