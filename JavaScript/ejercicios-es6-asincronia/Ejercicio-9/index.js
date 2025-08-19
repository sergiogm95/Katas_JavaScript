const img = document.querySelector(".random-image");

//Necesitamos un número aleatorio del 1 al 151, usamos la función Math que ya apareció en los ejs básicos y avanzados
function getRandomPokemonNumber() {
  return Math.floor(Math.random() * 151) + 1;
}

async function getRandomPokemon() {
  //La estructura es la misma del ejercicio anterior.
  const pokemonNumber = getRandomPokemonNumber();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`; //Esto me daba error porque estaba usando comillas normales, tuve que corregirlo con IA

  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = data.sprites.other["official-artwork"].front_default; //Esta línea la hice con IA, porque me costó mucho encontrar y recurrir a la referencia al artwork dentro de la API.

    img.src = imageUrl;
    img.alt = data.name;
  } catch (error) {
    console.error("No se pudo obtener el pokémon: ", error);
  }
}

getRandomPokemon();
