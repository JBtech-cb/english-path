# English Path

Sistema completo de aprendizado de inglês — do zero ao B2.

Currículo próprio (A1 → B2), lições com gramática e vocabulário, exercícios corrigidos na hora, revisão espaçada (SRS), leitura guiada, escuta com áudio, escrita com checklist e prática de fala.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Zustand com persist (progresso no navegador, sem back-end na v1)
- Conteúdo do currículo em TypeScript puro

## Escopo

24 unidades (6 por nível), ~96 lições e ~600 cards de vocabulário, cobrindo A1, A2, B1 e B2.

Funcionalidades entregues ao final do plano:

1. Teste de colocação adaptativo com nível estimado
2. Plano diário de 15–20 minutos
3. Lições com gramática, exemplos e exercícios
4. Flashcards com repetição espaçada
5. Leitura guiada, escuta, escrita e fala
6. Progresso: streak, XP, precisão, gráfico semanal
7. PWA instalável e offline, com export/import do progresso

## Como o projeto é construído

O trabalho é dividido em 24 dias (4 semanas × 6 dias). Cada dia entrega conteúdo novo e uma parte funcional do sistema, com commits próprios.

### Semana 1 — Fundação e A1

| Dia | Conteúdo | Código |
|---|---|---|
| 1 | — | Setup Next+TS+Tailwind, tema, layout, home |
| 2 | A1 · Unid 1 (To be, pronomes) | Modelo de dados do currículo + types |
| 3 | A1 · Unid 2 (Artigos, plural) | Páginas de níveis e lista de unidades |
| 4 | A1 · Unid 3 (Present simple) | Página de lição com blocos |
| 5 | A1 · Unid 4 (Questões, do/does) | Motor de exercícios |
| 6 | A1 · Unids 5 e 6 | Home "continuar de onde parei" |

### Semana 2 — A2, prática e memória

| Dia | Conteúdo | Código |
|---|---|---|
| 7 | A2 · Unids 1 e 2 (Past simple) | Formato de lição reusado em A2 |
| 8 | A2 · Unid 3 (Futuro) | Flashcards + baralho SRS |
| 9 | A2 · Unid 4 (Comparativos) | Sessão de revisão diária + streak |
| 10 | A2 · Unid 5 (Present perfect) | XP, progresso por habilidade, schema versionado |
| 11 | A2 · Unid 6 (Modais) | Escuta de palavras e frases |
| 12 | — | Testes de fim de unidade |

### Semana 3 — B1 e as 4 habilidades

| Dia | Conteúdo | Código |
|---|---|---|
| 13 | B1 · Unids 1 e 2 | Textos longos e gramática avançada |
| 14 | B1 · Unid 3 (Condicionais) | Leitura guiada com glossário |
| 15 | B1 · Unid 4 (Relative clauses) | Escuta com áudio gerado |
| 16 | B1 · Unid 5 (Passive voice) | Módulo de escrita |
| 17 | B1 · Unid 6 (Phrasal verbs) | Módulo de fala com microfone |
| 18 | — | Teste de nível B1 |

### Semana 4 — B2, avaliação e publicação

| Dia | Conteúdo | Código |
|---|---|---|
| 19 | B2 · Unids 1 e 2 | Conteúdo B2 no formato de lição |
| 20 | B2 · Unid 3 | Teste de colocação adaptativo |
| 21 | B2 · Unid 4 | Plano diário gerado |
| 22 | B2 · Unid 5 | Dashboard e export de progresso |
| 23 | B2 · Unid 6 | PWA, celular e acessibilidade |
| 24 | Revisão | README final, deploy e polimento |

## Fora de escopo (v1)

Back-end próprio, pagamentos, login obrigatório, app nativo, correção por IA.
