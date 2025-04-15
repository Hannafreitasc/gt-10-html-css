const user = {
    nome: "Hanna",
    altura: 1.40,
    peso: 44,

}
//criar uma funcao que receba o objeto user
//e calcule o IMC
//IMC = peso / (altura * altura )

function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura)
    console.log (imc.toFixed (2))

}
 calcularIMC (user)

function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura)

    if(imc < 16){
         return console.log("magreza grave")
    }

    if(imc >= 16 && imc < 17){
        return console.log("magreza moderada")

    }

    if (imc >= 17  && imc < 18.5){
        return console.log("magreza leve")
    }

    if (imc >= 18.5 &&  imc < 24.9){
        return console.log("peso ideal")
    }

    calcularIMC (user)
}


    