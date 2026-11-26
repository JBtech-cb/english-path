"use client";

import { useState } from "react";
import type { Exercise } from "@/lib/curriculum/types";

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isCorrect(exercise: Exercise, given: string) {
  if (!given) return false;
  if (exercise.kind === "choice") {
    return Number(given) === exercise.answer;
  }
  return exercise.answer.some((option) => normalize(option) === normalize(given));
}

function PenCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 text-pen">
      <path
        d="M3.5 13.5 8 18 20.5 5.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LessonPractice({ exercises }: { exercises: Exercise[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});

  const checked = exercises.filter((exercise) => exercise.id in results).length;
  const right = Object.values(results).filter(Boolean).length;
  const finished = checked === exercises.length;

  function setAnswer(id: string, value: string) {
    setAnswers((previous) => ({ ...previous, [id]: value }));
    setResults((previous) => {
      if (!(id in previous)) return previous;
      const next = { ...previous };
      delete next[id];
      return next;
    });
  }

  function check(exercise: Exercise) {
    const given = answers[exercise.id];
    if (!given) return;
    const correct = isCorrect(exercise, given);
    setResults((previous) => ({ ...previous, [exercise.id]: correct }));
  }

  function reset() {
    setAnswers({});
    setResults({});
  }

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-3">
        <p className="font-mono text-[0.7rem] text-muted" aria-live="polite">
          {right} de {exercises.length} certas
          <span className="text-line"> / </span>
          {checked} conferidas
        </p>
        <button
          type="button"
          onClick={reset}
          className="font-mono text-[0.7rem] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          recomeçar
        </button>
      </div>

      <ol className="mt-6 space-y-4">
        {exercises.map((exercise, index) => {
          const given = answers[exercise.id] ?? "";
          const result = results[exercise.id];
          const done = result === true;

          return (
            <li key={exercise.id} className="panel p-5 sm:p-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[0.7rem] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[0.7rem] text-muted">
                  {exercise.kind === "choice" ? "escolha" : "complete"}
                </span>
              </div>

              <p className="mt-4 text-[1.05rem] leading-relaxed tracking-tight">
                {exercise.kind === "fill" ? (
                  <FillPrompt exercise={exercise} value={given} done={done} onChange={(value) => setAnswer(exercise.id, value)} />
                ) : (
                  exercise.prompt
                )}
              </p>

              {exercise.kind === "choice" ? (
                <ul className="mt-4 rows border-b border-line" role="group" aria-label="Alternativas">
                  {exercise.options.map((option, optionIndex) => {
                    const selected = given === String(optionIndex);
                    const correctOption = optionIndex === exercise.answer;

                    return (
                      <li key={option}>
                        <button
                          type="button"
                          onClick={() => setAnswer(exercise.id, String(optionIndex))}
                          disabled={done}
                          aria-pressed={selected}
                          className="flex w-full items-center gap-4 py-2.5 text-left disabled:cursor-default"
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center font-mono text-[0.65rem] ${
                              selected
                                ? "bg-ink text-paper"
                                : "border border-line text-muted"
                            }`}
                          >
                            {String.fromCharCode(97 + optionIndex)}
                          </span>
                          <span
                            className={
                              selected
                                ? "text-[0.95rem] font-medium text-ink"
                                : "text-[0.95rem] text-muted"
                            }
                          >
                            {option}
                          </span>
                          {result !== undefined && correctOption ? (
                            <span className="ml-auto">
                              <PenCheck />
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : null}

              <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
                <Feedback result={result} explanation={exercise.explanation} />
                {!done ? (
                  <button
                    type="button"
                    onClick={() => check(exercise)}
                    disabled={!given}
                    className="btn-outline shrink-0 px-4 py-2 text-[0.8rem] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    conferir
                  </button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      {finished ? (
        <p className="mt-6 font-mono text-[0.7rem] text-muted">
          {right} de {exercises.length} certas.{" "}
          {right === exercises.length
            ? "Lição fechada. Volte amanhã pela revisão."
            : "Reveja as que ficaram em aberto antes de seguir para a próxima lição."}
        </p>
      ) : null}
    </div>
  );
}

function FillPrompt({
  exercise,
  value,
  done,
  onChange,
}: {
  exercise: Extract<Exercise, { kind: "fill" }>;
  value: string;
  done: boolean;
  onChange: (value: string) => void;
}) {
  const [before, after = ""] = exercise.prompt.split("___");

  return (
    <span>
      {before}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") event.currentTarget.blur();
        }}
        disabled={done}
        aria-label="sua resposta"
        autoComplete="off"
        spellCheck={false}
        className="mx-1 w-24 border-b border-dashed border-ink/50 bg-transparent px-1 text-center font-mono text-[0.95rem] text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-solid focus:border-ink disabled:border-solid disabled:border-ink"
        placeholder={exercise.hint ? "?" : "..."}
      />
      {after}
      {exercise.hint ? (
        <span className="mt-2 block font-mono text-[0.7rem] text-muted">
          {exercise.hint}
        </span>
      ) : null}
    </span>
  );
}

function Feedback({
  result,
  explanation,
}: {
  result: boolean | undefined;
  explanation: string;
}) {
  if (result === undefined) return <span />;

  return (
    <div className="max-w-[38rem]">
      {result ? (
        <p className="flex items-center gap-2 font-mono text-[0.7rem] text-ink">
          <PenCheck /> correto
        </p>
      ) : (
        <p className="font-mono text-[0.7rem] text-pen">
          ainda não — leia a explicação e tente de novo
        </p>
      )}
      <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">
        {explanation}
      </p>
    </div>
  );
}
