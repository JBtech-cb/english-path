import type {
  Lesson,
  LevelCode,
  LevelOutline,
  Unit,
} from "@/lib/curriculum/types";
import { a1Outline } from "./a1";
import { unit1 } from "./a1/unit-1";

/**
 * O currículo tem quatro níveis. Por enquanto só o A1 unidade 1 está escrito;
 * as unidades planejadas aparecem no índice com `available: false`.
 */
export const levelOutlines: LevelOutline[] = [
  a1Outline,
  {
    code: "A2",
    label: "Básico",
    summary:
      "Passado, futuro e comparativos. Você passa a falar de rotina, planos e experiências sem travar.",
    units: [],
  },
  {
    code: "B1",
    label: "Intermediário",
    summary:
      "Tempos perfeitos e condicionais, com textos e áudios mais longos para ganhar leitura e escuta.",
    units: [],
  },
  {
    code: "B2",
    label: "Intermediário alto",
    summary:
      "Estruturas avançadas, phrasal verbs e registro. Conversa com fluidez sobre temas abstratos.",
    units: [],
  },
];

export const publishedUnits: Unit[] = [unit1];

function normalize(value: string) {
  return value.toLowerCase();
}

export function getLevelOutline(levelSlug: string): LevelOutline | undefined {
  return levelOutlines.find(
    (level) => normalize(level.code) === normalize(levelSlug),
  );
}

export function getLevelUnits(level: LevelCode): Unit[] {
  return publishedUnits.filter((unit) => unit.level === level);
}

export function getUnit(
  levelSlug: string,
  unitSlug: string,
): Unit | undefined {
  return publishedUnits.find(
    (unit) =>
      normalize(unit.level) === normalize(levelSlug) &&
      normalize(unit.slug) === normalize(unitSlug),
  );
}

export function getLesson(unit: Unit, lessonSlug: string): Lesson | undefined {
  return unit.lessons.find(
    (lesson) => normalize(lesson.slug) === normalize(lessonSlug),
  );
}

export function countExercises(unit: Unit): number {
  return unit.lessons.reduce(
    (total, lesson) => total + lesson.exercises.length,
    0,
  );
}

export function lessonNeighbours(unit: Unit, lesson: Lesson) {
  const index = unit.lessons.findIndex((item) => item.slug === lesson.slug);
  return {
    previous: index > 0 ? unit.lessons[index - 1] : undefined,
    next:
      index >= 0 && index < unit.lessons.length - 1
        ? unit.lessons[index + 1]
        : undefined,
  };
}

/** Total de conteúdo já escrito, usado na página de currículo. */
export function writtenContent() {
  const lessons = publishedUnits.reduce(
    (total, unit) => total + unit.lessons.length,
    0,
  );
  const exercises = publishedUnits.reduce(
    (total, unit) => total + countExercises(unit),
    0,
  );
  return { units: publishedUnits.length, lessons, exercises };
}
