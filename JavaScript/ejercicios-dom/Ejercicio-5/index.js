/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist"
];*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
  "Rust in Peace", //Me he permitido añadir un disco más, porque es de mis favoritos jajaja
];

const covers = [
  "assets/album-Mysteriis.jpg",
  "assets/reignOfBlood.jpg",
  "assets/Metallica_Ride-the-Lightning.jpg",
  "assets/painkiller-pic.jpg",
  "assets/Motörhead_Iron-Fist.jpg",
  "assets/RustInPeace.jpg",
];

let ul = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
  let li = document.createElement("li");
  let title = document.createElement("p");
  let img = document.createElement("img");

  title.textContent = albums[i];
  img.src = covers[i];

  li.appendChild(title);
  li.appendChild(img);
  ul.appendChild(li);
}

document.body.appendChild(ul);
