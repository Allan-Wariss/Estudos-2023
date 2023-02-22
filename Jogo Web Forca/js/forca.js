var liPalavras = undefined;
var save = undefined;
var pal_sort = undefined;
var palavraStr = undefined;
var palavra = undefined;
var input = undefined;
let tentativas = undefined;
let jogada = undefined;
let espaco = [];
var tela = undefined;
var li = undefined;
var head = undefined;
var torso = undefined;
var leftarm = undefined;
var rightarm = undefined;
var leftleg = undefined;
var leftfoot = undefined;
var rightleg = undefined;
var rightfoot = undefined;
var letras_afbt = undefined

function padrao(){
    liPalavras = ["melancia", "banana", "uva", "empatia", "embuste", "verbete", "sublime",
    "sucinto", "inferir", "apatico", "acepção", "astucia", "redimir", "recesso", "estigma", "cultura", "refutar",
    "virtude", "cinismo", "exortar", "soberba", "trivial", "mitigar", "cordial", "aspecto", "imputar", "emergir",
    "sucesso", "alegria", "deboche", "candura", "ademais", "excerto", "almejar", "orgulho", "contudo", "oriundo",
    "alcunha", "austero", "coragem", "salutar", "sensato", "quimera", "excesso", "fomento", "saudade", "escroto",
    "erudito", "modesto", "parcial", "conciso", "amizade", "colosso", "demanda",
    "padecer", "piedade", "racismo", "vigente", "emotivo", "intenso", "auferir", "exilado", "bizarro", "profano",
    "ansioso", "colapso"];
    save = liPalavras
    pal_sort = Math.floor(Math.random() * liPalavras.length);
    palavraStr = liPalavras[pal_sort].toUpperCase();
    palavra = palavraStr.split('');
    input = document.querySelector("#letra")
    tentativas = 8;
    jogada = undefined;
    espaco = [];
    tela = document.getElementById("tela");
    li = document.createElement("li");
    head = document.getElementById("head")
    torso = document.getElementById("torso")
    leftarm = document.getElementById("leftarm")
    rightarm = document.getElementById("rightarm")
    leftleg = document.getElementById("leftleg")
    leftfoot = document.getElementById("leftfoot")
    rightleg = document.getElementById("rightleg")
    rightfoot = document.getElementById("rightfoot")
    letras_afbt  = document.querySelector(".letras__afbt")

    return liPalavras, save, pal_sort, palavraStr, palavra, input, tentativas, jogada, espaco, tela, li, head, torso, leftarm, rightarm, leftleg,
    leftfoot, rightleg, rightfoot, letras_afbt
}
padrao()

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
            for (j = 0; j < letras_afbt.children.length; j++) {
                if (letras_afbt.children[j].innerHTML == input.value) {
                    letras_afbt.children[j].classList.add("letras__afbt-acertada")
                }
            }
        }
        else{
            for (j = 0; j < letras_afbt.children.length; j++) {
                if (letras_afbt.children[j].innerHTML == input.value) {
                    letras_afbt.children[j].classList.add("letras__afbt-usada")
                }
            }
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

function perdeu() {
    alert("PERDEU! A palavra era: "+palavraStr)
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

    if (tentativas == 0) {
        console.log("Enforcou! PERDEU!");
        setTimeout(perdeu, 430)
        setTimeout(restart,450)
    }

}

function restart() {
    removeEspacosFront()
    padrao()
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
        letras_afbt.children.classList.remove("letras__afbt-acertada")
        letras_afbt.children.classList.remove("letras__afbt-usada")
    }

}
function clearInput() {
    input.value = ""
}