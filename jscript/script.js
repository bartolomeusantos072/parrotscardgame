const listaImagens = [
  "imagem/bobrossparrot.gif",
  "imagem/explodyparrot.gif",
  "imagem/metalparrot.gif",
  "imagem/revertitparrot.gif",
  "imagem/tripletsparrot.gif",
  "imagem/unicornparrot.gif",
  "imagem/fiestaparrot.gif"
];

let primeiraCarta = null;
let segundaCarta = null;
let bloqueiaClique = false;
let jogadas = 0;

function iniciarJogo() {
  let quantidade = 0;
  do {
    quantidade = prompt("Escolha uma quantidade de cartas (par, entre 4 e 14):");
  } while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0);

  document.querySelector("button").style.display = "none";
  gerarCartas(quantidade);
}

function gerarCartas(quantidade) {
  const imagensSelecionadas = listaImagens.slice(0, quantidade / 2);
  const cartas = [...imagensSelecionadas, ...imagensSelecionadas];
  embaralhar(cartas);

  const container = document.querySelector(".jogo-da-memoria");
  container.innerHTML = "";

  cartas.forEach(img => {
    container.innerHTML += `
      <div class="carta" data-identifier="card" onclick="escolherCarta(this)">
        <img class="img-frente" data-identifier="front-face" src="imagem/front.png" />
        <img class="img-verso" data-identifier="back-face" src="${img}" />
      </div>
    `;
  });
}

function embaralhar(array) {
  array.sort(() => Math.random() - 0.5);
}

function escolherCarta(carta) {
  if (bloqueiaClique || carta.classList.contains("selecionado")) return;

  carta.classList.add("selecionado");

  if (!primeiraCarta) {
    primeiraCarta = carta;
    return;
  }

  segundaCarta = carta;
  bloqueiaClique = true;
  jogadas++;

  const img1 = primeiraCarta.querySelector(".img-verso").src;
  const img2 = segundaCarta.querySelector(".img-verso").src;

  if (img1 === img2) {
    resetarSelecao();

    if (document.querySelectorAll(".selecionado").length === document.querySelectorAll(".carta").length) {
      setTimeout(() => {
        alert(`Você ganhou em ${jogadas} jogadas!`);
      }, 500);
    }
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("selecionado");
      segundaCarta.classList.remove("selecionado");
      resetarSelecao();
    }, 1000);
  }
}

function resetarSelecao() {
  primeiraCarta = null;
  segundaCarta = null;
  bloqueiaClique = false;
}
