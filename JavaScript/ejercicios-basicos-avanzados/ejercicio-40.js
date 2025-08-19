/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array 
cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.

function findArrayIndex(array, text) {
    //Tu codigo
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole 
un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada 
findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en 
findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const characterToFind = "Chewbacca"; //La parte a sustituir

function findArrayIndex(mainCharacters, characterToFind) {
  let characterIndex = 0;
  for (let character of mainCharacters) {
    if (characterToFind === character) {
      characterIndex = mainCharacters.indexOf(character);
      return characterIndex;
    }
  }
  return -1; //Este return fuera del forof se dará solo si ningún elemento del array coincide con el que se busca. Lo probé poniendo un else, pero se rompe el bucle.
}

let result = findArrayIndex(mainCharacters, characterToFind);
console.log(result);

// Y ahora la segunda parte:

function removeItem(mainCharacters) {
  let newArray = [];
  if (result !== -1) {
    mainCharacters.splice(result, 1);
    newArray = mainCharacters;
  }
  return newArray;
}

console.log(removeItem(mainCharacters));
