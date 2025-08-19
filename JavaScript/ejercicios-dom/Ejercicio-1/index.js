/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con
	la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".*/

//1.1
const button = document.querySelector(".showme"); //la clase se recurre con punto: .showme, .pokemon, etc
console.log(button);

//1.2
const h1 = document.querySelector("#pillado"); //El ID se recurre con #
console.log(h1);

//1.3
const allPs = document.querySelectorAll("p");
console.log(allPs);

//1.4
const pokemon = document.querySelectorAll(".pokemon");
console.log(pokemon);

//1.5
const personajes = document.querySelectorAll('[data-function="testMe"]'); //Corchetes para seleccionar un atributo. No se pueden poner comillas dobles dentro de comillas dobles, así que las exteriores las he puesto simples.
console.log(personajes);

//1.6
const personaje3 = personajes[2]; //Recordatorio: el orden de elementos de un array empieza por el 0, así que el tercer elemento es el 2.
console.log(personaje3);

/*ATENCIÓN: En el 1.6 recurro al 1.5 porque están en el mismo documento, pero la respuesta completa
sería:

const personajes = document.querySelectorAll('[data-function="testMe"]') 
console.log(personajes[2])*/
