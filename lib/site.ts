export const site = {
  name: "Fico Bread S.r.l.s.",
  tagline: "Storie di pane, pizza e lievitati",
  // Digits only, international format, no + or spaces — used for wa.me links
  whatsapp: "390683384443",
  whatsappMessage: "Ciao! Vorrei ordinare del pane per questa settimana.",
  phone: "06 8338 4443",
  phoneHref: "tel:+390683384443",
  email: "ficobread@gmail.com",
  address: {
    street: "Viale Ungheria 8",
    city: "00036 Palestrina (RM)",
  },
}

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
