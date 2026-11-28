# English Path

Sistema de aprendizado de inglês por atividades, no estilo de um app de lições curtas: você aprende fazendo, erra, recebe a correção na hora e revisa no ritmo certo.

Currículo próprio (A1 → B2) em situações reais — dia a dia e trabalho — com exercícios variados, áudio, fala, repetição espaçada, streak e progresso salvo no aparelho.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Zustand com persist (progresso no navegador, sem back-end na v1)
- Conteúdo do currículo em TypeScript puro
- Voz: Web Speech API (síntese para o áudio, reconhecimento para a fala), com gravação como alternativa

## Método

1. **Produzir, não reconhecer** — toda atividade termina com você montando, digitando ou falando.
2. **Frase inteira, não palavra solta** — blocos prontos (`Can I have…?`, `I'm working on…`).
3. **Revisão espaçada** — o que você erra ou acerta com esforço volta em 1, 3, 7, 16 e 35 dias.
4. **Misturar o já visto** — a lição nova sempre traz itens antigos no meio.
5. **Sessões curtas e diárias** — 3, 10 ou 20 minutos, cabendo no ônibus e no intervalo.
6. **Gramática depois do erro** — a explicação aparece em uma ou duas linhas, na hora da correção.

## Como é uma sessão

| Modo | Tempo | O que tem |
|---|---|---|
| Revisão rápida | 3 min | 10 itens que estavam para voltar hoje |
| Lição nova | 7–10 min | 12 a 15 atividades de uma situação, com 3 itens antigos misturados |
| Sessão completa | 20 min | revisão + lição nova + tarefa de fala de 30 segundos |

Cada unidade tem 3 lições + 1 checkpoint. O checkpoint usa a unidade em formato de situação, não de prova de gramática.

## Tipos de atividade

Montar a frase com banco de palavras · completar digitando · escolher pelo sentido · ouvir e escrever (ditado) · ouvir e escolher · falar no microfone · ligar pares · ordenar o diálogo · achar o erro · responder em contexto.

## Escopo

6 unidades por nível (A1, A2, B1, B2), 3 lições + checkpoint por unidade, com ~15 atividades por lição.

Funcionalidades entregues até o dia 24:

1. Motor de atividades com correção imediata e dica
2. Áudio e fala (ditado, escuta de diálogo, microfone)
3. Revisão espaçada com fila diária e retorno dos erros
4. Progresso salvo: streak, XP, meta diária, selos "eu consigo…"
5. Cenários de sobrevivência e de trabalho em diálogo interativo
6. Checkpoints e teste de nível adaptativo
7. PWA instalável e offline no celular
8. Site publicado, com link público

## Como o projeto é construído

24 dias (4 semanas × 6, com um dia de descanso por semana). Cada dia entrega uma parte do motor e conteúdo novo, em commits próprios.

Dias 1 e 2 já estão no ar: base do site, tema, modelo de dados do currículo e a unidade 1 do A1.

### Semana 1 — o motor interativo

| Dia | Conteúdo | Código |
|---|---|---|
| 1 | — | Setup Next+TS+Tailwind, tema, layout, home |
| 2 | A1 · Unidade 1 (to be, pronomes) | Modelo de dados do currículo + páginas de nível, unidade e lição |
| 3 | A1 · Unidade 1 no formato novo + Unidade 2 (rotina, presente simples) | Motor de atividades v1: montar frase, completar digitando, escolher, feedback com dica |
| 4 | A1 · Unidade 3 (casa: there is/are, preposições) | Áudio e fala: voz do navegador, ditado, microfone |
| 5 | A1 · Unidade 4 (comida: pedir, quantidades) | Revisão espaçada: fila do dia, erros voltam, intervalos 1/3/7/16/35 |
| 6 | — | Progresso salvo no aparelho, PWA e deploy na Vercel (link público) |
| 7 | Descanso | — |

### Semana 2 — se virar no dia a dia e no trabalho

| Dia | Conteúdo | Código |
|---|---|---|
| 8 | A1 · Unidade 5 (direções, transporte) | Diálogos interativos: ordenar conversa, responder em contexto |
| 9 | A1 · Unidade 6 (passado e planos) — fecha o A1 | Jogo de transformação: afirmativa ↔ negativa ↔ pergunta |
| 10 | Cenários de sobrevivência (mercado, farmácia, banco, hotel) | Checkpoint adaptativo + selos "eu consigo…" |
| 11 | Trabalho 1: se apresentar, small talk, e-mail curto | Escrita com checklist e banco de frases |
| 12 | Trabalho 2: stand-up e reunião | Escuta de áudios de reunião + fala com microfone |
| 13 | A2 · Unidade 1 (passado simples) | Narrativa em 5 frases com correção imediata |
| 14 | Descanso | — |

### Semana 3 — A2 completo

| Dia | Conteúdo | Código |
|---|---|---|
| 15 | A2 · Unidade 2 (futuro, planos, agendar) | Convites: escrever, aceitar, recusar |
| 16 | A2 · Unidade 3 (comparar, recomendar, negociar) | Simulação de compra e de serviço |
| 17 | A2 · Unidade 4 (present perfect: experiências) | Mini-entrevista "já fiz / nunca fiz" |
| 18 | A2 · Unidade 5 (pedir, oferecer, reclamar) | Role-play de atendimento e reclamação |
| 19 | A2 · Unidade 6 (conectores, frases longas) | Checkpoint do A2 |
| 20 | Simulação "um dia em inglês": 5 situações encadeadas | Modo desafio com tempo e placar |
| 21 | Descanso | — |

### Semana 4 — B1, publicação e continuidade

| Dia | Conteúdo | Código |
|---|---|---|
| 22 | B1 · Unidade 1 (opinar, concordar, discordar) | Áudios com sotaques diferentes |
| 23 | B1 · Unidade 2 (telefone, vídeo, e-mail profissional) | Teste de nível B1 + revisão de escrita |
| 24 | Fechamento | Painel de progresso, PWA no celular, deploy final e plano dos 90 dias seguintes |

## Prazo realista

Os 24 dias entregam um A2 funcional, com o A1 completo em atividades e o começo do B1, além do app publicado no celular. B2 leva meses (500–600 horas de contato com o idioma); o dia 24 entrega o sistema pronto e o plano de continuidade, não um certificado.

## Fora de escopo (v1)

Back-end próprio, pagamentos, login obrigatório, app nativo, correção por IA.
