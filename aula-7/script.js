//  armazenar valor dos inputs altura e peso
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
//armazenar o valor do botao por id 
var btn = document.getElementById("btn")

//armazenar o valor da div
var fim = document.getElementById("fim")

//funcao para calcular o IMC
function calcularIMC(){
    //armazenar apenas o valor do input
    const valorAltura = altura.value    
    const valorPeso = peso.value

    //calcular o iMC
    const imc = valorPeso / (valorAltura * valorAltura)
    //armazenar
    return imc 
}

//funcao de clique 
function calcular(){
    //chama a funcao de calcularIMC e armazenar o valor
    const imc = calcularIMC()
    var mensagem = ""
    
    if(imc < 18.5){
        mensagem = "você está abaixo do peso"
    }
     if (imc >= 18.5 && imc < 24,9){
        mensagem = "você está no peso normal"
    }
    if (imc>= 25 && imc < 29,9){
        mensagem = "você está sobrepeso"
    }

   //rendenizar o resultado na div fim
   fim.innerHTML = `
        <div class="linha"></div>
        <div class="resultado">
            <div class="esquerda">
                <h2>${imc.toFixed(2)}</h2>
                <p>Seu IMC é</p>
            </div>
            <div class="direita">
                <p>${mensagem}</p>
            </div>
        </div>
        <div class="linha"></div>
        `
}
    //adicionar o evento de clique no botao
 btn.addEventListener("click", calcular)
