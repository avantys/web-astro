export type MegaSection = {
  title?: string
  items: Array<{
    label: string
    href: string
    desc?: string
    icon?: string // opcional: nombre de icono o ruta SVG
    badge?: string
  }>
}

export type MegaCategory = {
  id: string
  label: string            // Comienza, Crea, Crece, Transforma
  columns: MegaSection[]   // 2-4 columnas
}

export const NAV: MegaCategory[] = [
  {
    id: "comienza",
    label: "Comienza",
    columns: [
      {
        items: [
          { label: "Comprar Dominio", href: "/dominios/comprar", desc: "Elige y registra tu dominio ideal." },
          { label: "Transferir Dominio", href: "/dominios/transferir", desc: "Transfiere rápido y sin complicaciones." }
        ]
      },
      {
        title: "Hosting",
        items: [
          { label: "Hosting Wordpress", href: "/hosting/wordpress", desc: "Rápido, seguro y actualizado." },
          { label: "Hosting Web", href: "/hosting/web", desc: "Robusto y escalable." }
        ]
      }
    ]
  },
  {
    id: "crea",
    label: "Crea",
    columns: [
      { title: "Desarrollo Web", items: [{ label: "Sitios a medida", href: "/servicios/desarrollo", desc: "Webs que conectan y convierten." }] },
      { title: "Creador de webs", items: [{ label: "Website Builder", href: "/builder", desc: "Crea visualmente en minutos." }] }
    ]
  },
  // ... añade Crece / Transforma análogamente
]