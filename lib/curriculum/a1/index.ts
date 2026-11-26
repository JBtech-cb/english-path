import type { LevelOutline } from "@/lib/curriculum/types";
import { unit1 } from "./unit-1";

export const a1Outline: LevelOutline = {
  code: "A1",
  label: "Iniciante",
  summary:
    "Primeiras frases, presente simples e o vocabulário do dia a dia: casa, trabalho, comida e tempo.",
  units: [
    {
      slug: unit1.slug,
      number: unit1.number,
      title: unit1.title,
      goal: unit1.goal,
      lessons: unit1.lessons.length,
      available: true,
    },
    {
      slug: "unidade-2",
      number: 2,
      title: "My day",
      goal:
        "Contar a rotina com o presente simples, dizer as horas e falar de hábitos.",
      lessons: 4,
      available: false,
    },
    {
      slug: "unidade-3",
      number: 3,
      title: "My home",
      goal:
        "Descrever a casa com there is / there are, preposições de lugar e móveis.",
      lessons: 4,
      available: false,
    },
    {
      slug: "unidade-4",
      number: 4,
      title: "Food and shopping",
      goal:
        "Pedir comida, falar de quantidades e usar some, any e os contáveis.",
      lessons: 4,
      available: false,
    },
    {
      slug: "unidade-5",
      number: 5,
      title: "Getting around",
      goal:
        "Pedir informação, dar direções e falar do que você consegue fazer com can.",
      lessons: 4,
      available: false,
    },
    {
      slug: "unidade-6",
      number: 6,
      title: "Past and plans",
      goal:
        "Contar o que aconteceu com was / were e o que vai acontecer com going to. Fecha o A1.",
      lessons: 4,
      available: false,
    },
  ],
};
