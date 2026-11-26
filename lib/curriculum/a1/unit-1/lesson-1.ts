import type { Lesson } from "@/lib/curriculum/types";

export const lesson1: Lesson = {
  slug: "licao-1",
  number: 1,
  title: "I am, you are, he is",
  subtitle: "Quem é quem na frase, e o verbo que muda com cada pessoa",
  goal:
    "Apresentar você e outra pessoa usando o verbo to be na forma afirmativa, sem esquecer o sujeito.",
  minutes: 15,
  skills: ["gramatica", "vocabulario", "fala"],
  theory: [
    {
      heading: "Toda frase inglesa tem sujeito",
      body: [
        "Em português a gente diz “estou cansado” e todo mundo entende. Em inglês não existe essa liberdade: a frase precisa dizer quem, sempre. O sujeito pode ser um nome (Ana, my brother) ou um pronome.",
        "São sete pronomes, e nenhum deles tem tradução opcional. Repare que you serve para uma pessoa e para várias — só o contexto diz.",
      ],
      table: {
        columns: ["pronome", "tradução", "quando usar"],
        rows: [
          ["I", "eu", "quem fala"],
          ["you", "você, vocês", "com quem se fala"],
          ["he", "ele", "homem ou menino"],
          ["she", "ela", "mulher ou menina"],
          ["it", "ele, ela", "coisa, animal, lugar ou tempo"],
          ["we", "nós", "quem fala mais outra pessoa"],
          ["they", "eles, elas", "um grupo de pessoas ou coisas"],
        ],
      },
    },
    {
      heading: "O verbo to be tem três formas no presente",
      body: [
        "O verbo ser e estar é um só em inglês: to be. Ele muda conforme o sujeito, e não existe uma forma que sirva para todos. São três: am, is e are.",
        "A contração com apóstrofo é o que você vai ouvir em quase toda conversa. Ela não é informal demais: aparece em e-mail, série e entrevista.",
      ],
      table: {
        columns: ["sujeito", "forma completa", "contração"],
        rows: [
          ["I", "I am", "I'm"],
          ["you", "you are", "you're"],
          ["he", "he is", "he's"],
          ["she", "she is", "she's"],
          ["it", "it is", "it's"],
          ["we", "we are", "we're"],
          ["they", "they are", "they're"],
        ],
      },
      examples: [
        { en: "I am Ana.", pt: "Eu sou a Ana." },
        { en: "She is tired.", pt: "Ela está cansada." },
        { en: "We are from Brazil.", pt: "Nós somos do Brasil." },
        { en: "They are students.", pt: "Eles são estudantes." },
        { en: "It is cold today.", pt: "Está frio hoje." },
      ],
    },
    {
      heading: "Um verbo, quatro usos",
      body: [
        "To be não é só “ser”. Ele também descreve estado, origem e idade — os quatro assuntos de uma apresentação.",
        "Nome: I'm Ana. Estado: I'm fine. Origem: She's from Portugal. Idade: He's nineteen. Em todos os casos, o inglês usa o mesmo verbo onde o português trocaria entre ser e estar.",
      ],
    },
  ],
  vocabulary: [
    { term: "hello", translation: "olá" },
    { term: "hi", translation: "oi", note: "mais informal que hello" },
    { term: "name", translation: "nome" },
    { term: "student", translation: "estudante, aluno" },
    { term: "teacher", translation: "professor, professora" },
    { term: "friend", translation: "amigo, amiga" },
    { term: "from", translation: "de, vindo de", note: "para origem" },
    { term: "tired", translation: "cansado, cansada" },
    { term: "happy", translation: "feliz" },
    { term: "Brazil", translation: "Brasil" },
  ],
  task: {
    title: "Diga em voz alta antes de seguir",
    body:
      "Apresente-se três vezes seguidas, mudando só o final: “Hi, I'm ___. I'm from ___.” Depois fale de alguém: “This is ___. He's a student.” Se travar, volte à tabela do to be — não decore a frase inteira.",
  },
  exercises: [
    {
      kind: "choice",
      id: "l1-e1",
      prompt: "Qual pronome completa a frase? “___ am a student.”",
      options: ["He", "I", "They"],
      answer: 1,
      explanation:
        "I é o único sujeito que usa am. He e They pedem is e are.",
    },
    {
      kind: "fill",
      id: "l1-e2",
      prompt: "She ___ my sister.",
      answer: ["is"],
      hint: "to be com she",
      explanation: "Com he, she e it, a forma é is. Contraída: she's.",
    },
    {
      kind: "choice",
      id: "l1-e3",
      prompt: "They ___ from Japan.",
      options: ["am", "is", "are"],
      answer: 2,
      explanation: "They é plural, então usa are. They're from Japan.",
    },
    {
      kind: "fill",
      id: "l1-e4",
      prompt: "We ___ happy today.",
      answer: ["are"],
      explanation: "We usa are. We're happy today.",
    },
    {
      kind: "choice",
      id: "l1-e5",
      prompt: "Qual é a contração de “he is”?",
      options: ["he's", "his", "hes"],
      answer: 0,
      explanation:
        "he's = he is. Cuidado: his é o possessivo (“o nome dele”), não é contração de verbo.",
    },
    {
      kind: "fill",
      id: "l1-e6",
      prompt: "It ___ cold in London.",
      answer: ["is"],
      explanation:
        "It fala do tempo e leva is. It's cold in London — “está frio em Londres”.",
    },
    {
      kind: "choice",
      id: "l1-e7",
      prompt: "“___ are a good teacher.”",
      options: ["He", "You", "She"],
      answer: 1,
      explanation:
        "Só you combina com are. He e She pediriam is: He is a good teacher.",
    },
    {
      kind: "fill",
      id: "l1-e8",
      prompt: "My friends ___ at home.",
      answer: ["are"],
      hint: "my friends = they",
      explanation:
        "My friends é plural, equivale a they, então usa are. Este é o erro mais comum de quem pensa em português: o sujeito é longo, mas a forma segue o plural.",
    },
  ],
};
