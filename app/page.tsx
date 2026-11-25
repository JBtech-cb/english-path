import Link from "next/link";
import { curriculumTotals, levels } from "@/lib/site";

const steps = [
  {
    title: "Uma regra por lição",
    body: "Começa com a explicação curta em português, com três exemplos em inglês. Nada de gramática decorada sem uso.",
  },
  {
    title: "Dez exercícios, corrigidos na hora",
    body: "Completar, ordenar e ouvir. O erro aparece explicado na mesma tela, antes de virar dúvida.",
  },
  {
    title: "O vocabulário volta depois",
    body: "Cada palavra nova reaparece no dia 1, 3, 7 e 21. Quando você erra, ela volta antes.",
  },
  {
    title: "Uma habilidade por vez",
    body: "Ouvir, ler, escrever e falar têm metas separadas, para você saber qual está travando o resto.",
  },
];

const stats = [
  { value: curriculumTotals.units, label: "unidades" },
  { value: curriculumTotals.lessons, label: "lições" },
  { value: curriculumTotals.words, label: "palavras" },
  { value: curriculumTotals.skills, label: "habilidades" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-page grid items-start gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
          <div>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[0.98] tracking-tighter sm:text-6xl lg:text-[4.2rem]">
              Inglês do zero ao B2, quinze minutos por dia.
            </h1>

            <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-muted">
              Noventa e seis lições curtas, gramática explicada em português e um
              vocabulário que volta no dia certo. Sem matrícula, sem aplicativo para
              instalar: seu progresso fica no próprio navegador.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#curriculo" className="btn-solid">
                Começar pelo A1
              </Link>
              <Link href="#como-funciona" className="btn-outline">
                Ver como cada lição funciona
              </Link>
            </div>
          </div>

          <div className="panel p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line pb-4">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[0.7rem] text-muted">
                <span>a1</span>
                <span>unidade 1</span>
                <span>lição 4</span>
              </div>
              <span className="font-mono text-[0.7rem] text-ink">presente simples</span>
            </div>

            <p className="mt-7 font-display text-2xl font-medium leading-snug tracking-tight">
              She <span className="mark">goes</span> to work every day.
            </p>
            <p className="mt-2 text-sm text-muted">
              Ela vai ao trabalho todos os dias.
            </p>

            <div className="mt-7">
              <p className="label">escolha a forma correta</p>
              <ul className="mt-3 rows border-b border-line">
                {["go", "goes", "going"].map((option, index) => {
                  const isAnswer = option === "goes";
                  return (
                    <li
                      key={option}
                      className="flex items-center justify-between gap-4 py-2.5"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[0.7rem] text-muted">
                          {String.fromCharCode(97 + index)}
                        </span>
                        <span
                          className={
                            isAnswer
                              ? "text-[0.95rem] font-medium"
                              : "text-[0.95rem] text-muted"
                          }
                        >
                          {option}
                        </span>
                      </span>
                      {isAnswer ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                          className="h-4 w-4 text-pen"
                        >
                          <path
                            d="M3.5 13.5 8 18 20.5 5.5"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="mt-5 text-[0.85rem] leading-relaxed text-muted">
              Na terceira pessoa do singular, o verbo ganha{" "}
              <span className="font-mono text-ink">-s</span>.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-[0.7rem] text-muted">
              <span>8 de 10 corretas</span>
              <span>revisa amanhã</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-page">
          <dl className="grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
            {stats.map((item) => (
              <div key={item.label} className="px-0 py-7 sm:px-6 sm:first:pl-0">
                <dt className="font-mono text-[0.7rem] text-muted">{item.label}</dt>
                <dd className="mt-2 font-display text-3xl font-medium tracking-tighter">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="como-funciona" className="border-b border-line">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[20rem_1fr] lg:gap-16 lg:py-28">
          <div>
            <p className="label">como funciona</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tighter sm:text-4xl">
              O que acontece em cada lição.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Sempre na mesma ordem. Você pode parar no meio e voltar depois, porque
              cada etapa é curta o bastante para caber num intervalo.
            </p>
          </div>

          <ol className="rows">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:first:border-t-0 sm:first:pt-0"
              >
                <span className="font-mono text-[0.7rem] leading-6 text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[38rem] text-[0.95rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="curriculo" className="border-b border-line">
        <div className="container-page py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="max-w-xl font-display text-3xl font-semibold leading-[1.05] tracking-tighter sm:text-4xl">
                Quatro níveis, {curriculumTotals.units} unidades, nada pulado.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Cada nível fecha com um teste de saída próprio. Se você travar, a unidade
              fica aberta até a nota passar.
            </p>
          </div>

          <ul className="mt-12 rows border-b border-line">
            {levels.map((level) => (
              <li
                key={level.code}
                className="grid gap-4 py-7 transition-colors hover:bg-surface sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-8 sm:px-2"
              >
                <span className="font-display text-2xl font-semibold tracking-tighter">
                  {level.code}
                </span>
                <div>
                  <h3 className="text-[1rem] font-medium">{level.label}</h3>
                  <p className="mt-1 max-w-[42rem] text-sm leading-relaxed text-muted">
                    {level.summary}
                  </p>
                </div>
                <p className="font-mono text-[0.7rem] text-muted sm:text-right">
                  {level.units} unidades
                  <br />
                  {level.lessons} lições
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="progresso" className="border-b border-line">
        <div className="container-page py-20 lg:py-28">
          <div className="panel flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tighter sm:text-4xl">
                Comece hoje e veja a primeira frase sair certa.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                Sequência de dias, precisão por habilidade e a próxima revisão de cada
                palavra ficam salvas aqui no navegador. Sem conta para criar.
              </p>
            </div>
            <Link href="#curriculo" className="btn-solid shrink-0">
              Abrir a primeira lição
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
