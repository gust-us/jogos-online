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

const palavras = ['silco', 'vander', 'singed', 'marcus', 'powder', 'ekko', 'mylo', 'caitlyn', 'jayce', 'viktor', 'sevika', 'mel', 'jinx', 'violet', 'claggor', 'benzo', 'grayson', 'orianna', 'deckard', 'ambessa'];
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
let sizeOfChosenWords = [];
let lineOfWords = [];
let chosen = [];

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
                    let tamPalavra = palavras[palavrinha].length;

                    chosen.push(palavras[palavrinha]);

                    chosenWords.push(linha);
                    sizeOfChosenWords.push(tamPalavra);
                    let arrDaPalavra = palavras[palavrinha].split('');
                    let podeIrAte = 10 - tamPalavra;
                    let inicio = getRandom(podeIrAte, 0);
                    for (let j = 0; j < tamPalavra; j++) {
                        arr[linha][inicio] = arrDaPalavra[j];
                        lineOfWords.push(inicio);
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
                    let tamPalavra2 = palavras[palavrinha2].length;

                    chosen.push(palavras[palavrinha2]);

                    chosenWords.push(coluna + 10);
                    sizeOfChosenWords.push(tamPalavra2);
                    let arrDaPalavra2 = palavras[palavrinha2].split('');
                    let podeIrAte2 = 10 - tamPalavra2;
                    let inicio2 = getRandom(podeIrAte2, 0);
                    for (let j = 0; j < tamPalavra2; j++) {
                        arr[inicio2][coluna] = arrDaPalavra2[j];
                        lineOfWords.push(inicio2);
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

//função que coloca o caça-palavras na tela html.

const putOnPage = () => {
    const game = document.getElementById('jogo');
    const table = escolhePalavras();
    for (let i = 0; i < table.length; i++) {
        const lines = document.createElement('tr');
        game.appendChild(lines);
        for (let j = 0; j < table.length; j++) {
            const squares = document.createElement('td');

            let letters = document.createTextNode(table[i][j].toUpperCase());

            squares.setAttribute('line', i);
            squares.setAttribute('column', j);
            squares.classList.add("square")
            squares.appendChild(letters);
            lines.appendChild(squares);
        }


    }
}
putOnPage();

function addWordsList() {
    const divList = document.querySelector(".words--list")
    const uList = document.querySelector(".u--list")
    let palavras2 = palavras.map(item => item.replace(item[0], item[0].toUpperCase()))
    for (let i = 0; i < palavras2.length; i++) {
        let listItem = document.createElement("li")
        listItem.classList.add("list--item")
        listItem.innerHTML = (palavras2[i])
        uList.appendChild(listItem)
    }
    divList.appendChild(uList)
}
addWordsList()

const htmlTable = document.getElementById("jogo")
let concatenedStr = ""
let counter = 0
const divVictory = document.querySelector(".victory--message")

htmlTable.addEventListener("click", function (event) {
    const targetedEl = event.target
    targetedEl.classList.toggle("square--clicked")
    if (targetedEl.tagName === "TD") {
        concatenedStr += (targetedEl.innerHTML).toLowerCase()
    }
    if (concatenedStr.length >= 10) {
        concatenedStr = ""
    }
    let victory = chosen.includes(concatenedStr)
    if (victory === true) {
        counter++
        concatenedStr = ""
    }
    if (counter === 3) {
        let h2Victory = document.createElement("h2")
        h2Victory.classList.add("h2--victory")
        h2Victory.innerHTML = `Parabéns! Você encontrou as três palavras: ${(chosen.map(item => item.replace(item[0], item[0].toUpperCase()))).join(", ")}.`
        let resetButton = document.createElement("button")
        resetButton.classList.add("button--reset")
        resetButton.innerHTML = "Jogue novamente"
        divVictory.appendChild(h2Victory)
        divVictory.appendChild(resetButton)
        resetButton.addEventListener("click", function () {
            return location.reload()
        })
    }
})
