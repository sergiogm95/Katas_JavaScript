/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  // Completar código
}*/

const numbers = [1, 2, 3, 5, 45, 37, 58];
let suma = 0;

function sumNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  return suma;
}

let sumaTotal = sumNumbers(numbers);
console.log(sumaTotal);
