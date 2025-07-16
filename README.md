# 🃏 Parrot Card Game

Projeto desenvolvido no bootcamp da Driven para praticar **JavaScript puro**, manipulação de DOM, lógica de jogo da memória e responsividade.

## 🎯 Objetivo

Criar um jogo da memória temático com cartas de papagaios, onde o usuário deve encontrar os pares corretos. O número de cartas é definido pelo jogador (de 4 a 14, sempre par).

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (sem bibliotecas externas)
- Git & GitHub

## 📦 Funcionalidades

- Solicitação da quantidade de cartas via `prompt`
- Validação de entrada (apenas números pares entre 4 e 14)
- Distribuição aleatória das cartas
- Virar cartas ao clicar
- Verificação de pares
- Contador de jogadas
- Alerta de vitória: "Você ganhou em X jogadas!"
- (Bônus) Cronômetro em segundos
- (Bônus) Reinício do jogo após término

## 💡 Extras implementados

- Efeito visual de virada (flip 3D)
- Layout responsivo para desktop e mobile
- Elementos identificados com `data-identifier` para correção automática

## 📁 Estrutura

```bash
projeto4-parrotscardgame/
├── index.html
├── style.css
├── script.js
└── /assets
