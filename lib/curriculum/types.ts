export type LevelCode = "A1" | "A2" | "B1" | "B2";

export type Skill =
  | "gramatica"
  | "vocabulario"
  | "escuta"
  | "leitura"
  | "escrita"
  | "fala";

export const skillLabels: Record<Skill, string> = {
  gramatica: "gramática",
  vocabulario: "vocabulário",
  escuta: "escuta",
  leitura: "leitura",
  escrita: "escrita",
  fala: "fala",
};

/** Exercício de múltipla escolha: `answer` é o índice da alternativa certa. */
export type ChoiceExercise = {
  kind: "choice";
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

/**
 * Exercício de completar. Use `___` no prompt para marcar a lacuna.
 * `answer` lista as formas aceitas (contraída e completa, por exemplo).
 */
export type FillExercise = {
  kind: "fill";
  id: string;
  prompt: string;
  answer: string[];
  hint?: string;
  explanation: string;
};

export type Exercise = ChoiceExercise | FillExercise;

export type VocabularyItem = {
  term: string;
  translation: string;
  note?: string;
};

export type Example = {
  en: string;
  pt: string;
};

export type TheoryTable = {
  columns: string[];
  rows: string[][];
};

/** Um bloco de explicação. O corpo vem em parágrafos curtos. */
export type TheorySection = {
  heading: string;
  body: string[];
  table?: TheoryTable;
  examples?: Example[];
};

export type LessonTask = {
  title: string;
  body: string;
};

export type Lesson = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  /** O que a pessoa consegue fazer ao terminar, em uma frase. */
  goal: string;
  minutes: number;
  skills: Skill[];
  theory: TheorySection[];
  vocabulary: VocabularyItem[];
  task: LessonTask;
  exercises: Exercise[];
};

export type Unit = {
  level: LevelCode;
  slug: string;
  number: number;
  title: string;
  description: string;
  goal: string;
  lessons: Lesson[];
};

/** Uma unidade no índice do nível, mesmo quando ainda não foi escrita. */
export type UnitOutline = {
  slug: string;
  number: number;
  title: string;
  goal: string;
  /** Número de lições previstas na unidade. */
  lessons: number;
  available: boolean;
};

export type LevelOutline = {
  code: LevelCode;
  label: string;
  summary: string;
  units: UnitOutline[];
};
