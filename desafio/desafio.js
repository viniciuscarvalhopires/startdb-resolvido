const readline = require('readline-sync');
const Forca = require('./forca');

const jogo = new Forca('abacaxi');
alreadyOn = false


while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    
    const chute = readline.question("Aguardando chute: \n");
    if (!alreadyOn){
        alreadyOn = true
        jogo.inicializarF(chute)
      }
    jogo.chutar(chute);
    console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());
