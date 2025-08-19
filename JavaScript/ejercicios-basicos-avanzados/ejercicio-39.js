/*Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay 
muchas formas de hacer las cosas en JavaScript.*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const totalSounds = [] //Primero meto todos los sonidos aquí, cada uno repetido las veces que corresponda.

for (let user of users){
    for (let sound in user.favoritesSounds){
        totalSounds.push(sound)
    }
}

//Y ahora reducimos la lista a un objeto, con los sonidos en las claves y las repeticiones en el valor.

const finalSoundsList = {}

for (sound of totalSounds){
    if (finalSoundsList[sound]){ //He tenido que corregir esta sintaxis muchas veces, porque lo estaba haciendo con un array en lugar de un objeto, y con .includes en el condicional. No ha funcionado hasta que he puesto los corchetes en el condicional: finalSoundsList[sound]. Esto ya lo hice en un ejercicio anteriormente, pero son las tres de la mañana y no doy más de mí :P
        finalSoundsList[sound]++
    }
    else  {
        finalSoundsList[sound] = 1
    }
}

console.log(finalSoundsList)

// La forma anterior es la más óptima que se me ha ocurrido sin ayuda. Pero me parecía muy largo, así que he ido a ChatGPT para que me diera ideas.
// La opción que me da es muchísimo más sencilla y me averguenzo de no haberla pensado yo. Me habría ahorrado crear el primer array.

/*
const soundCounts = {}

for (let user of users) {
  for (let sound in user.favoritesSounds) {
    if (soundCounts[sound]) {
      soundCounts[sound]++
    } else {
      soundCounts[sound] = 1
    }
  }
}
*/