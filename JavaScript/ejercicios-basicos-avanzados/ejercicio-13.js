/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho
 array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento
 y por la contra un false.

Puedes usar este array para probar tu función:
*/

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

let nameInput = "Anything"; //Aquí se mete el nombre a buscar.
function nameFinder(names) {
  for (let i = 0; i < names.length; i++) {
    if (nameInput === names[i]) {
      return { found: true, position: i };
    }
  }
  return { found: false };
}

const result = nameFinder(names);
console.log(result);
