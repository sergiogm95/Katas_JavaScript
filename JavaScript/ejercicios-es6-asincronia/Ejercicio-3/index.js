/*3.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

3.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

3.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];*/

//3.1
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userNames = users.map((user) => user.name); //Me dio error al principio porque lo hice con corchetes []

//3.2
const users2 = [
  //Le cambio el nombre porque es igual al 3.1
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userNames2 = users2.map((user) => user.name);
for (let i = 0; i < userNames2.length; i++) {
  if (userNames2[i][0] === "A") {
    userNames2[i] = "Anacleto";
  }
}

//3.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

let citiesArray = cities.map((city) => city.name);
const booleans = cities.map((visited) => visited.isVisited); //Lo intenté usando spread operators, pero me parece más sencilla esta forma.
for (i = 0; i < cities.length; i++) {
  if (booleans[i] === true) {
    citiesArray[i] = citiesArray[i] + ": Visited";
  }
}
console.log(citiesArray);

// He comprobado todos los ejercicios por consola
