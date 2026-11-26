export const siteConfig = {
  name: "English Path",
  tagline: "Do zero ao B2, 15 minutos por dia",
  description:
    "Sistema completo de aprendizado de inglês: lições curtas, revisão espaçada e as quatro habilidades em um só lugar.",
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Currículo", href: "/curriculo" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Progresso", href: "/#progresso" },
];

export const firstLessonHref = "/curriculo/a1/unidade-1/licao-1";

export type Level = {
  code: "A1" | "A2" | "B1" | "B2";
  label: string;
  summary: string;
  units: number;
  lessons: number;
};

export const levels: Level[] = [
  {
    code: "A1",
    label: "Iniciante",
    summary:
      "Primeiras frases, presente simples e o vocabulário do dia a dia: casa, trabalho, comida e tempo.",
    units: 6,
    lessons: 24,
  },
  {
    code: "A2",
    label: "Básico",
    summary:
      "Passado, futuro e comparativos. Você passa a falar de rotina, planos e experiências sem travar.",
    units: 6,
    lessons: 24,
  },
  {
    code: "B1",
    label: "Intermediário",
    summary:
      "Tempos perfeitos e condicionais, com textos e áudios mais longos para ganhar leitura e escuta.",
    units: 6,
    lessons: 24,
  },
  {
    code: "B2",
    label: "Intermediário alto",
    summary:
      "Estruturas avançadas, phrasal verbs e registro. Conversa com fluidez sobre temas abstratos.",
    units: 6,
    lessons: 24,
  },
];

export const curriculumTotals = {
  units: levels.reduce((total, level) => total + level.units, 0),
  lessons: levels.reduce((total, level) => total + level.lessons, 0),
  words: 600,
  skills: 4,
};
