/*2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];*/

//2.1
const pointsList = [32, 54, 21, 64, 75, 43]
const copiedPointsList = [...pointsList]

//2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiedToy = {...toy}

//2.3

//const pointsList = [32, 54, 21, 64, 75, 43]; Dejo esta en comentario, porque ya estaba declarada en el 2.1
const pointsList2 = [54,87,99,65,32];
const newArray = [...pointsList, ...pointsList2]

//2.4
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const mixedToys = {...toy, ...toyUpdate}

//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let copiedColors = [...colors]
copiedColors.splice(2, 1)  //Entiendo que la posición 2 se refiere a la tercera [0, 1, 2], y no al segundo color literalmente. En caso contrario, haría copiedColors.splice(1,1)

// He comprobado todos los ejercicios imprimiendo por consola los cambios
