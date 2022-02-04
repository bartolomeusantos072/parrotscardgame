const listaImagens = [
    "imagem/bobrossparrot.gif",
    "imagem/explodyparrot.gif",
    "imagem/metalparrot.gif",
    "imagem/revertitparrot.gif",
    "imagem/tripletsparrot.gif",
    "imagem/unicornparrot.gif",
    "imagem/fiestaparrot.gif"
  ];
  let quantidade = 0;

  function iniciarJogo(){
    
        do {
            quantidade = prompt("Escolha uma quantidade de cartas");
          } while (quantidade < 4 || quantidade > 14 || quantidade % 2 === 1);
          
    }
darAsCartas(quantidade);  
 
function darAsCartas(quantidade) {
    
    for (let i = 0; i < quantidade; i++) {
       document.querySelector(".jogo-da-memoria").innerHTML += `
        <div class="carta" onclick="escolherCarta(this)">
          <img class="img-frente" src="imagem/front.png"/>
          <img class="img-verso" src=${imgLista[i].src}/>
        </div>`;
    }
    
  }   
    