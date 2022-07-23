class Forca {
  palavra = "abacaxi";
  descobrir = [];
  descobrirString = "";
  allLetters = [];
  hasLetter = true;
  vidas = 6;
  alreadyHas = false;

  inicializarF(letra) {
    for (letra in this.palavra) {
      this.descobrir.push("_");
    }
  }

  chutar(letra) {

    if (letra.length == 1) {
      for (var j = 0; j < this.palavra.length; j++) {
        this.hasLetter = true
        if (this.palavra.includes(letra)) {
          if (letra == this.palavra[j]) {
            if (this.descobrir[j] != letra) {
              this.descobrir[j] = letra;
            } else {
              this.alreadyHas = true;
            }
          }
        } else {
          this.hasLetter = false;
        }
      }

      if ((this.hasLetter == false)) {
        if (!this.allLetters.includes(letra)){
          this.vidas -= 1;
        }
      }
      if (!this.allLetters.includes(letra)){
        this.allLetters.push(letra);
      }
    }
  }
  
  buscarEstado() {
    
    if (this.vidas >= 1){
      if (this.palavraF == "abacaxi"){
        return "ganhou"
      }
    } else {
      return "perdeu"
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  }

  formatacao(descobrir) {
    this.descobrirString = descobrir.join(" ");
    this.palavraF = this.descobrirString.replace(/\s/g, "")
  }

  buscarDadosDoJogo() {
    this.formatacao(this.descobrir);

    return {
      letrasChutadas: this.allLetters, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavraF
    }; // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }
}

module.exports = Forca;
