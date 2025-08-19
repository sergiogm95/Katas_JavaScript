/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne 
un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.*/

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

const power = "steel skin"; //Este es el "input" modificable

function findMutantByPower(mutants, power) {
  let mutantsWithThatPower = [];
  for (let mutant of mutants) {
    if (power === mutant.power) {
      mutantsWithThatPower.push(mutant.name);
    }
  }
  if (mutantsWithThatPower.length > 0) {
    return "Mutantes con ese poder: " + mutantsWithThatPower;
  } else {
    return "No se encontró ningún mutante con el poder " + power;
  }
}

result = findMutantByPower(mutants, power);
console.log(result);
