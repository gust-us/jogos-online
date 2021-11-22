// cria o array bidimensional com 10 posições.
function arrPalavras (){
    let arr = [];
    for(let i=0; i<10;i++){
        arr[i]=[];
    }
    return arr;
}


// array contendo as letras para usar na função aleatória com o seu comprimento.
const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const tamanhoLetras = letras.length; 


// funcão que escolhe aleatóriamente as letras.
function getRandom() {
    return Math.floor(Math.random() * tamanhoLetras) + 0;
}

//array contendo as palavras que serão usadas no caça-palavras
const palavras = ['água','arroz','alho','oleo','cebola','sal'];
const tamanhoPalavras = palavras.length;


// função que preenche os lugares vazios do array bidimensional com letras aleatórias.

function preenchaLetras (){
    let arr = arrPalavras();
    for(let i=0; i<10;i++){
        for(let j=0; j<10;j++){
            if(arr[i][j]===undefined){
                arr[i][j] = letras[getRandom()];
            }
        }
    }
    return arr;
}


//função que coloca as palavras de forma aleatória no array.

function escolhePalavras (){
}