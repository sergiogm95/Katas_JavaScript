/*Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola.

*/

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

let StarWarsByDecade = [
  { decade: 1970, movies: [] },
  { decade: 1980, movies: [] },
  { decade: 1990, movies: [] },
  { decade: 2000, movies: [] },
  { decade: 2010, movies: [] },
];

for (let movie of starWarsMovies) {
  if (movie.releaseYear >= 1970 && movie.releaseYear < 1980) {
    const targetDecade = StarWarsByDecade[0];
    targetDecade.movies.push(movie.title);
  } else if (movie.releaseYear >= 1980 && movie.releaseYear < 1990) {
    const targetDecade = StarWarsByDecade[1];
    targetDecade.movies.push(movie.title);
  } else if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
    const targetDecade = StarWarsByDecade[2];
    targetDecade.movies.push(movie.title);
  } else if (movie.releaseYear >= 2000 && movie.releaseYear < 2010) {
    const targetDecade = StarWarsByDecade[3];
    targetDecade.movies.push(movie.title);
  } else if (movie.releaseYear >= 2010) {
    const targetDecade = StarWarsByDecade[4];
    targetDecade.movies.push(movie.title);
  }
}

console.log(StarWarsByDecade);
