import Link from "next/link";
import { firstLessonHref, navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-[1.35rem] font-semibold tracking-tighter">
            {siteConfig.name}
          </span>
          <span className="hidden font-mono text-[0.7rem] text-muted sm:inline">
            A1–B2
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={firstLessonHref}
          className="btn-solid px-4 py-2 text-[0.8rem]"
        >
          Começar pelo A1
        </Link>
      </div>
    </header>
  );
}
