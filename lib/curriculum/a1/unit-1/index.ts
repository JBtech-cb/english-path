import type { Unit } from "@/lib/curriculum/types";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";

export const unit1: Unit = {
  level: "A1",
  slug: "unidade-1",
  number: 1,
  title: "Hello, I am…",
  description:
    "O começo de tudo: dizer quem você é, de onde vem e como está. A unidade instala o verbo to be, que vai sustentar metade do A1.",
  goal:
    "Ao terminar as quatro lições, você se apresenta em uma conversa curta e entende as perguntas que fazem para você.",
  lessons: [lesson1, lesson2, lesson3, lesson4],
};
