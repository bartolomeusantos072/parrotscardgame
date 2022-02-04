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
          
    }
    
    