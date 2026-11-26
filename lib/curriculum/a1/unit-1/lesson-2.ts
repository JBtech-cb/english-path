import type { Lesson } from "@/lib/curriculum/types";

export const lesson2: Lesson = {
  slug: "licao-2",
  number: 2,
  title: "I'm not, are you?",
  subtitle: "Negar e perguntar com o mesmo verbo",
  goal:
    "Negar uma informação e fazer perguntas simples com to be, incluindo as respostas curtas que o inglês exige.",
  minutes: 15,
  skills: ["gramatica", "escuta", "fala"],
  theory: [
    {
      heading: "Negar é só acrescentar not",
      body: [
        "Na forma negativa, not entra depois do verbo. Nada de “não sou” separado no começo da frase: a ordem continua sujeito + verbo + not.",
        "Com I existe uma forma contraída própria, e ela é obrigatória: I'm not. “amn't” não existe em inglês.",
      ],
      table: {
        columns: ["sujeito", "negativa", "contração"],
        rows: [
          ["I", "I am not", "I'm not"],
          ["you", "you are not", "you aren't"],
          ["he", "he is not", "he isn't"],
          ["she", "she is not", "she isn't"],
          ["it", "it is not", "it isn't"],
          ["we", "we are not", "we aren't"],
          ["they", "they are not", "they aren't"],
        ],
      },
      examples: [
        { en: "I'm not tired.", pt: "Eu não estou cansado." },
        { en: "She isn't a teacher.", pt: "Ela não é professora." },
        { en: "They aren't at home.", pt: "Eles não estão em casa." },
      ],
    },
    {
      heading: "Perguntar é inverter",
      body: [
        "Para transformar a afirmativa em pergunta, o verbo passa para a frente do sujeito. Se a frase é “you are ready”, a pergunta é “are you ready?”.",
        "A entonação sobe no fim, e o ponto final vira interrogação. Não existe verbo auxiliar extra como o “do” de outras frases — com to be, a inversão basta.",
      ],
      table: {
        columns: ["afirmativa", "pergunta"],
        rows: [
          ["You are Brazilian.", "Are you Brazilian?"],
          ["He is your brother.", "Is he your brother?"],
          ["They are here.", "Are they here?"],
        ],
      },
    },
    {
      heading: "Resposta curta: sem “yes, I am a student”",
      body: [
        "Em inglês, a resposta curta repete o pronome e o verbo, e não usa contração na resposta positiva. É “Yes, I am”, nunca “Yes, I'm”.",
        "Na negativa, a contração é o normal: “No, I'm not”, “No, she isn't”.",
      ],
      examples: [
        { en: "Are you from Brazil? — Yes, I am.", pt: "Você é do Brasil? — Sim." },
        { en: "Is she a doctor? — No, she isn't.", pt: "Ela é médica? — Não." },
        { en: "Are they ready? — Yes, they are.", pt: "Eles estão prontos? — Sim." },
      ],
    },
  ],
  vocabulary: [
    { term: "yes", translation: "sim" },
    { term: "no", translation: "não" },
    { term: "not", translation: "não", note: "vem depois do verbo" },
    { term: "sorry", translation: "desculpe, sinto muito" },
    { term: "excuse me", translation: "com licença" },
    { term: "please", translation: "por favor" },
    { term: "thanks", translation: "obrigado, obrigada" },
    { term: "welcome", translation: "bem-vindo, bem-vinda" },
    { term: "really?", translation: "sério?, é mesmo?" },
    { term: "ready", translation: "pronto, pronta" },
  ],
  task: {
    title: "Pergunte e responda sozinho",
    body:
      "Escolha três pessoas da sua casa ou do trabalho e faça a mesma pergunta em voz alta: “Is she tired?”, “Are they at home?”. Responda em seguida com a resposta curta completa: “No, she isn't.” O objetivo é a inversão sair sem pensar.",
  },
  exercises: [
    {
      kind: "choice",
      id: "l2-e1",
      prompt: "I ___ from Spain.",
      options: ["am not", "isn't", "aren't"],
      answer: 0,
      explanation:
        "Com I, a negativa é am not. A contração é I'm not — “amn't” não existe.",
    },
    {
      kind: "fill",
      id: "l2-e2",
      prompt: "She ___ a doctor.",
      answer: ["isn't", "is not"],
      hint: "negativa de is",
      explanation: "is not vira isn't. She isn't a doctor.",
    },
    {
      kind: "choice",
      id: "l2-e3",
      prompt: "“___ you tired?”",
      options: ["Are", "Is", "Am"],
      answer: 0,
      explanation:
        "You pede are, e na pergunta o verbo vem antes: Are you tired?",
    },
    {
      kind: "fill",
      id: "l2-e4",
      prompt: "___ he your brother?",
      answer: ["is"],
      explanation: "He pede is. Na pergunta: Is he your brother?",
    },
    {
      kind: "choice",
      id: "l2-e5",
      prompt: "Resposta curta para “Are you Brazilian?”",
      options: ["Yes, I am.", "Yes, I'm.", "Yes, you are."],
      answer: 0,
      explanation:
        "A resposta positiva não usa contração: Yes, I am. “Yes, I'm” só aparece quando a frase continua.",
    },
    {
      kind: "fill",
      id: "l2-e6",
      prompt: "They ___ at home.",
      answer: ["aren't", "are not"],
      hint: "negativa de are",
      explanation: "are not vira aren't. They aren't at home.",
    },
    {
      kind: "choice",
      id: "l2-e7",
      prompt: "“Is it your bag?” — “No, it ___.”",
      options: ["isn't", "aren't", "not is"],
      answer: 0,
      explanation:
        "It retoma is, então a negativa é it isn't. A ordem “not is” nunca existe em inglês.",
    },
    {
      kind: "fill",
      id: "l2-e8",
      prompt: "___ we late?",
      answer: ["are"],
      explanation: "We pede are, e a pergunta começa pelo verbo: Are we late?",
    },
  ],
};
