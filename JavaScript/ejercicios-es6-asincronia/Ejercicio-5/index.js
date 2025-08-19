/*Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];*/

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector(
  "input[data-function='toFilterStreamers']"
); //No usar comillas repetidas, cambiar simples y dobles
input.addEventListener("input", () => {
  const inputText = input.value.toLowerCase(); //Voy a pasar a minúsculas tanto el input como los nombres de los streamers, para más precisión
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(inputText)
  );
  console.log(filteredStreamers);
});

//Por cómo extá enunciado el ejercicio, entiendo que el input debe buscarse solo en el nombre de los streamers, y no en la edad ni los juegos.
