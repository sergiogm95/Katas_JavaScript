/*3.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

3.2 Elimina el elemento que tenga la clase .fn-remove-me.

3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.

3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.*/

//3.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countriesUl = document.createElement("ul");
for (country of countries) {
  let countryList = document.createElement("li");
  countryList.textContent = country;
  countriesUl.appendChild(countryList);
}
document.body.appendChild(countriesUl);

//3.2
let remove = document.querySelector(".fn-remove-me");
remove.remove();

//3.3
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const carsUl = document.createElement("ul");
for (let car of cars) {
  let carList = document.createElement("li");
  carList.textContent = car;
  carsUl.appendChild(carList);
}
const divPrintHere = document.querySelector("[data-function='printHere']"); //Corchetes [] para seleccionar un atributo del div
divPrintHere.appendChild(carsUl);

//3.4
const countries14 = [
  //Se llama countries14 para diferenciarlo del "countries" del 1.1
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let totalDiv = document.createElement("div"); //Añado un div "maestro" que contenga todos los demás divs, para poder hacer los ejercicios 3.5 y 3.6 más fácilmente
for (let country of countries14) {
  let newDiv = document.createElement("div");
  let title = document.createElement("h4");
  title.textContent = country.title;
  let img = document.createElement("img");
  img.src = country.imgUrl; //Lo hice con img.textContent, pero no funciona. Para las imágenes hay que dar la source
  newDiv.appendChild(title);
  title.appendChild(img);
  totalDiv.appendChild(newDiv);
}
document.body.appendChild(totalDiv);

//3.5
const rmLastButton = document.createElement("button");
rmLastButton.textContent = "Eliminar último div";
rmLastButton.addEventListener("click", () => {
  //En este paso no entiendo bien la sintaxis, lo he copiado tal cual del vídeo explicativo de la plataforma.
  const lastDiv = totalDiv.lastElementChild; //He creado un div maestro en el 3.4, para poder "llamarlo" aquí como contenedor.
  if (lastDiv) {
    lastDiv.remove();
  }
});
document.body.appendChild(rmLastButton);

//3.6
let divList = document.querySelectorAll("body > div > div");
for (let div of divList) {
  let rmIndividualButton = document.createElement("button"); //Tardé una media hora aprox en hacer el 3.5, pero el 3.6 me ha costado solo 5 minutos jajaja
  rmIndividualButton.textContent = "Remove this Div";
  rmIndividualButton.addEventListener("click", () => {
    if (div) {
      div.remove();
    }
  });
  div.appendChild(rmIndividualButton);
}
