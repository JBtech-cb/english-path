import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Progresso", href: "#progresso" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tighter">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Rodapé">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-[0.7rem] leading-relaxed text-muted">
          conteúdo próprio, 24 unidades
        </p>
      </div>
    </footer>
  );
}
