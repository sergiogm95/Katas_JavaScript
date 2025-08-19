/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función:*/

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const notDuplicates = [];
function removeDuplicates(duplicates) {
  for (let i = 0; i < duplicates.length; i++) {
    if (!notDuplicates.includes(duplicates[i])) {
      //No se me ocurría ninguna forma de hacerlo, así que tuve que buscar el .includes y su inversión con !
      notDuplicates.push(duplicates[i]);
    }
  }
  return notDuplicates;
}

console.log(removeDuplicates(duplicates));
