/*For...of: Usa un bucle forof para recorrer todos los destinos del array.

Imprime en un console.log cada uno de sus valores.*/

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const place of placesToTravel) {
  //Es una abreviación del bucle for normal, para leer arrays sin hacer nada complejo con ellos. Se lee como "por cada (decl. var.)COSA en LISTA_DE_COSAS:"
  console.log(place);
}
