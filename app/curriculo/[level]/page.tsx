import Link from "next/link";
import { notFound } from "next/navigation";
import { getLevelOutline } from "@/lib/curriculum";

type Params = { params: Promise<{ level: string }> };

export default async function LevelPage({ params }: Params) {
  const { level: levelSlug } = await params;
  const level = getLevelOutline(levelSlug);

  if (!level) notFound();

  const openUnits = level.units.filter((unit) => unit.available);

  return (
    <>
      <section className="border-b border-line">
        <div className="container-page py-14 lg:py-20">
          <nav aria-label="Trilha" className="font-mono text-[0.7rem] text-muted">
            <Link href="/curriculo" className="transition-colors hover:text-ink">
              currículo
            </Link>
            <span className="px-2 text-line">/</span>
            <span className="text-ink">{level.code}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-tighter sm:text-5xl">
                Nível {level.code} — {level.label}
              </h1>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-muted">
                {level.summary}
              </p>
            </div>
            <p className="font-mono text-[0.7rem] leading-relaxed text-muted lg:text-right">
              {level.units.length > 0
                ? `${openUnits.length} de ${level.units.length} unidades escritas`
                : "conteúdo em preparação"}
              <br />
              quatro lições por unidade
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-12 lg:py-16">
          {level.units.length === 0 ? (
            <div className="panel max-w-2xl p-7">
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Este nível ainda não foi escrito.
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                O A1 está em produção agora. As unidades deste nível entram
                depois que o nível anterior fechar.
              </p>
              <Link
                href="/curriculo/a1"
                className="btn-outline mt-6 px-4 py-2 text-[0.8rem]"
              >
                Ver o A1
              </Link>
            </div>
          ) : (
            <ol className="rows border-b border-line">
              {level.units.map((unit) => {
                const content = (
                  <>
                    <span className="font-mono text-[0.7rem] text-muted">
                      unidade {String(unit.number).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-medium tracking-tight">
                        {unit.title}
                      </h2>
                      <p className="mt-1.5 max-w-[40rem] text-sm leading-relaxed text-muted">
                        {unit.goal}
                      </p>
                    </div>
                    <span className="font-mono text-[0.7rem] text-muted sm:text-right">
                      {unit.available
                        ? `${unit.lessons} lições`
                        : "em preparação"}
                    </span>
                  </>
                );

                return (
                  <li key={unit.slug}>
                    {unit.available ? (
                      <Link
                        href={`/curriculo/${level.code.toLowerCase()}/${unit.slug}`}
                        className="grid gap-3 py-6 transition-colors hover:bg-surface sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-8 sm:px-2"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="grid gap-3 py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-8 sm:px-2">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </section>
    </>
  );
}
