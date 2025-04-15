// uma funçao que receba os dias e os kms rodados
 //o valor por dia é 250 
 // o valor por km é 0.50 
 // se tiver rodado mais de 1000km , o valor por km fica 0.25
 function calcularAluguel(dias,kms){
     const valorPorDiaria=250;
     if (kms > 1000){
         const valorPorkm=0.25;
         const calculoDiaria= dias * valorPorDiaria
         const valorKms= kms * valorPorkm
         
         const total= calculoDiaria + valorKm
         console.log(total)
     } else {
 const valorPorkm =0.50;
 const calculoDiaria= dias * valorPorDiaria
 const valorKm= kms * valorPorkm
 
 const total =calculoDiaria+ valorKm
 console.log(total)
     }
 }
 
 calcularAluguel(10 , 400) //para chamar a função
