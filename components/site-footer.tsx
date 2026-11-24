import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Progresso", href: "#progresso" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-display text-base font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-muted">{siteConfig.tagline}</p>
        </div>

        <nav className="flex flex-wrap items-center gap-5" aria-label="Rodapé">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted">
          Feito com Next.js e Tailwind. Conteúdo próprio, A1 ao B2.
        </p>
      </div>
    </footer>
  );
}
