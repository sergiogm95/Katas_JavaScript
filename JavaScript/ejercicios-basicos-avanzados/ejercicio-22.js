/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const veganFood = [];
for (let food of foodSchedule) {
  if (food.isVegan == false) {
    let fruit = fruits.shift(); //Shift usa el primer elemento de un array y luego lo elimina. Es como "extraerlo" para usarlo solo una vez.
    food.name = fruit;
    veganFood.push(food.name);
  } else if (food.isVegan == true) {
    veganFood.push(food.name);
  }
}
console.log(veganFood);
