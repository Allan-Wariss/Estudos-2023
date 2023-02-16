
var liPalavras = ["ABACATI","UVA", "BANANA", "ALLAN"];
var save = liPalavras
var pal_sort = Math.floor(Math.random() * liPalavras.length);
var palavraStr = liPalavras[pal_sort];
var palavra = palavraStr.split('');
var input = document.querySelector("#letra")
let tentativas = 6;
let jogada = undefined;
let espaco = [];
var tela = document.getElementById("tela");
var li = document.createElement("li");

input.select()

function espacoGerar() {
    for (i = 0; i < palavra.length; i++){
        espaco.push("_");
    }
    return espaco;
}
espacoGerar()

// function espacoPrint(){
//     for(i = 0; i < palavra.length; i++){
//         console.log(espaco[i])
//     }
// }
// espacoPrint()

// Gerar espaços da palavra secreta no Front
function espacosFront(){
    
    for (var j = 0; j < palavra.length; j++){ 
        li = document.createElement("li");
        li.innerHTML = espaco[j]
        tela.appendChild(li);
    }
}
espacosFront()

function removeEspacosFront(){
    while (tela.hasChildNodes()) {
        tela.removeChild(tela.firstChild);
      }
}


function verificar (){
    for (i = 0; i < palavra.length; i++){
        if (palavra[i].includes(jogada)){
            tela.children[i].innerHTML = jogada
            tela.children[i].classList.add("verde")
            espaco.splice(i,palavra[i].length,jogada);
            console.log("Acertou");
        }
    }
    if (!(palavra.includes(jogada))){
        tentativas -=1;
        console.log("Errou! Faltam", tentativas, "Tentativas");
    }

    return (espaco, tentativas);
}

function ganhou(){
    alert("Parabéns!! Você GANHOU!")
}

function main () {
    input.select()
    if(input.value == ""){
        alert("Não deixe o campo vazio.")
        return
    }
    if (tentativas > 0){
        jogada = input.value;
        verificar();
        console.log(espaco);
        if (JSON.stringify(espaco) === JSON.stringify(palavra)){
            console.log("GANHOU!!!!");
            setTimeout(ganhou, 430);
            tentativas = 0;
        }
    }
    else{
        console.log("Enforcou! PERDEU!");
        alert("Enforcou! PERDEU! Tente novamente.")
        restart()
    }
 
}

function restart() {
    removeEspacosFront()
    liPalavras = save;
    pal_sort = Math.floor(Math.random() * liPalavras.length);
    palavraStr = liPalavras[pal_sort];
    palavra = palavraStr.split('');
    tentativas = 6;
    jogada = undefined;
    espaco = []
    espacoGerar();
    console.clear();
    console.log(palavra);
    espacosFront()
    
}
function clearInput() {
    input.value = ""
}

// console.log(palavra.length);
console.log(palavra);