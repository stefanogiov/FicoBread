export const site = {
  name: "Fico Bread",
  tagline: "Pane a lievitazione naturale",
  // Digits only, international format, no + or spaces — used for wa.me links
  whatsapp: "393401234567",
  whatsappMessage: "Ciao! Vorrei ordinare del pane per questa settimana.",
  email: "ciao@microforno.it",
  address: {
    street: "Viale Ungheria 8",
    city: "00036 Palestina (RM)",
  },
}

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
