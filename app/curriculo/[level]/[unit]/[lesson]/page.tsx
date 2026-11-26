import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonPractice } from "@/components/lesson/practice";
import { getLesson, getUnit, lessonNeighbours } from "@/lib/curriculum";
import { skillLabels } from "@/lib/curriculum/types";

type Params = {
  params: Promise<{ level: string; unit: string; lesson: string }>;
};

export default async function LessonPage({ params }: Params) {
  const { level: levelSlug, unit: unitSlug, lesson: lessonSlug } = await params;
  const unit = getUnit(levelSlug, unitSlug);
  const lesson = unit ? getLesson(unit, lessonSlug) : undefined;

  if (!unit || !lesson) notFound();

  const { previous, next } = lessonNeighbours(unit, lesson);
  const basePath = `/curriculo/${unit.level.toLowerCase()}/${unit.slug}`;

  return (
    <>
      <section className="border-b border-line">
        <div className="container-page py-10 lg:py-14">
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
            <Link href={basePath} className="transition-colors hover:text-ink">
              {unit.title}
            </Link>
            <span className="px-2 text-line">/</span>
            <span className="text-ink">lição {lesson.number}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_17rem] lg:items-end lg:gap-16">
            <div>
              <h1 className="max-w-2xl font-display text-[2.3rem] font-semibold leading-[1.03] tracking-tighter sm:text-5xl">
                {lesson.title}
              </h1>
              <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-muted">
                {lesson.subtitle}
              </p>
            </div>
            <p className="font-mono text-[0.7rem] leading-relaxed text-muted lg:text-right">
              {lesson.minutes} minutos
              <br />
              {lesson.exercises.length} exercícios
              <br />
              {lesson.skills.map((skill) => skillLabels[skill]).join(", ")}
            </p>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-12 py-10 lg:grid-cols-[1fr_17rem] lg:gap-16 lg:py-14">
        <article>
          <div className="panel p-6">
            <p className="label">ao final desta lição</p>
            <p className="mt-2.5 text-[0.95rem] leading-relaxed">{lesson.goal}</p>
          </div>

          {lesson.theory.map((section, sectionIndex) => (
            <section
              key={section.heading}
              className="mt-12 border-t border-line pt-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[0.7rem] text-muted">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-medium leading-snug tracking-tight">
                  {section.heading}
                </h2>
              </div>

              <div className="mt-4 space-y-3 pl-0 sm:pl-10">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-[38rem] text-[0.95rem] leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.table ? (
                <div className="mt-6 overflow-x-auto sm:pl-10">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-line">
                        {section.table.columns.map((column) => (
                          <th
                            key={column}
                            scope="col"
                            className="pb-2 pr-6 font-mono text-[0.7rem] font-normal text-muted last:pr-0"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIndex) => (
                        <tr
                          key={`${section.heading}-${rowIndex}`}
                          className="border-b border-line last:border-b-0"
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${cell}-${cellIndex}`}
                              className={
                                cellIndex === 0
                                  ? "py-2.5 pr-6 font-mono text-[0.8rem] text-ink last:pr-0"
                                  : "py-2.5 pr-6 text-muted last:pr-0"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.examples ? (
                <ul className="mt-6 space-y-3 sm:pl-10">
                  {section.examples.map((example) => (
                    <li
                      key={example.en}
                      className="border-l-2 border-marker pl-4"
                    >
                      <p className="text-[0.95rem] leading-snug">{example.en}</p>
                      <p className="mt-0.5 text-sm text-muted">{example.pt}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="mt-12 border-t border-line pt-8">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Vocabulário da lição
            </h2>
            <p className="mt-2 max-w-[34rem] text-sm leading-relaxed text-muted">
              Estas palavras voltam nas próximas lições e nos exercícios de
              revisão. Leia em voz alta antes de descer para a prática.
            </p>
            <dl className="mt-5 grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {lesson.vocabulary.map((item) => (
                <div
                  key={item.term}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-2.5"
                >
                  <dt className="font-mono text-[0.85rem] text-ink">
                    {item.term}
                  </dt>
                  <dd className="text-right text-sm text-muted">
                    {item.translation}
                    {item.note ? (
                      <span className="block font-mono text-[0.65rem] text-muted/80">
                        {item.note}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Prática
              </h2>
              <p className="font-mono text-[0.7rem] text-muted">
                corrija na hora, sem olhar a resposta antes
              </p>
            </div>
            <div className="mt-5">
              <LessonPractice exercises={lesson.exercises} />
            </div>
          </section>

          <section className="mt-12 border-t border-line pt-8">
            <p className="label">antes de fechar</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
              {lesson.task.title}
            </h2>
            <p className="mt-3 max-w-[38rem] text-[0.95rem] leading-relaxed text-muted">
              {lesson.task.body}
            </p>
          </section>
        </article>

        <aside className="order-first lg:order-none">
          <div className="lg:sticky lg:top-24">
            <div className="panel p-5">
              <p className="label">nesta unidade</p>
              <ol className="mt-3 space-y-0">
                {unit.lessons.map((item) => {
                  const current = item.slug === lesson.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`${basePath}/${item.slug}`}
                        className={`flex items-baseline gap-3 border-t border-line py-2.5 text-sm transition-colors first:border-t-0 ${
                          current ? "text-ink" : "text-muted hover:text-ink"
                        }`}
                      >
                        <span className="font-mono text-[0.65rem]">
                          {String(item.number).padStart(2, "0")}
                        </span>
                        <span className={current ? "font-medium" : undefined}>
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-6 flex flex-col gap-2 font-mono text-[0.7rem]">
              {previous ? (
                <Link
                  href={`${basePath}/${previous.slug}`}
                  className="flex items-baseline gap-2 text-muted transition-colors hover:text-ink"
                >
                  <span aria-hidden>&larr;</span> lição {previous.number}
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={`${basePath}/${next.slug}`}
                  className="flex items-baseline gap-2 text-ink transition-colors hover:text-pen"
                >
                  <span aria-hidden>&rarr;</span> próxima: {next.title}
                </Link>
              ) : (
                <Link
                  href={basePath}
                  className="flex items-baseline gap-2 text-ink transition-colors hover:text-pen"
                >
                  <span aria-hidden>&rarr;</span> fim da unidade
                </Link>
              )}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
