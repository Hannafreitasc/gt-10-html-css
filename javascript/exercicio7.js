//uma lista de modelos carros
 
 const modelos =["fusca","voyage","ferrari","gol"]
 
 console.log(modelos[3])
 
 //adicionar novo modelo 
 
 modelos.push ("COROLA")
 console.log(modelos)
 
 //contagem 
 console.log (modelos.length) //5 length ele é uma propriedade tanto pra string e numeros 
  modelos.push("320i")
 
  //remover o ultimo modelo 
  modelos.pop() //320i
 
  console.log(modelos.length)
 
  //remover um modelo especifico 
 
  modelos.splice(1,1) // remove o modelo da posiçao um ,mas depois coloca mais 1 contagem pq ele volta a lista 
  console.log (modelos)
