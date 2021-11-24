let jogadorEscolha = 0;
let computadorEscolha = 0;
let ganhador = 0;

function jogar(escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    if ((jogadorEscolha === 1) && (computadorEscolha === 1)) {
        ganhador = 0;
    } else if ((jogadorEscolha === 1) && (computadorEscolha === 2)) {
        ganhador = 2
    } else if ((jogadorEscolha === 1) && (computadorEscolha === 3)) {
        ganhador = 1
    } else if ((jogadorEscolha === 2) && (computadorEscolha === 1)) {
        ganhador = 1
    } else if ((jogadorEscolha === 2) && (computadorEscolha === 2)) {
        ganhador = 0
    } else if ((jogadorEscolha === 2) && (computadorEscolha === 3)) {
        ganhador = 2
    } else if ((jogadorEscolha === 3) && (computadorEscolha === 1)) {
        ganhador = 2
    } else if ((jogadorEscolha === 3) && (computadorEscolha === 2)) {
        ganhador = 1
    } else if ((jogadorEscolha === 3) && (computadorEscolha === 3)) {
        ganhador = 0              
    }
    
    document.getElementById("jogador_escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador_escolha-" + computadorEscolha).classList.add('selecionado');

    if(ganhador == 0) {
        document.getElementById('result').innerHTML = 'Empate';
    } else if(ganhador == 1) {
        document.getElementById('result').innerHTML = 'Jogador ganhou';
    } else if(ganhador == 2) {
        document.getElementById('result').innerHTML = 'Computador ganhou';
    }
    
}

const button = document.getElementsByClassName("btn")[0]
button.addEventListener("click", function() {
   return location.reload();
   
});