// MegaToggle.tsx
import { useEffect, useState } from "preact/hooks";

type Props = { class?: string };

export default function MegaToggle({ class: className }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    const root = document.getElementById("mega-drawer");
    if (!root) return;
    if (!open) { root.innerHTML = ""; return; }

    root.innerHTML = `
      <div class="fixed inset-0 z-40 bg-black/20"></div>
      <div class="fixed inset-x-0 top-14 z-50 bg-white border-t shadow-xl">
        <div class="p-4 space-y-6">${/* Aquí podrías renderizar NAV vía ssr y clonarlo, o más simple: */""}
          <div class="px-1 text-xs uppercase tracking-wide text-slate-500">Navegación</div>
          <div class="divide-y">
            ${/* En producción: inyecta HTML server-side con Astro slot o usa islands más ricas. */""}
          </div>
        </div>
      </div>
    `;
  }, [open]);

  return (
    <button
      aria-expanded={open}
      aria-controls="mega-drawer"
      onClick={() => setOpen(v => !v)}
      class={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 ${className || ""}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
      Menú
    </button>
  );
}