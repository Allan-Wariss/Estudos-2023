var liPalavras = ["melancia", "banana", "uva", "empatia", "embuste", "verbete", "sublime",
"sucinto", "inferir", "apatico", "acepção", "astucia", "redimir", "recesso", "estigma", "cultura", "refutar",
"virtude", "cinismo", "exortar", "soberba", "trivial", "mitigar", "cordial", "aspecto", "imputar", "emergir",
 "sucesso", "alegria", "deboche", "candura", "ademais", "excerto", "almejar", "orgulho", "contudo", "oriundo",
"alcunha", "austero", "coragem", "salutar", "sensato", "quimera", "excesso", "fomento", "saudade", "escroto",
"erudito", "modesto", "parcial", "conciso", "amizade", "colosso", "demanda",
"padecer", "piedade", "racismo", "vigente", "emotivo", "intenso", "auferir", "exilado", "bizarro", "profano",
"ansioso", "colapso"];
var save = liPalavras
var pal_sort = Math.floor(Math.random() * liPalavras.length);
var palavraStr = liPalavras[pal_sort].toUpperCase();
var palavra = palavraStr.split('');
var input = document.querySelector("#letra")
let tentativas = 8;
let jogada = undefined;
let espaco = [];
var tela = document.getElementById("tela");
var li = document.createElement("li");
var head = document.getElementById("head")
var torso = document.getElementById("torso")
var leftarm = document.getElementById("leftarm")
var rightarm = document.getElementById("rightarm")
var leftleg = document.getElementById("leftleg")
var leftfoot = document.getElementById("leftfoot")
var rightleg = document.getElementById("rightleg")
var rightfoot = document.getElementById("rightfoot")


input.select()

function espacoGerar() {
    for (i = 0; i < palavra.length; i++) {
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
function espacosFront() {

    for (var j = 0; j < palavra.length; j++) {
        li = document.createElement("li");
        li.innerHTML = espaco[j]
        tela.appendChild(li);
    }
}
espacosFront()

function removeEspacosFront() {
    while (tela.hasChildNodes()) {
        tela.removeChild(tela.firstChild);
    }
}


function verificar() {
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i].includes(jogada)) {
            tela.children[i].innerHTML = jogada
            tela.children[i].classList.add("verde")
            espaco.splice(i, palavra[i].length, jogada);
            console.log("Acertou");
        }
    }
    if (!(palavra.includes(jogada))) {
        tentativas -= 1;
        console.log("Errou! Faltam", tentativas, "Tentativas");
    }

    return (espaco, tentativas);
}

function ganhou() {
    alert("Parabéns!! Você GANHOU!")
}


function main() {
    input.select()
    if (input.value == "") {
        alert("Não deixe o campo vazio.")
        return
    }
    if (tentativas >= 1) {
        jogada = input.value;
        verificar();
        console.log(espaco);
        if (JSON.stringify(espaco) === JSON.stringify(palavra)) {
            console.log("GANHOU!!!!");
            setTimeout(ganhou, 430);
            tentativas = -1;
        }
    }
    else {
        console.log("Enforcou! PERDEU!");
        alert("PERDEU! A palavra era: "+palavraStr)
        restart()
    }

    if (tentativas == 8) {
        head.classList.remove("head")
        torso.classList.remove("torso")
        leftarm.classList.remove("leftarm")
        rightarm.classList.remove("rightarm")
        leftleg.classList.remove("leftleg")
        leftfoot.classList.remove("leftfoot")
        rightleg.classList.remove("rightleg")
        rightfoot.classList.remove("rightfoot")

    }
    else if (tentativas == 7) {
        head.classList.add("head")
    }
    else if (tentativas == 6) {
        torso.classList.add("torso")
    }
    else if (tentativas == 5) {
        leftarm.classList.add("leftarm")
    }
    else if (tentativas == 4) {
        rightarm.classList.add("rightarm")
    }
    else if (tentativas == 3) {
        leftleg.classList.add("leftleg")
    }
    else if (tentativas == 2) {
        leftfoot.classList.add("leftfoot")
    }
    else if (tentativas == 1) {
        rightleg.classList.add("rightleg")
    }
    else if (tentativas == 0) {
        rightfoot.classList.add("rightfoot")
    }

}

function restart() {
    removeEspacosFront()
    liPalavras = save;
    pal_sort = Math.floor(Math.random() * liPalavras.length);
    palavraStr = liPalavras[pal_sort].toUpperCase();
    palavra = palavraStr.split('');
    tentativas = 8;
    jogada = undefined;
    espaco = []
    espacoGerar();
    console.clear();
    console.log(palavra);
    espacosFront()
    if (tentativas == 8) {
        head.classList.remove("head")
        torso.classList.remove("torso")
        leftarm.classList.remove("leftarm")
        rightarm.classList.remove("rightarm")
        leftleg.classList.remove("leftleg")
        leftfoot.classList.remove("leftfoot")
        rightleg.classList.remove("rightleg")
        rightfoot.classList.remove("rightfoot")

    }

}
function clearInput() {
    input.value = ""
}