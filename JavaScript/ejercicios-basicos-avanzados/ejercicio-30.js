/*Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola.*/

const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

//No se especifica si se puede crear el nuevo objeto añadiendo manualmente los géneros a cada clave, o si hay que hacerlo también con un bucle. Por si acaso lo haré de la forma difícil :P

const songsByGenre = {};

for (let song of tracks) {
  if (songsByGenre[song.genre]) {
    songsByGenre[song.genre].push(song.title); //Le di muchas vueltas a la sintaxis y no me funcionaba, así que puse bien los [] dentro del bucle con IA.
  } else {
    songsByGenre[song.genre] = [song.title];
  }
}

console.log(songsByGenre);
