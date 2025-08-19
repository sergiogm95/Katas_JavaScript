/*Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá 
simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()*/

const diceSides = 6 //Introducir el número de caras

//He sacado esta función de un manual de JS, para aleatorizar números enteros:
function rollDice(diceSides){
    let min = 1
    let max = diceSides
    const minCeiled = Math.ceil(min) //Redondeamos el mínimo hacia arriba, para evitar decimales en el resultado. Aquí no hace falta porque el mínimo es siempre 1 cara del dado, pero lo pongo completo para recordarlo mejor.
    const maxFloored = Math.floor(max)//Redondeamos el máximo hacia abajo.
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)//Traducción, que me ha costado entender todo: el número aleatorio de 0 a 1 se multiplica por el rango que va desde el mínimo redondeado hacia arriba hasta el máximo redondeado hacia abajo. Se le suma el mínimo para que no haya resultados menores a 1 (0.213 * 1 no daría como resultado una posible cara de un dado, pero 0.213 * 1 + 1 sí, si se redondea)
}
console.log(rollDice(diceSides))

//La función funciona (badum tss), pero la he simplificado, aprovechando que las caras de un dado siempre son números enteros. Solo hay que redondear el resultado hacia abajo y sumar 1.
function simpleRollDice(diceSides){
    return Math.floor(Math.random() * diceSides) +1
}

console.log(simpleRollDice(diceSides))

//He probado muchas veces ambas para asegurarme de que salen resultantes con la misma frecuencia los números máximo y mínimo de caras.