/*Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el 
lugar de un elemento por otro dentro del array.

Retorna el array resultante.*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const index1 = 0  //Los dos índices a introducir
const index2 = 3

/*function swap(fantasticFour, index1, index2){
  for (character of fantasticFour){
    if (fantasticFour.indexOf(character) === index1){
      fantasticFour.splice(fantasticFour[index2], 1, fantasticFour[index1])     ----->    ANTONIO, IGNORA ESTO.
      fantasticFour.splice(fantasticFour[index1], 1, fantasticFour[index2])               ESTÁ MAL, LO DEJO AQUÍ PARA RECORDAR
    }                                                                                     CÓMO NO USAR EL SPLICE. NECESITA UN VALOR
  }                                                                                       DE ÍNDICE NUMÉRICO, NO UN ELEMENTO DEL ARRAY.
  return fantasticFour                                                                    ADEMÁS, USAR UN BUCLE PARA ESTO ES ERRÓNEO, PORQUE
}                                                                                         LOS RESULTADOS SE ANULAN MUTUAMENTE.
*/

function swap(fantasticFour, index1, index2){
  const copy = fantasticFour[index1]
  fantasticFour.splice(index1, 1, fantasticFour[index2]) //Corregido, usando el splice desde los índices introducidos.
  fantasticFour.splice(index2, 1, copy)
  return fantasticFour
}

console.log(swap(fantasticFour, index1, index2))