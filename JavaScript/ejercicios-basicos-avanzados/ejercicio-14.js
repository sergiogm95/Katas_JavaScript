/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función: */

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

//Este ejercicio me ha llevado mucho más tiempo del que esperaba, pero no he llorado (casi)

function repeatCounter(words) {
  const numberOfWords = {}; // Para que el resultado tenga forma de conteo {palabra1: nº, palabra2: nº}, hay que crear un objeto que nos de el formato de "clave: valor".
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (numberOfWords[word]) {
      numberOfWords[word]++; //Si la palabra ya existe dentro del objeto, se le suma 1 al valor
    } else {
      numberOfWords[word] = 1; //Si la palabra no existía, la "crea" dentro del objeto y le da un valor inicial de 1
    }
  }
  return numberOfWords;
}

const result = repeatCounter(words);
console.log(result);
