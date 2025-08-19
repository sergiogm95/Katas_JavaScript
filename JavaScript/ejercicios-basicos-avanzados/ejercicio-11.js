/*Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:*/

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(mixedElements) {
  let suma = 0;
  for (let i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] == "number") {
      suma += mixedElements[i];
    } else if (typeof mixedElements[i] == "string") {
      suma += mixedElements[i].length;
    }
  }
  return suma;
}
console.log(averageWord(mixedElements));
