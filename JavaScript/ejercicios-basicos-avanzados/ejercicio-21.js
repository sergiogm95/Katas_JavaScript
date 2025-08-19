/*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto 
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".*/

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const youngsters = [];
const elders = [];
for (let avenger of users) {
  //RECORDATORIO: se usa for...in para recorrer elementos y claves dentro de un solo objeto, y for...of para arrays simples, arrays de objetos, etc.
  if (avenger.years >= 18) {
    elders.push(avenger.name);
  } else if (avenger.years < 18) {
    youngsters.push(avenger.name);
  }
}
console.log("Usuarios menores de edad: " + youngsters);
console.log("Usuarios mayores de edad: " + elders);
