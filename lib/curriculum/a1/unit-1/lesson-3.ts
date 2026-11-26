import type { Lesson } from "@/lib/curriculum/types";

export const lesson3: Lesson = {
  slug: "licao-3",
  number: 3,
  title: "a, an, the",
  subtitle: "Um, uma, o, a — e como o inglês faz plural",
  goal:
    "Escolher entre a, an e the pelo som da palavra, e formar o plural sem trocar o artigo errado.",
  minutes: 15,
  skills: ["gramatica", "vocabulario", "leitura"],
  theory: [
    {
      heading: "a ou an: depende do som, não da letra",
      body: [
        "Os dois significam “um, uma” e só aparecem com coisa contável no singular. A escolha é pelo som que começa a palavra: an antes de som de vogal, a antes de som de consoante.",
        "Por isso hour leva an (o h é mudo, o som é de vogal) e university leva a (o som começa em “yu”). Ler em voz alta resolve mais rápido que decorar regra.",
      ],
      table: {
        columns: ["artigo", "quando", "exemplos"],
        rows: [
          ["a", "som de consoante", "a book, a car, a university"],
          ["an", "som de vogal", "an apple, an hour, an egg"],
          ["the", "coisa específica ou única", "the sun, the book on the table"],
        ],
      },
    },
    {
      heading: "the é para o que já se sabe qual é",
      body: [
        "the serve tanto para singular quanto para plural, e para contável e incontável. Ele aparece quando as duas pessoas da conversa sabem de qual coisa se fala, ou quando só existe uma.",
        "Se você apresenta algo pela primeira vez, use a ou an; na segunda menção, troque para the: “I have a dog. The dog is small.”",
      ],
      examples: [
        { en: "The sun is hot today.", pt: "O sol está quente hoje." },
        { en: "I have a dog. The dog is small.", pt: "Tenho um cachorro. O cachorro é pequeno." },
        { en: "She is a teacher.", pt: "Ela é professora." },
      ],
    },
    {
      heading: "Plural: quatro regras cobrem quase tudo",
      body: [
        "O plural regular é s. Depois de som de sibilante (s, ch, sh, x, z) entra es para o som ficar pronunciável. Palavra terminada em consoante + y troca o y por ies.",
        "Algumas palavras não seguem regra e precisam ser memorizadas: man → men, woman → women, child → children, person → people.",
        "E uma diferença importante do português: no plural genérico, o inglês não usa artigo. “They are teachers”, nunca “they are a teachers”.",
      ],
      table: {
        columns: ["regra", "singular", "plural"],
        rows: [
          ["+ s", "book", "books"],
          ["+ es depois de ch, sh, s, x", "watch", "watches"],
          ["consoante + y → ies", "city", "cities"],
          ["irregular", "child", "children"],
        ],
      },
    },
  ],
  vocabulary: [
    { term: "book", translation: "livro" },
    { term: "car", translation: "carro" },
    { term: "table", translation: "mesa" },
    { term: "city", translation: "cidade" },
    { term: "child", translation: "criança" },
    { term: "woman", translation: "mulher" },
    { term: "man", translation: "homem" },
    { term: "hour", translation: "hora", note: "o h não é pronunciado" },
    { term: "watch", translation: "relógio de pulso" },
    { term: "umbrella", translation: "guarda-chuva" },
  ],
  task: {
    title: "Olhe em volta e nomeie",
    body:
      "Escolha cinco objetos perto de você e diga cada um com o artigo certo em voz alta: “a chair”, “an eraser”, “the window”. Se errar o artigo, repita só a palavra com o som inicial até acertar.",
  },
  exercises: [
    {
      kind: "choice",
      id: "l3-e1",
      prompt: "I need ___ umbrella.",
      options: ["a", "an", "the"],
      answer: 1,
      explanation:
        "Umbrella começa com som de vogal, então an. A é para som de consoante.",
    },
    {
      kind: "fill",
      id: "l3-e2",
      prompt: "She is ___ teacher.",
      answer: ["a"],
      explanation:
        "Teacher começa com som de consoante: a teacher. Profissão no singular sempre leva artigo em inglês.",
    },
    {
      kind: "choice",
      id: "l3-e3",
      prompt: "___ sun is hot today.",
      options: ["A", "An", "The"],
      answer: 2,
      explanation:
        "Só existe um sol, e as duas pessoas sabem qual é: the sun.",
    },
    {
      kind: "fill",
      id: "l3-e4",
      prompt: "There are three ___ (book) on the table.",
      answer: ["books"],
      explanation: "Plural regular: book + s. Depois de número, sem artigo.",
    },
    {
      kind: "choice",
      id: "l3-e5",
      prompt: "Qual é o plural de “city”?",
      options: ["citys", "cities", "cityes"],
      answer: 1,
      explanation:
        "city termina em consoante + y, então o y vira ies: cities.",
    },
    {
      kind: "fill",
      id: "l3-e6",
      prompt: "Two ___ (child) are playing outside.",
      answer: ["children"],
      explanation:
        "Child é irregular: children. Não existe “childs”.",
    },
    {
      kind: "choice",
      id: "l3-e7",
      prompt: "___ hour is sixty minutes.",
      options: ["A", "An", "The"],
      answer: 1,
      explanation:
        "O h de hour é mudo, o som começa em vogal: an hour. A regra olha o som, não a letra.",
    },
    {
      kind: "fill",
      id: "l3-e8",
      prompt: "I have two ___ (watch).",
      answer: ["watches"],
      explanation:
        "watch termina em ch, então entra es: watches. Sem o es, o som ficaria impossível de pronunciar.",
    },
  ],
};
