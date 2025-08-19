/*Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  // Completar código
}*/

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

/*La función en abstracto sería:
function findLongestWord(stringList) {
    let longestWord = stringList[0]
    for (let i=1; i< stringList.lenght; i++){
        if (stringList[i].lenght > longestWord.lenght) {
            longestWord = stringList[i]
        }
        console.log(longestWord)
    }
}
*/

//Ahora, aplicada a la lista de Avengers:
function findLongestWord(avengers) {
  let longestWord = avengers[0];
  for (let i = 1; i < avengers.length; i++) {
    if (avengers[i].length > longestWord.length) {
      longestWord = avengers[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers));

//Este ejercicio me ha costado muchísimo, porque no entendía que había que meter el return después del bucle for, en lugar de dentro. Además, la lógica del bucle if dentro del for me ha tenido pensando un buen rato. Tuve que usar IA para corregir algunas cosas, por pura desesperación :P
