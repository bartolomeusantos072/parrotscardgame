let imgLista = [];
const listaImagens = [
    "imagem/bobrossparrot.gif",
    "imagem/explodyparrot.gif",
    "imagem/metalparrot.gif",
    "imagem/revertitparrot.gif",
    "imagem/tripletsparrot.gif",
    "imagem/unicornparrot.gif",
    "imagem/fiestaparrot.gif"
  ];

function iniciarJogo(){
    let quantidade = 0;
    do {
            quantidade = prompt("Escolha uma quantidade de cartas");
    } while (quantidade < 4 || quantidade > 14 || quantidade % 2 === 1);

    darAsCartas(quantidade);
    document.querySelector("button").style.display = "none";
}


function darAsCartas(quantidade) {
  //identificar as cartas
    let dividirCartas = quantidade / 2;
    for (let i = 0; i <= quantidade - 1; i++) {

        imgLista[i] = new Image();

        if (i > dividirCartas - 1) {
        imgLista[i].src = listaImagens[i - dividirCartas];
        } else {
        imgLista[i].src = listaImagens[i];
        }
    }
    
    let imgArray = embaralharCartas(imgLista);

    for (let i = 0; i < quantidade; i++) {
    document.querySelector(".jogo-da-memoria").innerHTML += `
      <div class="carta" onclick="escolherCarta(this)">
        <img class="img-frente" src="imagem/front.png"/>
        <img class="img-verso" src=${imgArray[i].src}/>
      </div>`;
  }
}


function embaralharCartas(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Retornando array com aleatoriedade
  return arr;
}

