import type { Metadata } from "next";
import Link from "next/link";
import { levelOutlines, writtenContent } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Currículo",
  description:
    "Quatro níveis, vinte e quatro unidades. Veja o que já está escrito e o que entra nas próximas semanas.",
};

export default function CurriculumPage() {
  const written = writtenContent();

  return (
    <>
      <section className="border-b border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-20">
          <div>
            <p className="label">currículo</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-tighter sm:text-5xl">
              O caminho inteiro, unidade por unidade.
            </h1>
          </div>
          <div>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-muted">
              Cada nível tem seis unidades de quatro lições. O conteúdo entra aos
              poucos: o que aparece aberto aqui já está escrito e corrigido.
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.7rem] text-muted">
              <div>
                <dt className="inline">unidades escritas </dt>
                <dd className="inline text-ink">{written.units}</dd>
              </div>
              <div>
                <dt className="inline">lições </dt>
                <dd className="inline text-ink">{written.lessons}</dd>
              </div>
              <div>
                <dt className="inline">exercícios </dt>
                <dd className="inline text-ink">{written.exercises}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-12 lg:py-16">
          <ul className="rows border-b border-line">
            {levelOutlines.map((level) => {
              const openUnits = level.units.filter((unit) => unit.available);

              return (
                <li key={level.code}>
                  <Link
                    href={`/curriculo/${level.code.toLowerCase()}`}
                    className="grid gap-4 py-7 transition-colors hover:bg-surface sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-8 sm:px-2"
                  >
                    <span className="font-display text-2xl font-semibold tracking-tighter">
                      {level.code}
                    </span>
                    <div>
                      <h2 className="text-[1rem] font-medium">{level.label}</h2>
                      <p className="mt-1 max-w-[42rem] text-sm leading-relaxed text-muted">
                        {level.summary}
                      </p>
                    </div>
                    <p className="font-mono text-[0.7rem] text-muted sm:text-right">
                      {openUnits.length > 0
                        ? `${openUnits.length} de ${level.units.length} unidades escritas`
                        : "em preparação"}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            A ordem não é sugestão. Cada unidade assume que a anterior está
            fechada: o presente simples da unidade 2 usa o to be da unidade 1 em
            toda frase.
          </p>
        </div>
      </section>
    </>
  );
}
