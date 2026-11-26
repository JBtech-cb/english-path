import Link from "next/link";
import { notFound } from "next/navigation";
import { countExercises, getUnit } from "@/lib/curriculum";

type Params = { params: Promise<{ level: string; unit: string }> };

export default async function UnitPage({ params }: Params) {
  const { level: levelSlug, unit: unitSlug } = await params;
  const unit = getUnit(levelSlug, unitSlug);

  if (!unit) notFound();

  return (
    <>
      <section className="border-b border-line">
        <div className="container-page py-14 lg:py-20">
          <nav aria-label="Trilha" className="font-mono text-[0.7rem] text-muted">
            <Link href="/curriculo" className="transition-colors hover:text-ink">
              currículo
            </Link>
            <span className="px-2 text-line">/</span>
            <Link
              href={`/curriculo/${unit.level.toLowerCase()}`}
              className="transition-colors hover:text-ink"
            >
              {unit.level}
            </Link>
            <span className="px-2 text-line">/</span>
            <span className="text-ink">unidade {unit.number}</span>
          </nav>

          <h1 className="mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tighter sm:text-5xl">
            {unit.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-muted">
            {unit.description}
          </p>

          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-2 border-t border-line pt-5 font-mono text-[0.7rem] text-muted">
            <div>
              <dt className="inline">lições </dt>
              <dd className="inline text-ink">{unit.lessons.length}</dd>
            </div>
            <div>
              <dt className="inline">exercícios </dt>
              <dd className="inline text-ink">{countExercises(unit)}</dd>
            </div>
            <div>
              <dt className="inline">nível </dt>
              <dd className="inline text-ink">{unit.level}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="container-page grid gap-12 py-12 lg:grid-cols-[1fr_19rem] lg:gap-20 lg:py-16">
          <div>
            <p className="label">as quatro lições</p>
            <ol className="mt-4 rows border-b border-line">
              {unit.lessons.map((lesson) => (
                <li key={lesson.slug}>
                  <Link
                    href={`/curriculo/${unit.level.toLowerCase()}/${unit.slug}/${lesson.slug}`}
                    className="grid gap-2 py-6 transition-colors hover:bg-surface sm:grid-cols-[3rem_1fr_auto] sm:gap-6 sm:px-2"
                  >
                    <span className="font-mono text-[0.7rem] text-muted">
                      {String(lesson.number).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-medium tracking-tight">
                        {lesson.title}
                      </h2>
                      <p className="mt-1 max-w-[34rem] text-sm leading-relaxed text-muted">
                        {lesson.subtitle}
                      </p>
                    </div>
                    <span className="font-mono text-[0.7rem] text-muted sm:text-right">
                      {lesson.minutes} min
                      <br />
                      {lesson.exercises.length} exercícios
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:pt-8">
            <div className="panel p-6">
              <p className="label">objetivo da unidade</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed">{unit.goal}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                Faça uma lição por dia. Se errar mais de três exercícios, repita a
                lição antes de avançar: a próxima assume esta fechada.
              </p>
              <Link
                href={`/curriculo/${unit.level.toLowerCase()}/${unit.slug}/${unit.lessons[0].slug}`}
                className="btn-solid mt-5 w-full px-4 py-2.5 text-[0.8rem]"
              >
                Começar pela lição 1
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
