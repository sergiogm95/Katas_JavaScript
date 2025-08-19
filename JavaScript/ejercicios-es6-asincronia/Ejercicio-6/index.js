/*6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
alumnos que esten aprobados usando la función .reduce().

6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

//6.1
const sum = exams.reduce((acc, exam) => acc + exam.score, 0);


//6.2
const aprobados = []
for (let exam of exams){
    if (exam.score >= 5){
        aprobados.push(exam.score)
    }
}
const sumAprobados = aprobados.reduce((acc, note) => acc + note, 0)


//Me parecía raro tener que usar un bucle y luego el .reduce, así que busqué la forma de hacerlo con una sola acción (no viene en el temario)
/*const totalAprobados = exams.reduce((acc, exam) => {
    return exam.score >= 5 ? acc + exam.score : acc;
    }, 0);

No tuve problema para hacer el ejercicio de forma normal con el bucle, pero para esta segunda opción habría tenido muchas dificultades sin la IA, porque nunca había usado operadores ternarios.*/

//6.3
const averageScore = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length
//Lo hice en dos pasos, pero me di cuenta de que se podía reducir a uno dividiendo el primer total entre exams.length directamente
