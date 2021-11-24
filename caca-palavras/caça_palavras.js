// cria o array bidimensional com 10 posições.
function arrPalavras() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
    }
    return arr;
}


// array contendo as letras para usar na função aleatória com o seu comprimento.
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const tamanhoLetras = letras.length;


// funcão que escolhe aleatóriamente as letras.
function getRandom(number, min) {
    return Math.floor(Math.random() * number) + min;
}

//array contendo as palavras que serão usadas no caça-palavras
const palavras = ['silco', 'vander', 'singed', 'marcus', 'powder', 'ekko', 'mylo', 'caitlyn', 'jayce', 'viktor', 'sevika', 'mel', 'jinx', 'violet', 'claggor', 'benzo', 'grayson', 'vern', 'deckard', 'ambessa'];
const tamanhoPalavras = palavras.length;


// função que preenche os lugares vazios do array bidimensional com letras aleatórias.

function preenchaLetras(arr) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (arr[i][j] === undefined) {
                arr[i][j] = letras[getRandom(tamanhoLetras, 0)];
            }
        }
    }
    return arr;
}

let chosenWords = [];

//função que coloca as palavras de forma aleatória no array.

function escolhePalavras() {
    let arr = arrPalavras();
    let i = 0;
    while (i < 3) {
        let lincon = getRandom(2, 1);
        switch (lincon) {
            case 1:
                let linha = getRandom(10, 0);
                let count = 0;
                for (let j = 0; j < 10; j++) {
                    if (arr[linha][j] === undefined) {
                        count++;
                    }
                }
                if (count === 10) {
                    let palavrinha = getRandom(tamanhoPalavras, 0);
                    chosenWords.push(palavras[palavrinha]);
                    let tamPalavra = palavras[palavrinha].length;
                    let arrDaPalavra = palavras[palavrinha].split('');
                    let podeIrAte = 10 - tamPalavra;
                    let inicio = getRandom(podeIrAte, 0);
                    for (let j = 0; j < tamPalavra; j++) {
                        arr[linha][inicio] = arrDaPalavra[j];
                        inicio++;
                    }
                    i++;
                }

                break;

            case 2:
                let coluna = getRandom(10, 0);
                let contador = 0;
                for (let j = 0; j < 10; j++) {
                    if (arr[j][coluna] === undefined) {
                        contador++;
                    }
                }
                if (contador === 10) {
                    let palavrinha2 = getRandom(tamanhoPalavras, 0);
                    chosenWords.push(palavras[palavrinha2]);
                    let tamPalavra2 = palavras[palavrinha2].length;
                    let arrDaPalavra2 = palavras[palavrinha2].split('');
                    let podeIrAte2 = 10 - tamPalavra2;
                    let inicio2 = getRandom(podeIrAte2, 0);
                    for (let j = 0; j < tamPalavra2; j++) {
                        arr[inicio2][coluna] = arrDaPalavra2[j];
                        inicio2++;
                    }
                    i++;
                }
                break;
        }
    }
    let result = preenchaLetras(arr);
    return result;
}


const victory = (arr) => {
    let deuCerto = [];
    let testando = [];
    for (let i = 0; i <= 2; i++) {
        switch (i) {
            case 0:
                let compair = chosenWords[i].split('');
                console.log(chosenWords[i]);
                let x = 0;
                for (let j = 0; j < arr.length; j++) {
                    for (let h = 0; h < arr.length; h++) {
                        if (compair[x] === arr[j][h]) {
                            if (compair[x + 1] === arr[j][h + 1]) {
                                x++;
                                testando[0] = j
                                testando.push(h);
                            }
                        }
                    }
                }
                if (x === (compair.length - 1)) {
                    deuCerto.push(true);
                    break;
                }
                // else{
                //     x = 0;
                //     for(let j=0;j<arr.length;j++){
                //         for(let h=0;h<arr.length;h++){
                //             if(compair[x]===arr[h][j]){
                //                 if(compair[x+1]===arr[h+1][j]){

                //                     x++;
                //                 }
                //             }
                //         }
                //     }
                //     deuCerto.push(true);
                // }
                break;
        }
    }
    console.log(testando);
    return deuCerto;
}







//função que coloca o caça-palavras na tela html.

const putOnPage = () => {
    const game = document.getElementById('jogo');
    const table = escolhePalavras();
    let vitoria = victory(table);
    console.log(vitoria);
    for (let i = 0; i < table.length; i++) {
        const lines = document.createElement('tr');
        game.appendChild(lines);
        for (let j = 0; j < table.length; j++) {
            const squares = document.createElement('td');
            let letters = document.createTextNode(table[i][j].toUpperCase());
            squares.appendChild(letters);
            lines.appendChild(squares);
            squares.style.border = "1px solid black";
            squares.style.padding = "20px";
            squares.style.fontSize = "20px"
        }
    }

}


putOnPage();


