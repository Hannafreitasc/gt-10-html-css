//funçao que receba um objeto carro
 // o objeto contem as propriedades:
 //modelo , ano , cor e km
 //se o carro for maior que 2020 ou tiver menos que 1000km
 //exibir "Carro Novo"
 //se não exibe carro usado
 
 const carro= {
     modelo:"Civic",
     ano : 2005,
     cor:"preto",
     km:1500
 }
 function verificarCarro (carro){
     if ( carro.ano >2020 || carro.km <1000 ){
         console.log ("carro novo")
 
     }
     else {
         console.log ("carro usado")
     
 }
    }
 
     verificarCarro(carro)
