import type { Lesson } from "@/lib/curriculum/types";

export const lesson4: Lesson = {
  slug: "licao-4",
  number: 4,
  title: "Nice to meet you",
  subtitle: "Nome, idade, origem — e os números de 0 a 20",
  goal:
    "Se apresentar e apresentar outra pessoa em uma conversa curta, com nome, idade, origem e nacionalidade.",
  minutes: 18,
  skills: ["gramatica", "vocabulario", "fala", "escuta"],
  theory: [
    {
      heading: "As quatro perguntas de uma apresentação",
      body: [
        "Toda primeira conversa em inglês gira em torno das mesmas perguntas. Elas já vêm com o verbo na posição de pergunta, então basta encaixar a informação.",
        "What's your name? pede o nome. How old are you? pede a idade. Where are you from? pede o país ou a cidade. What do you do? pede a profissão.",
      ],
      table: {
        columns: ["pergunta", "tradução", "resposta comum"],
        rows: [
          ["What's your name?", "Qual é o seu nome?", "I'm Ana. / My name is Ana."],
          ["How old are you?", "Quantos anos você tem?", "I'm twenty-one."],
          ["Where are you from?", "De onde você é?", "I'm from Brazil."],
          ["What do you do?", "O que você faz?", "I'm a student."],
        ],
      },
    },
    {
      heading: "my, your, his, her",
      body: [
        "Para falar de quem é alguma coisa, o inglês troca o pronome por um possessivo. Eles concordam com o dono, não com a coisa possuída.",
        "His é dele, her é dela. Repare que o possessivo nunca leva apóstrofo: his name, não “hi's name”.",
      ],
      table: {
        columns: ["pronome", "possessivo", "exemplo"],
        rows: [
          ["I", "my", "my name"],
          ["you", "your", "your city"],
          ["he", "his", "his friend"],
          ["she", "her", "her teacher"],
          ["we", "our", "our class"],
          ["they", "their", "their school"],
        ],
      },
    },
    {
      heading: "Números de 0 a 20",
      body: [
        "Até doze, cada número tem nome próprio. De treze a dezenove, o final teen indica “-ze”. As dezenas redondas terminam em ty. A diferença de som entre thirteen e thirty é a que mais confunde na escuta.",
        "Para idade, o inglês usa o verbo to be, não “have”: I'm twenty-one. Nunca “I have twenty-one years”.",
      ],
      table: {
        columns: ["0–6", "7–13", "14–20"],
        rows: [
          ["zero, one, two", "seven, eight, nine", "fourteen, fifteen, sixteen"],
          ["three, four, five", "ten, eleven, twelve", "seventeen, eighteen, nineteen"],
          ["six", "thirteen", "twenty"],
        ],
      },
    },
    {
      heading: "Países e nacionalidades",
      body: [
        "O nome do país e a nacionalidade são palavras diferentes, e a nacionalidade sempre começa com maiúscula em inglês.",
        "Uma armadilha para brasileiros: o país é Brazil com z, e a nacionalidade é Brazilian. Spain vira Spanish, e não “Spaniard” no dia a dia.",
      ],
      table: {
        columns: ["país", "nacionalidade"],
        rows: [
          ["Brazil", "Brazilian"],
          ["Portugal", "Portuguese"],
          ["Spain", "Spanish"],
          ["France", "French"],
          ["Italy", "Italian"],
          ["Japan", "Japanese"],
          ["the United States", "American"],
          ["England", "English"],
        ],
      },
      examples: [
        { en: "Where are you from? — I'm from Brazil. I'm Brazilian.", pt: "De onde você é? — Sou do Brasil. Sou brasileiro." },
        { en: "This is Kenji. He's from Japan.", pt: "Este é o Kenji. Ele é do Japão." },
        { en: "Nice to meet you. — Nice to meet you too.", pt: "Prazer em conhecer você. — O prazer é meu." },
      ],
    },
  ],
  vocabulary: [
    { term: "nice to meet you", translation: "prazer em conhecer você" },
    { term: "name", translation: "nome" },
    { term: "age", translation: "idade" },
    { term: "years old", translation: "anos de idade" },
    { term: "country", translation: "país" },
    { term: "city", translation: "cidade" },
    { term: "nationality", translation: "nacionalidade" },
    { term: "birthday", translation: "aniversário" },
    { term: "to live", translation: "morar, viver" },
    { term: "job", translation: "trabalho, profissão" },
  ],
  task: {
    title: "Grave trinta segundos",
    body:
      "Grave no celular uma apresentação de trinta segundos com as quatro informações: nome, idade, origem e o que você faz. Ouça uma vez e conte quantas vezes esqueceu o verbo to be. Regrave corrigindo.",
  },
  exercises: [
    {
      kind: "fill",
      id: "l4-e1",
      prompt: "What ___ your name?",
      answer: ["is", "'s"],
      hint: "what's = what is",
      explanation:
        "Name é singular, então is: What is your name? Na fala, vira what's.",
    },
    {
      kind: "choice",
      id: "l4-e2",
      prompt: "How old ___ you?",
      options: ["is", "are", "am"],
      answer: 1,
      explanation:
        "You pede are. A pergunta é How old are you?, e a resposta usa o mesmo verbo: I'm twenty-one.",
    },
    {
      kind: "fill",
      id: "l4-e3",
      prompt: "Where ___ you from?",
      answer: ["are"],
      explanation:
        "A pergunta de origem é Where are you from? — o from fica no fim.",
    },
    {
      kind: "choice",
      id: "l4-e4",
      prompt: "I'm from Brazil. I'm ___.",
      options: ["Brazilian", "Brazil", "Brasilian"],
      answer: 0,
      explanation:
        "A nacionalidade é Brazilian, com z, igual ao nome do país. Brazil é o lugar, não a pessoa.",
    },
    {
      kind: "fill",
      id: "l4-e5",
      prompt: "She is from Japan. She is ___.",
      answer: ["japanese"],
      explanation:
        "Japan → Japanese. Nacionalidade em inglês sempre com maiúscula: Japanese.",
    },
    {
      kind: "choice",
      id: "l4-e6",
      prompt: "“How old are you?” — “___”",
      options: [
        "I'm twenty-one.",
        "I have twenty-one years.",
        "I'm twenty-one years.",
      ],
      answer: 0,
      explanation:
        "Idade usa to be, não have: I'm twenty-one. “I have ... years” é tradução literal do português e soa errado em inglês.",
    },
    {
      kind: "fill",
      id: "l4-e7",
      prompt: "This is Ana. ___ name is Ana.",
      answer: ["her"],
      hint: "possessivo de she",
      explanation:
        "O possessivo de she é her: her name. His seria para um homem.",
    },
    {
      kind: "fill",
      id: "l4-e8",
      prompt: "This is Lucas. ___ name is Lucas.",
      answer: ["his"],
      hint: "possessivo de he",
      explanation: "O possessivo de he é his: his name.",
    },
    {
      kind: "choice",
      id: "l4-e9",
      prompt: "Qual número é 17?",
      options: ["seventy", "seventeen", "seven"],
      answer: 1,
      explanation:
        "Seventeen é 17. Seventy é 70 e seven é 7 — cuidado com o final teen e ty na escuta.",
    },
  ],
};
