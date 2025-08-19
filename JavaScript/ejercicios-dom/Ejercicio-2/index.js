/*2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here*/

//2.1
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv); //con appendChild se hace que un elemento esté contenido dentro de otro, en este caso el body del documento

//2.2
const divConP = document.createElement("div"); //Se crea un div.
const unP = document.createElement("p"); //Se crea un p.
unP.textContent = "El texto que va en ese P"; //Se inserta un texto en el p con el método textContent.
divConP.appendChild(unP); //El p se hace hijo del div
document.body.appendChild(divConP); //El div se hace hijo del body del documento

//2.3
const divConBucleP = document.createElement("div");

for (let i = 1; i < 7; i++) {
  //Aquí he empezado con i=1 en lugar de i=0, para poder usar i como contador de cada párrafo una vez introducido en el documento. Así el primer párrafo como el 1, no el 0.
  const cadaP = document.createElement("p");
  cadaP.textContent = "P número " + i; //El contador de p dentro del documento
  divConBucleP.appendChild(cadaP); //Cada nuevo p originado por el bucle se hace hijo del div, así que todos los p son "hermanos"
}

document.body.appendChild(divConBucleP);

//2.4
const pDinamico = document.createElement("p"); //En realidad este ejercicio ya lo he hecho en los anteriores también, pensé que era obligatorio jajaja
pDinamico.textContent = "'Soy dinámico!";
document.body.appendChild(pDinamico);

//2.5
const h2 = document.querySelector(".fn-insert-here"); //seleccionamos la clase
h2.textContent = "Wubba Lubba dub dub";

//2.6
const ul = document.createElement("ul");
document.body.appendChild(ul);
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
for (let app of apps) {
  let li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}

//2.7
const elementsToRemove = document.querySelectorAll(".fn-remove-me");
for (element of elementsToRemove) {
  element.remove(); //Lo había hecho casi bien a la primera, pero me faltó el () después de remove. Lo corregí gracias a la IA
}

//2.8
const middleP = document.createElement("p");
middleP.textContent = "Voy en medio!";
let allDivs = document.querySelectorAll("body > div");
document.body.insertBefore(middleP, allDivs[1]);
/*

/*Otra posibilidad para el 2.8, algo más compleja usando el insertAdjacentElement y los "colocadores" como afterend:
if (allDivs.length <= 2) {
  allDivs[0].insertAdjacentElement("afterend", middleP); lo insertamos después del primer div
}*/

/*Esta opción no funciona porque los métodos de array normales no afectan al DOM:
let allDivs = document.querySelectorAll("body > div")
allDivs.slice(1, 1, middleP)
let divCopy = allDivs[1]
allDivs.push(divCopy)*/

//2.9
const divsInsert = document.querySelectorAll(".fn-insert-here");
for (div of divsInsert) {
  let insideP = document.createElement("p");
  insideP.textContent = "Voy dentro!";
  div.appendChild(insideP);
}
