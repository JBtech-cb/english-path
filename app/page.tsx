import Link from "next/link";
import { curriculumTotals, levels } from "@/lib/site";

const features = [
  {
    title: "Lições de 10 minutos",
    body: "Gramática explicada em português, exemplos em inglês e exercícios corrigidos na hora.",
  },
  {
    title: "Revisão espaçada",
    body: "O vocabulário volta no dia certo, pouco antes de você esquecer. O mesmo método do Anki.",
  },
  {
    title: "Quatro habilidades",
    body: "Ouvir, ler, escrever e falar treinados de forma separada, cada um com sua própria meta.",
  },
  {
    title: "Progresso visível",
    body: "Sequência de dias, XP e precisão por habilidade. Você sabe exatamente onde está.",
  },
];

const heroExercise = {
  prompt: "She ___ to work every day.",
  options: ["go", "goes", "going"],
  answer: "goes",
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-page grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="eyebrow">Do zero ao B2 · {curriculumTotals.units} unidades</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Inglês que entra na cabeça, 15 minutos por dia.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Lições curtas, revisão espaçada e as quatro habilidades no mesmo lugar. Sem
              matrícula, sem mensalidade, sem enrolação.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#curriculo" className="btn-primary">
                Começar pelo A1
              </Link>
              <Link href="#como-funciona" className="btn-ghost">
                Ver o plano de estudo
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {[
                { value: curriculumTotals.units, label: "unidades" },
                { value: curriculumTotals.lessons, label: "lições" },
                { value: curriculumTotals.words, label: "palavras" },
                { value: curriculumTotals.skills, label: "habilidades" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-display text-2xl font-semibold">{item.value}</dd>
                  <dd className="text-sm text-muted">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-soft/60 blur-2xl" />
            <div className="card p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                <span>Lição 04 · A1</span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] text-accent-dark">
                  em andamento
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-semibold">Present simple</h2>
              <p className="mt-1 text-sm text-muted">
                O que acontece sempre, todo dia, de forma repetida.
              </p>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-line">
                <div className="h-full w-[40%] rounded-full bg-accent" />
              </div>

              <div className="mt-6 rounded-xl border border-line bg-paper/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Complete a frase
                </p>
                <p className="mt-2 font-display text-lg">{heroExercise.prompt}</p>

                <div className="mt-4 space-y-2">
                  {heroExercise.options.map((option) => {
                    const isAnswer = option === heroExercise.answer;
                    return (
                      <div
                        key={option}
                        className={[
                          "flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-sm",
                          isAnswer
                            ? "border-accent bg-accent-soft/70 font-semibold text-accent-dark"
                            : "border-line bg-surface text-muted",
                        ].join(" ")}
                      >
                        <span>{option}</span>
                        {isAnswer ? <span aria-hidden>✓</span> : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mt-4 text-xs text-muted">
                8 de 10 corretas · próxima revisão amanhã
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-b border-line">
        <div className="container-page py-16 lg:py-20">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Um método só, sem pular etapa.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="card p-6">
                <span className="font-display text-sm font-semibold text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculo" className="border-b border-line">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Currículo</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Quatro níveis, {curriculumTotals.units} unidades.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              O conteúdo é liberado unidade por unidade. Cada nível fecha com um teste próprio.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {levels.map((level) => (
              <div key={level.code} className="card flex flex-col gap-4 p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-3xl font-semibold text-accent">
                    {level.code}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {level.units} unidades · {level.lessons} lições
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{level.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{level.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="progresso" className="border-b border-line bg-accent text-paper">
        <div className="container-page flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Comece hoje com 15 minutos.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-paper/80">
              Sem cadastro e sem instalar nada. Seu progresso fica salvo no próprio navegador.
            </p>
          </div>
          <Link
            href="#curriculo"
            className="btn bg-paper text-accent-dark hover:bg-white"
          >
            Abrir a primeira lição
          </Link>
        </div>
      </section>
    </>
  );
}
