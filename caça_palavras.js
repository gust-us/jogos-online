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
function getRandom(number,min) {
    return Math.floor(Math.random() * number) + min;
}

//array contendo as palavras que serão usadas no caça-palavras
const palavras = ['água','arroz','alho','oleo','cebola','sal'];
const tamanhoPalavras = palavras.length;


// função que preenche os lugares vazios do array bidimensional com letras aleatórias.

function preenchaLetras (arr){
    for(let i=0; i<10;i++){
        for(let j=0; j<10;j++){
            if(arr[i][j]===undefined){
                arr[i][j] = letras[getRandom(tamanhoLetras,0)];
            }
        }
    }
    return arr;
}


//função que coloca as palavras de forma aleatória no array.

function escolhePalavras (){
    let arr = arrPalavras();
    let i=0;
    while(i<3){
        let lincon = getRandom(2,1);
        switch (lincon) {
            case 1:
                let linha = getRandom(10,0);
                let count = 0;
                for(let j=0;j<10;j++){
                    if(arr[linha][j]===undefined){
                        count ++;
                    }
                }
                if(count===10){
                    let palavrinha = getRandom(tamanhoPalavras,0);
                    let tamPalavra = palavras[palavrinha].length;
                    let arrDaPalavra = palavras[palavrinha].split('');
                    let podeIrAte = 10 - tamPalavra;
                    let inicio = getRandom(podeIrAte,0);
                    for(let j=0;j<tamPalavra;j++){
                        arr[linha][inicio]=arrDaPalavra[j];
                        inicio++;
                    }
                    i++;
                }
                
            break;

            case 2:
               let coluna = getRandom(10,0);
               let contador = 0;
               for(let j=0;j<10;j++){
                   if(arr[j][coluna]===undefined){
                       contador++;
                   }
               }
               if(contador===10){
                   let palavrinha2 = getRandom(tamanhoPalavras,0);
                   let tamPalavra2 = palavras[palavrinha2].length;
                   let arrDaPalavra2 = palavras[palavrinha2].split('');
                   let podeIrAte2 = 10 - tamPalavra2;
                   let inicio2 = getRandom(podeIrAte2,0);
                   for(let j=0;j<tamPalavra2;j++){
                       arr[inicio2][coluna]=arrDaPalavra2[j];
                       inicio2++;
                   }
                   i++;
               }
            break;
        }
    }
    return preenchaLetras(arr);
}