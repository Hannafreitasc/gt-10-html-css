// const dias = 15
 // const valorPorDia=250
 
 // const valorTotal=dias * valorPorDia
 // console.log(valorTotal)
 
 
 
 function aluguelCarro(dias){
     if(dias> 15){
         const valorPorDia= 200
         const calculo = dias * valorPorDia
         console.log(calculo)
     }
     else {
         const valorPorDia=250
         const calculo= dias * valorPorDia
         console.log(calculo)
     }
 }
 
 aluguelCarro(10) 
 aluguelCarro(15) 
 aluguelCarro(16)
